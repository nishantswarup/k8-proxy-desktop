import * as React               from 'react';
import { Container, Grid }      from '@material-ui/core';
import { makeStyles }           from '@material-ui/core/styles';
import logo                     from '../assets/images/GWWelcomeLogo.jpg'
import ReleaseNote              from './ReleaseNote'
import { Link}                  from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root:       {
        flexGrow:       1, 
    },
    fullWidth:{
        maxWidth:       '100%'
    },
    container:  {
        display:        'grid',
        gridGap:        theme.spacing(2),
        fontFamily:     'Nunito Sans'
    },
   gridItemRight:{
       borderLeft:     '1px solid #ccc',
       padding:         '15px!important'
   },
   gridItemLeft:{
        textAlign:       'center',
        padding:         '15px!important'
   },
   welcomeTxt:{
        color:           '#0c3350',
        fontFamily:      'Nunito Sans'
   },
   heading:{
        color:           '#0c3350',
        fontFamily:      'Nunito Sans'       
   },
   logo:{
      
   },
   logoImg:{
        width:            '280px'
   },
   version:{
        color:           '#575757'
   },
   abtContent:{
        color:           '#575757',
        lineHeight:      '24px',
        fontSize:        '15px',
        padding:         '0 20px',
        marginBottom:    '30px'
   },
   btnGroup:{        
        width:           '35%',
        margin:          '0px auto',
        fontFamily:      'Nunito Sans'
   },
   getStartBtn:{
        minWidth:        '212px',
        background:      '#47848f',
        color:           '#fff',
        border:          'none',
        padding:         '10px 20px',
        borderRadius:    '3px',
        cursor:          'pointer',
        display:         'inline-block',
        textDecoration:  'none'
   },
   dwWindowBtn:{
        fontFamily:      'Nunito Sans',
        border:          '2px solid #47848f',
        padding:         '8px 20px',
        borderRadius:    '1px',
        color:           '#47848f',
        minWidth:        '225px',
        margin:          '20px 0',
        cursor:          'pointer',
        display:         'inline-block',
        textDecoration:  'none'
   },
   dwMacBtn:{
        fontFamily:      'Nunito Sans',
        fontWeight:      'bold',        
        border:          'none',
        color:           '#6a6a6a',
        marginBottom:    '20px',
        fontSize:        '17px',
        cursor:          'pointer',
        display:         'inline-block',
        textDecoration:  'none'
   },
   termsCondition:{
        fontFamily:      'Nunito Sans',
        fontSize:        '14px',
        float:           'left',
        width:           '100%',
        textAlign:       'center',
        marginTop:       '30px'
   },
   colorGreen:{
        color:           '#47848f',
        textDecoration:  'none'
   }
 }));
 

function WelcomePage(){
    const classes = useStyles(); 
    //const [value, setValue] = React.useState(false);
    // const getStarted = () =>{
    //     localStorage.setItem('test', value);
    // }
    return(
        <div>                
        <Container className={classes.fullWidth}>              
            <Grid container spacing={2}>
                <Grid item xs={9} className={classes.gridItemLeft}>
                    <h2 className={classes.welcomeTxt}>Welcome to K8 Proxy Desktop</h2>
                    <div className={classes.logo}>
                         <img src={logo} className={classes.logoImg}></img>
                         <h2 className={classes.heading}>K8 Proxy Desktop</h2>
                         <h6 className={classes.version}>0.2.0</h6>
                         <p className={classes.abtContent}>k8-proxy-desktop is a desktop based applications that provides a single entry point to all K8 projects. Build with Electron , react, it is aimed at providing a single window integration with GW git resources, file-drop, forensic-workbench, jupyter notebooks, and K8-* services. It is a standalone application for MacOS, Windows and Linux operating systems.</p>
                    </div>
                    <div className={classes.btnGroup}>
                        <div> </div><Link to="/home" className={classes.getStartBtn}>Get Started</Link>
                        <a href="https://github.com/rajmbcoderx/k8-electron-react/releases/download/0.2.0/k8-proxy-desktop.exe.zip" className={classes.dwWindowBtn}>Download for windows</a>
                        <a href="https://github.com/rajmbcoderx/k8-electron-react/releases/download/0.2.0/k8-proxy-desktop.dmg.zip" className={classes.dwMacBtn}>Download for <span className={classes.colorGreen}>MacOS</span></a>
                    </div>
                    <footer>
                        <p className={classes.termsCondition}>By Downloading, you agree to the <a href="https://github.com/rajmbcoderx/k8-electron-react/blob/master/LICENSE" className={classes.colorGreen}>Terms and Conditions.</a></p>
                    </footer>
                </Grid>
                <Grid item xs={3} className={classes.gridItemRight}>
                    <ReleaseNote/>
                </Grid>
            </Grid>

        </Container>
    </div>
        
    )
}

export default WelcomePage;