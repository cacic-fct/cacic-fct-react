import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/menu/menu";
import PageLayout from "./pages/page-layout";
import Home from "./pages/home/Home";
import Pandemia from "./pages/pandemia/pandemia";

// Global SCSS
import "./globals.scss";

/* Theme variables */
import "./theme/variables.scss";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact={true}>
              <PageLayout title="Página inicial">
                <Home />
              </PageLayout>
            </Route>
            <Route path="/pandemia" exact={true}>
              <PageLayout title="Pandemia da COVID-19">
                <Pandemia />
              </PageLayout>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
