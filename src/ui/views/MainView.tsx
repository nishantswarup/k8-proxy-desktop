import * as React                   from 'react';
import { makeStyles }               from '@material-ui/core/styles';
import      GitRepos                from '../components/GitRepos'
import      Footer                  from '../components/Footer'
import SideDrawer                   from '../components/SideDrawer';


const useStyles = makeStyles((theme) => ({
     root:       {
        display:        'flex', 
     },
    gridItemRight:{
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

function MainLayout (){
    const classes = useStyles(); 
    return(
        <div className={classes.root}>     
            <SideDrawer showBack={false}/>
            <main className={classes.content}>
            <div className={classes.toolbar} />
                <div className={classes.contentArea}>
                    <GitRepos></GitRepos>
                </div>                      
                <Footer/>
            </main>
        </div>  
    )
}

export default MainLayout;
