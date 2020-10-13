
export const WEBSITE_URL            = 'https://rajmbcoderx.github.io/k8-electron-react/';
export const RELEASE_URL            = 'https://github.com/rajmbcoderx/k8-electron-react/releases/tag/0.4.0';
export const LICENSE_URL            = 'https://github.com/k8-proxy/k8-proxy-desktop/blob/master/LICENSE';
export const FW_URL                 = 'https://forensic-workbench.com/';
export const FILE_DROP_URL          = 'https://file-drop.co.uk/';
export const REBUILD_ENGINE_URL     = 'https://8oiyjy8w63.execute-api.us-west-2.amazonaws.com/Prod/api/rebuild/base64';
export const REBUILD_ANALYSIS_URL   = 'https://o7ymnow6vf.execute-api.us-west-2.amazonaws.com/Prod/api/Analyse/base64';
export const REPO_GIT_ISSUE_URL     = "https://github.com/k8-proxy/k8-proxy-desktop/issues/new";

export const REBUILD_API_KEY        = 'dp2Ug1jtEh4xxFHpJBfWn9V7fKB3yVcv60lhwOAG';
export const VERSION                = '0.5.0'
export const _PROCESSED_FOLDER      = "./processed/"
export const _CLEAN_FOLDER          = "clean/"
export const _ORIGINAL_FOLDER       = "original/"
export const _REPORT_FOLDER         = "report/"

export const OUTPUT_DIR_FLAT        = "flat";
export const OUTPUT_DIR_HIERARCY    = "hierarcy";

export const RELEAE_NOTES           =[
                                        {
                                          "date":"October 8th 2020",
                                          "desc":"Rebuild Output (tmp) directory structure need to be modified."
                                        }, 
                                        {
                                          "date":"October 7th 2020",
                                          "desc":"An option to user to select custom location for saving rebuild files."
                                        },
                                        {
                                          "date":"October 6th  2020",
                                          "desc":"Same directory format to be kept for dragged directory post re-build api."
                                        }, 
                                        {
                                          "date":"October 5th  2020 ",
                                          "desc":"Check box to be provided so that user can select to keep existing directory format or flat format."
                                        }, {
                                          "date":"October 4th  2020 ",
                                          "desc":"Current website to be replicated with file drop feature"
                                        }
                                      ]

export const sleep = (milliseconds:number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  

  const _p8=(s:boolean) =>{

    var p = (Math.random().toString(16)+"000000000").substr(2,8);
    return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
}
 export const guid=()=> {
   
    //return _p8(false) + _p8(true) + _p8(true) + _p8(false);
    return _p8(false) + _p8(true);
    
}

export const stipFileExt =(filename: string)=>{
  return filename.split('.').slice(0, -1).join('.')
}

export const getFileHash=(content: string)=> {
  var crypto = require('crypto');
  // change to 'md5' if you want an MD5 hash
  var hash = crypto.createHash('sha1');

  // change to 'binary' if you want a binary hash.
  hash.setEncoding('hex');

  // the text that you want to hash
  hash.write(content);

  // very important! You cannot read from the stream until you have called end()
  hash.end();

  // and now you get the resulting hash
  var sha1sum = hash.read();
  return sha1sum;
}