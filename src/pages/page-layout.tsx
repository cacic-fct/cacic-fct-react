import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import './page-layout.scss'

interface PageProps {
  title: string;
}

const PageLayout = (props: React.PropsWithChildren<PageProps>) => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            {props.title}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="content">
        {props.children}
      </IonContent>
    </IonPage>
  );
}

export default PageLayout;
