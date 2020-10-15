import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import WebIFrameView            from '../components/WebIFrameView'
import Loader                   from '../components/Loader';
import Footer                   from '../components/Footer';
import * as Utils               from '../utils/utils';
import SideDrawer               from '../components/SideDrawer';

const useStyles = makeStyles((theme) => ({
     root:       {
        display:        'flex', 
        flexFlow:       'wrap'
    },
    gridItemRight:{
        position:       'relative'
    },
    gridItemLeft:{

    },
    toolbar: {
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'flex-end',
        padding:        theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow:       1,
    },
    contentArea:{
         minHeight:      '81vh',
         padding:        theme.spacing(3),
    }
  }));
const { useState, useEffect } = React;
function ForensicWorkbench (){
    const classes = useStyles(); 
    const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
        let loadingTime = process.platform == 'win32'? 5000:3000;
        setTimeout(() => {
            setShowLoader(false);
        },loadingTime);
    }, []); 

    console.log(process.platform);

    return(
        <div className={classes.root}> 
            <SideDrawer showBack={false}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.contentArea}>
                    {showLoader  && <Loader/> }   
                    <WebIFrameView url =  {Utils.FW_URL} />
                </div>                    
                <Footer/>
            </main>
        </div>
    )
}

export default ForensicWorkbench;
