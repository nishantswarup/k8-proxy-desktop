import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';

/** Main view of the application to display all the targeted use cases */
const useStyles = makeStyles((theme) => ({
    
    sampleFileSection:{
        padding:                    '0',
        marginBottom:               '20px',

        '& h3':{
            color:                  '#0c3451',
            borderBottom:           '1px solid #ccc',
            paddingBottom:          '5px',
            margin:                 '0 0 10px 0'
        },
    },
    sampleFileLists:{
        float:                      'left',
        marginBottom:               '20px',
        width:                      '100%',
        '& ul': {
            margin:                 '0',
            padding:                '0',
            listStyle:              'none',

            '& li':{
                float:              'left',
                width:              '25%',
                marginBottom:       '10px',
            }
        },
        '& a':{
            float:                  'left',
            color:                  '#276c86',
            textDecoration:         'none',
            fontWeight:             '600',
            fontSize:               '13px',

            '&:hover':{
                textDecoration:     'underline'
            }
        }
    },
    icons:{
            float:                  'left',
            fontSize:               '13px',
            margin:                 '3px 2px 0 0',
            color:                  '#666'
    }
 }));


function FileDropSampleFiles(){
    const classes = useStyles(); 
    return(
        <div className={classes.sampleFileSection}>     
            <h3>Download Sample Files</h3>

            <div className={classes.sampleFileLists}>
                <ul>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Complete+works+of+shakespeare+hidden+zip_Polyglot_image.jpg"><GetAppIcon className={classes.icons}/> JPG file</a>
                    </li>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Execute+Java+Script_JS_PDF.pdf"><GetAppIcon className={classes.icons}/> PDF file</a>
                    </li>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/MacroRunCalculator.docm"><GetAppIcon className={classes.icons}/> DOCM file ​ ​</a>
                    </li>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Opens+calculator+app_macro_MS+excel+2003+and+later.xlsm"><GetAppIcon className={classes.icons}/> MS Excel 2003 and later file</a>
                    </li>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Opens+calculator+app_macro_MS+excel+97+2003.xls"><GetAppIcon className={classes.icons}/> MS Excel 1997 to 2003 file</a>
                    </li>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Contains+Meta+data_Meta+Data_MS+Word+2003+and+later.docx"><GetAppIcon className={classes.icons}/> MS Word 2003 and later file</a>
                    </li>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Contains+Meta+data_Meta+Data_MS+Word+97+2003v2.doc"><GetAppIcon className={classes.icons}/> MS word 1997 to 2003 file ​</a>
                    </li>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/External+Hyperlink+to+google_Hyperlink_MS+Powerpoint+2003+and+later.pptx"><GetAppIcon className={classes.icons}/> MS Powerpoint 2003 and later file</a>
                    </li>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/External+Hyperlink+to+google_Hyperlink_MS+Powerpoint+97+2003.ppt"><GetAppIcon className={classes.icons}/> MS Powerpoint 1997 to 2003 file</a>
                    </li>
                    <li>
                        <a href="https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Unable+to+Rebuild_PNG+magic+No.jpg"><GetAppIcon className={classes.icons}/> Corrupted File</a>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

export default FileDropSampleFiles;