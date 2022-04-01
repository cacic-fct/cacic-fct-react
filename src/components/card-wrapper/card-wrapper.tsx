import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';

interface CardWrapperProps {
  title: string;
}

const CardWrapper = (props: React.PropsWithChildren<CardWrapperProps>) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          {props.title}
        </IonCardTitle>
      </IonCardHeader>
      {props.children}
    </IonCard>
  )
}

export default CardWrapper;