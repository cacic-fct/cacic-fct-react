import * as Ionicons from "ionicons/icons";
import { IonIcon } from "@ionic/react";

interface PIonIconProps {
  icon?: string;
  slot?: string;
  id?: string;
  md?: string;
  ios?: string;
}

const PIonIcon = (props: PIonIconProps) => {
  let iconStr = props.icon;
  let mdStr = props.md;
  let iosStr = props.ios;

  if (!iconStr && !mdStr && !iosStr) {
    iconStr = "alert";
    mdStr = "alertSharp";
    iosStr = "alertOutline";
  } else if (
    !Ionicons[iconStr as string] &&
    !Ionicons[mdStr as string] &&
    !Ionicons[iosStr as string]
  ) {
    iconStr = "alert";
    mdStr = "alertSharp";
    iosStr = "alertOutline";
  }

  return (
    <IonIcon
      id={props.id}
      slot={props.slot}
      icon={Ionicons[iconStr as string]}
      md={Ionicons[mdStr as string]}
      ios={Ionicons[iosStr as string]}
    />
  );
};

export default PIonIcon;
