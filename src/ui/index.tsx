import * as React                 from 'react';
import * as ReactDOM              from 'react-dom';
import      {HashRouter, Route }  from 'react-router-dom'

import      Mainview              from './views/MainView'
import      FileDrop              from './views/FileDrop'
import      DashboardK8           from './views/DashboardK8'
import      JupyterNotebook       from './views/JupyterNotebooks'
import      SlackBotUi            from './views/SlackBotUi'
import      ForensicWorkbench     from './views/ForensicWorkbench'
import      WelcomePage           from './views/WelcomePage'
import      RebuildFiles          from './views/RebuildFiles'

const App = () => (

    <HashRouter>      
      <div>
        <Route path="/"                       exact component=  { WelcomePage         } />
        <Route path="/home"                   exact component=  { Mainview            } />
        <Route path="/fileDrop"               exact component=  { FileDrop            } />
        <Route path="/dashboardK8"            exact component=  { DashboardK8         } />
        <Route path="/jupyterNotebook"        exact component=  { JupyterNotebook     } />
        <Route path="/slackBot"               exact component=  { SlackBotUi          } />
        <Route path="/fw"                     exact component=  { ForensicWorkbench   } />
        <Route path="/rebuildFiles"           exact component=  { RebuildFiles        } />
      </div>
    </HashRouter>
);

ReactDOM.render(<App />, app);