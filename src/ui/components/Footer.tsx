import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import                          '../assets/style/style.css'
import * as Utils               from '../utils/utils'

const { ipcRenderer } = require('electron');


const useStyles = makeStyles((theme) => ({
    root:       {
        flexGrow:       1, 
    },
    footerNav:{        
        background:         '#0c3451',
        float:              'right',
        position:           'relative',
        width:              '100%',
        textAlign:          'center',
        bottom:             '0',
        '& ul':{
            padding:        '0 30px 0 0',
            margin:         '0',
            display:        'flex',
            justifyContent: 'center',
            listStyle:      'none'
        }
    },
    footerNavItem:{
        listStyle:          'none',
        position:           'relative',
        float:              'left',
        padding:            '10px 10px',
        color:              '#fff',
    },
    subnNav:{
        display:            'none',
        position:           'absolute',
        background:         '#0C3451',
        top:                '58px',
        right:              '0'
    },    
    navBtn:{
        background:         'transparent',
        border:             'none',           
        fontSize:           '13px',
        cursor:             'pointer',
        color:              '#fff',
        '&:focus':{
            border:         '0',
            outline:        '0'
        }     
    },
    subnNavItem:{
        float:              'left',
        color:              '#fff',
        textDecoration:     'none',
        fontSize:           '13px',
        borderTop:          '1px solid #fff',
        padding:            '10px 20px',
        boxSizing:          'border-box',
        '&:hover':{
            background:     '#144e78'
        }
        
    }, 
    version:{
        padding:            '14px',
        position:           'absolute',
        right:              '0',
        color:              '#fff',
        fontSize:           '10px'
    },
    copyrightText:{
        padding:            '13px 10px',
        //width:              '100%',
        textAlign:          'center',
        fontSize:           '11px',
        float:              'left',
        boxSizing:          'border-box',
        color:              '#fff',
    }
    
 }));
 

//  const notification = document.getElementById('notification');
//  const message = document.getElementById('message');
//  const restartButton = document.getElementById('restart-button');
//  ipcRenderer.on('update_available', () => {
//    console.log('update_available in script some changes also there')
//    ipcRenderer.removeAllListeners('update_available');
//    message.innerText = 'A new update is available. Downloading now...';
//    notification.classList.remove('hidden');
//  });
//  ipcRenderer.on('update_downloaded', () => {
//     console.log('update_downloaded in script')
//    ipcRenderer.removeAllListeners('update_downloaded');
//    message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
//    restartButton.classList.remove('hidden');
//    notification.classList.remove('hidden');
//  });
//  ipcRenderer.on('checking-for-update', () => {
//     console.log('checking-for-update in script')
//  });
//  ipcRenderer.on('update-not-available', () => {
//     console.log('update-not-available in script')
//  });
// function closeNotification() {
//  notification.classList.add('hidden');
// }
// function restartApp() {
//  ipcRenderer.send('restart_app');
// }



function Footer(){
    const classes = useStyles(); 
    const [version, setVersion] = React.useState("0.1")    

    const getVersion = () =>{   
        ipcRenderer.send('app_version');
        console.log("Added version element");
        ipcRenderer.on('app_version', (event:any, arg:any) => {
          console.log("app_version callback "+arg.version);
            console.log('New Version ' + arg.version)
        });
       }

    React.useEffect(() => {
        getVersion()     
      }, []);
      

   return(
    <div className={classes.footerNav}>                
        <ul>
              
            <li>
                <span className={classes.copyrightText}>© Copyright 2020 - Glasswall Solutions Ltd. All Rights Reserved</span>
            </li>
            <li className={classes.footerNavItem}> 
                <a className={classes.navBtn} href={Utils.LICENSE_URL}> View License</a>
            </li>
            <li className={classes.version}> v {version} </li> 
        </ul>
        
    </div>        
    )
}

export default Footer;