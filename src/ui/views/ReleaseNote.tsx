import * as React               from 'react';
import { Grid }                 from '@material-ui/core';
import { makeStyles }           from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root:       {
        flexGrow:       1, 
    },
    webAnchor:{
        color:              '#3c6c90',        
        fontFamily:         'Nunito Sans',
        width:              '100%',
        textAlign:          'center',
        margin:             '20px',
        fontSize:           '18px'
    },
    releaseNoteContainer:{
        maxWidth:           '100%',
        borderBottom:      '1px solid #ccc',
        paddingBottom:      '10px',
        marginBottom:       '15px',
    },
    releaseHeading:{
        color:              '#3c6c90',        
        fontFamily:         'Nunito Sans',
        borderBottom:       '1px solid #a3a3a3',
        paddingBottom:      '5px',
        margin:             '20px 0 15px 0',
        width:              '100%'
    },
    releaseGrid:{
        float:              'left',
        width:              '100%'
    },
    releaseList:{

    },
    releaseVersion:{
        background:         '#0d334f',
        color:              '#fff',
        fontFamily:         'Nunito Sans',
        width:              '50px',
        float:              'left',
        textAlign:          'center',
        borderRadius:       '2px',
        fontSize:           '12px',
        padding:            '4px 0',
        marginRight:        '10px'
    },
    releaseDate:{
        fontFamily:         'Nunito Sans',
        float:              'left',
        width:              'calc(100% - 60px)',
        margin:             '0 0 10px 0'
    },
    releaseContent:{
        fontFamily:         'Nunito Sans',
        float:              'left',
        paddingLeft:        '63px',
        width:              '100%',
        boxSizing:          'border-box'
    },
    releaseStatusFixed:{
        background:         '#4194f2',
        color:              '#fff',
        fontFamily:         'Nunito Sans',
        fontSize:           '11px',
        padding:            '2px 5px',
        borderRadius:       '2px',
        float:              'left'
    },
    releaseText:{
        color:              '#717171',
        fontSize:           '14px',
        width:              'calc(100% - 45px)',
        float:              'left',
        margin:             '0 0 0 5px',
        lineHeight:         '18px'
    }
 }));


function ReleaseNote(){
    const classes = useStyles(); 
    return(
        <div>    
            <Grid container>   
                <a className={classes.webAnchor} href="https://rajmbcoderx.github.io/k8-electron-react/" title="k8-proxy-desktop">K8 Proxy Desktop</a>
                <h3 className={classes.releaseHeading}> <a className={classes.webAnchor} href="https://github.com/rajmbcoderx/k8-electron-react/releases/tag/0.2.0"> Realease Note</a></h3>
                 <Grid className={classes.releaseNoteContainer}>                    
                    <div className={classes.releaseGrid}>
                        <div className={classes.releaseList}>                            
                            <div className={classes.releaseVersion}>0.0.2</div>
                            <h4 className={classes.releaseDate}>September 21th 2020 </h4>
                        </div>
                        <div className={classes.releaseContent}>
                            <span className={classes.releaseStatusFixed}>Fixed</span>
                            <p className={classes.releaseText}>Website should be linked to the right platform file/s which the users can download #54 </p>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.releaseNoteContainer}>                    
                    <div className={classes.releaseGrid}>
                        <div className={classes.releaseList}>                            
                            <div className={classes.releaseVersion}>0.0.2</div>
                            <h4 className={classes.releaseDate}>September 22th 2020 </h4>
                        </div>
                        <div className={classes.releaseContent}>
                            <span className={classes.releaseStatusFixed}>Fixed</span>
                            <p className={classes.releaseText}>Use-case : As a user I should be able to add new suggestion or bug on the gitlab issue #44 </p>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.releaseNoteContainer}>                    
                    <div className={classes.releaseGrid}>
                        <div className={classes.releaseList}>                            
                            <div className={classes.releaseVersion}>0.0.2</div>
                            <h4 className={classes.releaseDate}>September 23th 2020 </h4>
                        </div>
                        <div className={classes.releaseContent}>
                            <span className={classes.releaseStatusFixed}>Fixed</span>
                            <p className={classes.releaseText}>Use-case : As a user on home page for list of new features in the current version (Issues notes / Bugs ) #43</p>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.releaseNoteContainer}>                    
                    <div className={classes.releaseGrid}>
                        <div className={classes.releaseList}>                            
                            <div className={classes.releaseVersion}>0.0.2</div>
                            <h4 className={classes.releaseDate}>September 24th 2020 </h4>
                        </div>
                        <div className={classes.releaseContent}>
                            <span className={classes.releaseStatusFixed}>Fixed</span>
                            <p className={classes.releaseText}> As a user I should be able to add new suggestion or bug on the gitlab issue #40</p>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.releaseNoteContainer}>                    
                    <div className={classes.releaseGrid}>
                        <div className={classes.releaseList}>                            
                            <div className={classes.releaseVersion}>0.0.2</div>
                            <h4 className={classes.releaseDate}>September 24th 2020 </h4>
                        </div>
                        <div className={classes.releaseContent}>
                            <span className={classes.releaseStatusFixed}>Fixed</span>
                            <p className={classes.releaseText}>Update to have all the points on Readme to install #38 </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        
    )
    
}

export default ReleaseNote;