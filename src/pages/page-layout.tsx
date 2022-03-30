import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";

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
      <IonContent>
        <props.content />
        <div style={{marginBottom: 80}} />
      </IonContent>
    </>
  );
}

export default PageLayout;
