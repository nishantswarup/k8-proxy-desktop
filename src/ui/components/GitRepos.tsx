import * as React                       from 'react';
import { Container, List, ListItem }    from '@material-ui/core';
import { makeStyles }                   from '@material-ui/core/styles';
import ArrowRightIcon                   from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
    listContainer:{
        borderTop:      '2px solid #0c80d5',
        padding:        theme.spacing(2),
        position:       'relative'
    },
    urlList:{        
        color:          '#0c3451',
        // width:          '300px',
        width:          '100%',
        textDecoration: 'none',
        borderBottom:   '1px solid #ccc',
        padding:        '10px 0 10px 3px',
        fontWeight:     'bold',
        fontSize:       '14px',
        
    },
    heading:{
        margin:         '0px 0 20px 0',
        float:          'left',
        width:          '100%'
    },
    listItem:{
        width:          '50%',
        float:          'left',
        // marginTop:      '10px'
    },
    viewGraph:{
        width:          '100%',
        textAlign:      'center',
        margin:         '30px 0',
        display:        'inline-block'
    },
    viewGraphBtn:{
        background:     '#0c3451',
        color:          '#fff',
        padding:        '10px 20px',
        border:         'none',
        borderRadius:   '3px'
    }
  }));

function GitRepos(){
    const classes = useStyles();
    return(
        <Container>            
            <h2 className={classes.heading}>Here are the k8 proxy projects</h2>
            <p>Select the repo you want to visit</p>
            <List className={classes.listContainer}>       
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/Open-Source/tree/master/upwork/project-k8-glasswall-rebuild">K8 Glasswall Rebuild</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/k8-traffic-generator">k8-traffic-generator</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/k8-data-visualization">k8-data-visualization</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/k8-reverse-proxy">k8-reverse-proxy</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/k8-performance-use-cases">k6-performance-use-cases</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/k8-test-data">k8-test-data</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/filetrust/rebuild-k8s-filetypedetection">rebuild-k8s-filetypedetection</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/threat-intelligence-reporting">Threat-intelligence-reporting</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/s-k8-releases">k8-ova</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/k8-slack-bot">k8-slack-bot</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/k8-proxy-desktop">k8-electron-react</a></ListItem>
                <ListItem className={classes.listItem}><ArrowRightIcon></ArrowRightIcon><a  className={classes.urlList} href="https://github.com/k8-proxy/k8-security">p-k8-security</a></ListItem>
            </List>
            <div className={classes.viewGraph}>                    
                <button className={classes.viewGraphBtn}>View Graphs</button>
            </div>
        </Container>
    )
}

export default GitRepos;