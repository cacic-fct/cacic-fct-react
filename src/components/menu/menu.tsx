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
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { bookOutline, bookSharp, easelOutline, easelSharp, folderOpenOutline, folderOpenSharp, homeOutline, homeSharp, listOutline, listSharp, medkitOutline, medkitSharp, peopleOutline, peopleSharp } from 'ionicons/icons';
import './menu.scss';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Página inicial',
    url: '/',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Pandemia da COVID-19',
    url: '/pandemia',
    iosIcon: medkitOutline,
    mdIcon: medkitSharp
  },
  {
    title: 'Eventos',
    url: '/eventos',
    iosIcon: easelOutline,
    mdIcon: easelSharp
  },
  {
    title: 'Página dos calouros',
    url: '/calouros',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: 'Manual do calouro',
    url: '/manual-do-calouro',
    iosIcon: bookOutline,
    mdIcon: bookSharp
  },
  {
    title: 'Transparência',
    url: '/transparencia',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenSharp
  },
  {
    title: 'Árvore de links',
    url: '/links',
    iosIcon: listOutline,
    mdIcon: listSharp
  }
];

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
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
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
