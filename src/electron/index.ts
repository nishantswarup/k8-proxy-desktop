const {
    app,
    BrowserWindow,
    WebContents,
    Certificate,
    Menu,
    Tray,
    ipcMain}                = require('electron');
const remote                = app.remote;
const path                  = require('path')
const shell                 = require('electron').shell
const { dialog }            = require('electron')
const dir                   = path.resolve(__dirname, `..`)
const { autoUpdater }       = require('electron-updater');
const log                   = require('electron-log');

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'debug';
log.info('App starting...');

// function makeTray(){
//     const tray = new Tray(path.resolve(dir, `assets`, `IconTemplate.png`))
 
//     const contextMenu = Menu.buildFromTemplate([
//         {
//           label: `Show Gatsby Desktop`,
//           click: openMainWindow,
//         },
//         {
//           label: `Quit...`,
//           click: async (): Promise<void> => {
//             openMainWindow()
//             const { response } = await dialog.showMessageBox({
//               message: `Quit Gatsby Desktop?`,
//               detail: `This will stop all running sites`,
//               buttons: [`Cancel`, `Quit`],
//               defaultId: 1,
//               type: `question`,
//             })
    
//             if (response === 1) {
//               app.quit()
//             }
//           },
//         },
//       ])
//       tray.setContextMenu(contextMenu)
// }


function createMenu(){
    var template =[
        {
            label: 'Desktop'
        },
        {
            label: 'Glasswall Proxy Desktop',
            submenu: [
                {
                    label: 'Home',
                    click: openMainWindow,
                },
                {
                    type:'separator'
                }, 
                {
                    label:'About Glasswall Proxy Desktop',
                    click: async (): Promise<void> => {
                        const { response } = await dialog.showMessageBox({
                        message: `About Glasswall Proxy Desktop`,
                        detail: ` Glasswall proxy desktop is a desktop based applications that provide multi file drag and drop rebuild workflow.`,
                        buttons: [ `Ok`],
                        defaultId: 1,
                        type: `info`,
                        })
                    },
                },
                // {
                //     label:'Check For Update',
                //     click: async (): Promise<void> => {
                //         const { response } = await dialog.showMessageBox({
                //         message: `Check For Update`,
                //         detail: `Soon will rollout this feature`,
                //         buttons: [ `Ok`],
                //         defaultId: 1,
                //         type: `info`,
                //         })
                //     },
                // },
                {
                    type:'separator'
                },
                {
                    type:'separator'
                }, 
                {
                    label:'Quit',
                    click: async (): Promise<void> => {
                        //openMainWindow()
                        const { response } = await dialog.showMessageBox({
                        message: `Quit Glasswall Proxy Desktop?`,
                        detail: `This will stop all running sites`,
                        buttons: [`Cancel`, `Quit`],
                        defaultId: 1,
                        type: `question`,
                        })
                
                        if (response === 1) {
                            app.quit()
                        }
                    },
                }
            ]
        },
        {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click() { 
                    shell.openExternal(' https://github.com/k8-proxy/k8-proxy-desktop')
                } ,
                accelerator: 'CmdOrCtrl+Shift+L'
            }
        ]
        }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

}


function makeWindow(): typeof BrowserWindow {
    
    const tray = new Tray(path.resolve(dir, `assets`, `IconTemplate.png`))
    let window = new BrowserWindow({
        title: `k8 Proxy Desktop`,
        width: 1200,
        height: 800,
        fullscreenable: false,
        icon:tray,
        trafficLightPosition: { x: 8, y: 18 },
        webPreferences: {
            nodeIntegrationInWorker: true,
            nodeIntegration: true,
            webSecurity: false,
            allowDisplayingInsecureContent: true,
            allowRunningInsecureContent: true,
            enableRemoteModule: true
        }
    })
   
    //to add chrome dev tools 
    //window.webContents.openDevTools();
    return window;
}

let mainWindow: typeof BrowserWindow | undefined

function openMainWindow(): void {
    let url = `file://${__dirname}/../ui/index.html`;

    if (!mainWindow || mainWindow.isDestroyed()) {
      mainWindow = makeWindow()
      mainWindow.loadURL(url)
    } else {
      if (!mainWindow.webContents.getURL()) {
        mainWindow.loadURL(url)
      }else if(!mainWindow.webContents.getURL().endsWith('index.html#/')){
        mainWindow.loadURL(url)
      }
    }
   
  }

app.commandLine.appendSwitch('ignore-certificate-errors', 'true');
app.commandLine.appendSwitch('allow-insecure-localhost', 'true');

app.on('ready', () => {
  createMenu();
  openMainWindow()
  
});


app.on('certificate-error', (event: Event, contents: typeof WebContents, url: String, error: String, certificate:  typeof Certificate, callback: Function) => {
  if (url === 'https://forensic-workbench.com/') {
    event.preventDefault()
    callback(true)
  } else {
    callback(false)
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    makeWindow()
  }
})


ipcMain.on('app_version', (event:any) => {
  event.sender.send('app_version', { version: app.getVersion() });
});


autoUpdater.on('update-available', () => {
  log.info("Update available");
  mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
    log.info('update download')
  mainWindow.webContents.send('update_downloaded');
});

autoUpdater.on('checking-for-update', () => {
    log.info('checking for update')
    mainWindow.webContents.send('checking-for-update');
});

autoUpdater.on('error', (err:any) => {
    log.info('Error checking for update')
    log.info(err)
    log.info(err.stack)
});

autoUpdater.on('update-not-available', () => {
    log.info('update-not-available')
    mainWindow.webContents.send('update-not-available');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});

setInterval(() => {
    log.info('Checking for updates')
  autoUpdater.checkForUpdatesAndNotify()
}, 60000)