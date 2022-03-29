import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText } from '@ionic/react';
import './card.scss';

interface CardProps {
  title: string;
  date?: string;
  description: string;
}

const Card = (props: CardProps) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          {props.title}
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonText id='dateText' color='primary'>
          {props.date}
        </IonText>
        <p>{props.description}</p>
      </IonCardContent>
    </IonCard>
  );
}

export default Card;