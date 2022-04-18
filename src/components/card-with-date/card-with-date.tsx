import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
} from "@ionic/react";
import "./card-with-date.scss";

interface CardWithDateProps {
  title: string;
  date: string;
  description: string;
}

const CardWithDate = (props: CardWithDateProps) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonText id="dateText" color="primary">
          {props.date}
        </IonText>
        <p>{props.description}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default CardWithDate;
