import React              from "react";
import betterKubernetes   from '../images/better-kubernetes.svg';

export default function Feature1() {
  return (
    <div id="features" className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              className ="img-fluid"
              src       ={betterKubernetes}
              alt       ="alternative"
            />
          </div>
          <div className="col-lg-6">
            <div className="text-container">
              <h3>The K8 Proxy Desktop</h3>
              <p>
              k8-proxy-desktop is a desktop based applications that provides a single entry point to all K8 projects.
               Build with Electron , react, it is aimed at providing a single window integration with GW git resources,
                file-drop, forensic-workbench, jupyter notebooks, and K8-* services. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
