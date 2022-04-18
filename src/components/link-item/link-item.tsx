import { IonIcon, IonItem, IonLabel } from "@ionic/react";
import getIoniconByString from "../../utils/ionicon";
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
      <IonIcon
        id="icon"
        ios={getIoniconByString(props.icon)}
        md={getIoniconByString(props.icon)}
        slot="start"
      />
      <IonLabel className="ion-text-wrap">
        {props.title}
        <p className="ion-text-justify">{props.content}</p>
      </IonLabel>
    </IonItem>
  );
};

export default LinkItem;
