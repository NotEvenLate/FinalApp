import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MainPage from './pages/MainPage'
import Account from './pages/Account'
import About from './pages/About'



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';




const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home"><Home /></Route>
          <Route exact path="/"><Redirect to="/home" /></Route>
          <Route path="/Login" component={Login} exact/>
          <Route path="/Register" component={Register} exact/>
          <Route path="/MainPage" component={MainPage} exact/>
          <Route path="/Account" component={Account} exact/>
          <Route path="/About" component={About} exact/>
        </IonRouterOutlet >
    </IonReactRouter>
  </IonApp>
);

export default App;
