import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import './page-layout.scss'

interface PageProps {
  title: string;
}

const PageLayout = (props: React.PropsWithChildren<PageProps>) => {
  return (
    <>
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
    </>
  );
}

export default PageLayout;
