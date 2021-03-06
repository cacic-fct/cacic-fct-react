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
import CardWrapper from "./components/card-wrapper/card-wrapper";
import Eventos from "./pages/eventos/eventos";
import Transparencia from "./pages/transparencia/transparencia";
import ArvoreLinks from "./pages/arvore-links/arvore-links";
import Privacidade from "./pages/privacidade/privacidade";
import Sobre from "./pages/sobre/sobre";

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
            <Route path="/eventos" exact={true}>
              <PageLayout title="Eventos">
                <Eventos />
              </PageLayout>
            </Route>
            <Route path="/transparencia" exact={true}>
              <PageLayout title="Transparência">
                <Transparencia />
              </PageLayout>
            </Route>
            <Route>
              <PageLayout title="Página não encontrada">
                <CardWrapper title="Essa página não existe." />
              </PageLayout>
            </Route>
            <Route path="/links" exact={true}>
              <PageLayout title="Árvore de Links">
                <ArvoreLinks />
              </PageLayout>
            </Route>
            <Route path="/privacidade" exact={true}>
              <PageLayout title="Política de privacidade">
                <Privacidade />
              </PageLayout>
            </Route>
            <Route path="/sobre" exact={true}>
              <PageLayout title="Sobre este site">
                <Sobre />
              </PageLayout>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
