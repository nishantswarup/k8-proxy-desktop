
export const  MAC_BUILD = "https://github.com/rajmbcoderx/k8-electron-react/releases/download/0.2.0/k8-proxy-desktop.dmg.zip"
export const  WINDOWS_BUILD = "https://github.com/rajmbcoderx/k8-electron-react/releases/download/0.2.0/k8-proxy-desktop.exe.zip"
export const  LINUX_BUILD ="https://github.com/rajmbcoderx/k8-electron-react/releases/download/0.2.0/k8-proxy-desktop.snap.zip"

export let getOS = () =>{
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }
  

export let downloadUrl =() =>{
    let platform = getOS();
    if ( platform== 'Mac OS' || platform == 'iOS'){
            return MAC_BUILD;
    }else if(platform == "Windows"){
        return WINDOWS_BUILD;
    }else if(platform == 'Linux'){
        return LINUX_BUILD
    }else{
        return MAC_BUILD
    }

}