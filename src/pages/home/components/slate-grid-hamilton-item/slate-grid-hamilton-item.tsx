import { IonCol, IonRow, IonAvatar, IonImg, IonText } from "@ionic/react";

interface SlateGridHamiltonItemProps {
  name: string;
  function: string;
  image: string;
}

const SlateGridHamiltonItem = (props: SlateGridHamiltonItemProps) => {
  const relativePath = process.env.PUBLIC_URL + 'assets\\people\\';

  return (
    <IonCol>
      <IonRow>
        <IonAvatar className="grid-avatar">
          <IonImg src={relativePath + props.image + ".webp"}></IonImg>
        </IonAvatar>
      </IonRow>
      <IonRow className="grid-text">
        <div>
          <IonText>{ props.name }</IonText>
        </div>
      </IonRow>
      <IonRow className="grid-text">
        <div>
          <IonText color="medium">{ props.function }</IonText>
        </div>
      </IonRow>
    </IonCol>
  )
}

export default SlateGridHamiltonItem;