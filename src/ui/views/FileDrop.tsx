import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import WebIFrameView            from '../components/WebIFrameView'
import { useState, useEffect }  from 'react';
import Loader                   from '../components/Loader';
import Footer                   from '../components/Footer';
import FileDropSampleFiles      from './FileDropSampleFiles';
import * as Utils               from '../utils/utils';
import SideDrawer               from '../components/SideDrawer';


const useStyles = makeStyles((theme) => ({
     root:  {         
         display:        'flex',
     },
    gridItemRight:{
        position:        'relative'
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

function FileDrop (){
    const classes = useStyles();    
    const [showLoader, setShowLoader] = useState(true);  
    useEffect(() => {
      setTimeout(() => { setShowLoader(false);},500);
    }, []); 

    return(
        <div className={classes.root}>        
            <SideDrawer showBack={false}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.contentArea}>
                    <FileDropSampleFiles/>
                    {showLoader  && <Loader/> }  
                    <WebIFrameView url = {Utils.FILE_DROP_URL} />
                </div>                    
                <Footer/>
            </main>
        </div>
    )
}

export default FileDrop;
