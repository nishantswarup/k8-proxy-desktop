import React        from "react";
import headerLens   from '../images/header-lens.png';
import * as Utils     from '../utils/utils'

export default function Download() {
  return (
    <div id="download" className="basic-4">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-6 col-xl-5"> */}
          <div className="col-lg-12">
            <div className="text-container text-center">
              <h2>
                Download <span className="blue">K8 Proxy Desktop</span>
              </h2>
              <p className="p-large">
              k8-proxy-desktop is a desktop based applications that provides a single entry point to all K8 projects.
               Build with Electron , react, it is aimed at providing a single window integration with GW git resources,
                file-drop, forensic-workbench, jupyter notebooks, and K8-* services. It is a standalone application for MacOS,
                Windows and Linux operating systems. K8 Proxy Desktop is open source. Download it today!
              </p>
              <a
                className = "btn-solid-lg"
                href      = {Utils.downloadUrl()}>
                <i  className="fas fa-download">
                </i> Download
              </a>

              <a  href = {Utils.MAC_BUILD}>
                    <i className  ="supported-os-icon fab fa-apple"></i>
              </a>
              <a  href = {Utils.WINDOWS_BUILD}>
                    <i className ="supported-os-icon fab fa-windows"> </i>
               </a>
               <a  href = {Utils.LINUX_BUILD}>
                    <i className ="supported-os-icon fab fa-linux"></i>
              </a>
            </div>
          </div>
          {/* <div className="col-lg-6 col-xl-7">
            <div className="image-container">
              <img
                className = "img-fluid"
                src       = {headerLens}
                alt       = "alternative"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
