import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
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

const appPages: AppPage[] = [];
menuItems.map((entry, index) => {
  appPages[index] = entry;
  // Utiliza a string com o nome do ícone presente no arquivo .json
  // e recebe a string exportada pelo Ionicons.
  if (typeof appPages[index].mdIcon == "string") {
    appPages[index].mdIcon = IoniconsByString[appPages[index].mdIcon as string];
  }
  if (typeof appPages[index].iosIcon == "string")
    appPages[index].iosIcon =
      IoniconsByString[appPages[index].iosIcon as string];
});

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
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
