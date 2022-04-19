import { IonItem, IonLabel } from "@ionic/react";
import PIonIcon from "../proper-ion-icon/proper-ion-icon";
import "./link-item.scss";

interface LinkItemProps {
  title: string;
  icon: string;
  url: string;
  content?: string;
}

const LinkItem = (props: LinkItemProps) => {
  return (
    <IonItem href={props.url} target="_blank">
      <PIonIcon id="icon" slot="start" icon={props.icon} />
      <IonLabel className="ion-text-wrap">
        {props.title}
        <p className="ion-text-justify">{props.content}</p>
      </IonLabel>
    </IonItem>
  );
};

export default LinkItem;
