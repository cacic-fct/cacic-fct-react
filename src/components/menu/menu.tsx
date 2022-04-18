import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRow,
} from "@ionic/react";
import { logoInstagram, logoFacebook, mail } from "ionicons/icons";
import * as Ionicons from "ionicons/icons";
import { useLocation } from "react-router-dom";
import "./menu.scss";
import menuItems from "./menu-items.json";

// Permite resgatar os Ionicons a partir de uma string
// Se não existir um Ionicon associado à string, retorna undefined
const IoniconsByString = Ionicons as Record<string, string | undefined>;

interface AppPage {
  url: string;
  iosIcon?: string;
  mdIcon?: string;
  title: string;
}

const appPages: AppPage[] = menuItems.map((entry) => ({
  title: entry.title,
  url: entry.url,
  iosIcon: IoniconsByString[entry.iosIcon],
  mdIcon: IoniconsByString[entry.mdIcon],
}));

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>CACiC</IonListHeader>
          <IonNote>Centro Acadêmico de Ciência da Computação</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonGrid style={{ maxWidth: 300 }}>
          <IonRow>
            <IonCol>
              <IonButton href="https://instagram.com/cacic.fct" fill="clear">
                <IonIcon icon={logoInstagram} slot="icon-only"></IonIcon>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton href="https://facebook.com/cacic.fct" fill="clear">
                <IonIcon icon={logoFacebook} slot="icon-only"></IonIcon>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton href="mailto:cacic.fct@gmail.com" fill="clear">
                <IonIcon icon={mail} slot="icon-only"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-center">
              <IonMenuToggle auto-hide="false">
                <IonButton
                  color="medium"
                  style={{ textDecoration: "underline" }}
                  fill="clear"
                  routerLink="/privacidade"
                  routerDirection="root"
                >
                  Política de privacidade
                </IonButton>
              </IonMenuToggle>
            </IonCol>

            <IonCol className="ion-text-center">
              <IonMenuToggle auto-hide="false">
                <IonButton
                  color="medium"
                  style={{ textDecoration: "underline" }}
                  fill="clear"
                  routerLink="/sobre"
                  routerDirection="root"
                >
                  Sobre este site
                </IonButton>
              </IonMenuToggle>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
