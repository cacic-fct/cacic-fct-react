import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRow,
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import "./menu.scss";
import menuItems from "./menu-items.json";
import PIonIcon from "../proper-ion-icon/proper-ion-icon";

interface AppPage {
  url: string;
  iosIcon?: string;
  mdIcon?: string;
  title: string;
}

const appPages: AppPage[] = menuItems;

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
                  <PIonIcon
                    slot="start"
                    icon={appPage.mdIcon}
                    md={appPage.mdIcon}
                    ios={appPage.iosIcon}
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
                <PIonIcon icon="logoInstagram" slot="icon-only" />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton href="https://facebook.com/cacic.fct" fill="clear">
                <PIonIcon icon="logoFacebook" slot="icon-only" />
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton href="mailto:cacic.fct@gmail.com" fill="clear">
                <PIonIcon icon="mail" slot="icon-only" />
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
