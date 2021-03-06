import { IonItem, IonLabel, IonText } from "@ionic/react";

interface LinkItemDateProps {
  date: string;
  content: string;
  url?: string;
}

const LinkItemDate = (props: LinkItemDateProps) => {
  return (
    <IonItem href={props.url} target="_blank">
      <IonText slot="start">{props.date}</IonText>
      <IonLabel className="ion-text-wrap">{props.content}</IonLabel>
    </IonItem>
  );
};

export default LinkItemDate;
