import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import './page-layout.scss'

interface PageProps {
  title: string;
  content: () => JSX.Element;
}

const PageLayout = (props: PageProps) => {
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
        <props.content />
      </IonContent>
    </>
  );
}

export default PageLayout;
