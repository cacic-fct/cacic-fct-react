import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import "./link-item.scss";

interface LinkItemProps {
  title: string;
  icon: string;
  url: string;
}

const LinkItem = (props: LinkItemProps) => {
  return (
    <IonItem href={props.url} target="_blank">
      <IonIcon id="icon" ios={props.icon} md={props.icon} slot="start" />
      <IonLabel className="ion-text-wrap">{props.title}</IonLabel>
    </IonItem>
  );
};

export default LinkItem;
