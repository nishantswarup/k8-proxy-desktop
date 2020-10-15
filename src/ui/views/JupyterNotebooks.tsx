import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import SideDrawer               from '../components/SideDrawer';
import Footer                   from '../components/Footer';


/** Main view of the application to display all the targeted use cases */
const useStyles = makeStyles((theme) => ({
    root:       {
        display:        'flex', 
        flexFlow:       'wrap'
    },
    gridItemRight:{
        minHeight:      '86vh'
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


function JupyterNotebooks(){
    const classes = useStyles(); 
    return(    
        <div className={classes.root}>     
            <SideDrawer showBack={false}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.contentArea}>
                    <h2>TBD</h2>    
                </div>
                <Footer/>
            </main>   
        </div>  
        
    )
}

export default JupyterNotebooks;