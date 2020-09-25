import * as React               from 'react';
import { Container, Grid }      from '@material-ui/core';
import { makeStyles }           from '@material-ui/core/styles';
import      Header              from '../components/Header'
import      Sidebar             from '../components/SideBar'
import WebIFrameView            from '../components/WebIFrameView'
import Loader                   from '../components/Loader';

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
     },
    gridItemRight:{
        position:       'relative'
    },
    gridItemLeft:{

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
        <div>     
            <Header showBack={false} ></Header>            
            <Container className={classes.fullWidth}>              
                <Grid container spacing={2}>
                    <Grid item xs={3} className={classes.gridItemLeft}>
                        <Sidebar></Sidebar>
                    </Grid>
                    <Grid item xs={9} className={classes.gridItemRight}>
                        {showLoader  && <Loader/> }   
                        <WebIFrameView url = "https://forensic-workbench.com/" />
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}

export default ForensicWorkbench;
