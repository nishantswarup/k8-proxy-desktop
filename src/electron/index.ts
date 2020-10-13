const {
    app,
    BrowserWindow,
    WebContents,
    Certificate,
    Menu,
    Tray }          = require('electron');
const remote = app.remote;
const path          = require('path')
const shell         = require('electron').shell
const { dialog }    = require('electron')
const dir           = path.resolve(__dirname, `..`)


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
            label: 'K8-Proxy-Desktop',
            submenu: [
                {
                    label: 'Home',
                    click: openMainWindow,
                },
                {
                    type:'separator'
                }, 
                {
                    label:'About k8 Proxy Desktop',
                    click: async (): Promise<void> => {
                        const { response } = await dialog.showMessageBox({
                        message: `About K8 Proxy Desktop`,
                        detail: ` K8 Proxy desktop  applications that provides a single entry point to all K8 projects. Build with electron and react, it is aimed at providing a single window integration with GW git resources, file-drop, forensic-workbench, jupyter notebooks, and K8-* services.`,
                        buttons: [ `Ok`],
                        defaultId: 1,
                        type: `info`,
                        })
                    },
                },
                {
                    label:'Check For Update',
                    click: async (): Promise<void> => {
                        const { response } = await dialog.showMessageBox({
                        message: `Check For Update`,
                        detail: `Soon will rollout this feature`,
                        buttons: [ `Ok`],
                        defaultId: 1,
                        type: `info`,
                        })
                    },
                },
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
                        message: `Quit K8 Proxy Desktop?`,
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

