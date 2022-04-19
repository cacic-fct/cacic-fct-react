import {
  IonAvatar,
  IonButton,
  IonCol,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRow,
} from "@ionic/react";
import PIonIcon from "../../../components/proper-ion-icon/proper-ion-icon";
import PageContributorsData from "./page-contributors.json";

const PageContributors = () => {
  return (
    <IonList>
      <IonListHeader></IonListHeader>

      {PageContributorsData.people.map((entry, index) => (
        <IonItem key={index}>
          <IonAvatar slot="start" aria-hidden="true">
            <img
              loading="lazy"
              src={
                process.env.PUBLIC_URL +
                "\\assets\\people\\" +
                entry.avatar +
                ".webp"
              }
            />
          </IonAvatar>
          <IonLabel>
            <IonRow>
              <IonCol style={{ paddingBottom: 0 }}>
                <h2 className="ion-text-wrap">{entry.name}</h2>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="ion-text-wrap">
                {entry.emailAcademic ? (
                  <IonButton
                    href={"mailto:" + entry.emailAcademic + "@unesp.br"}
                  >
                    <PIonIcon icon="mailOutline" />
                  </IonButton>
                ) : null}

                {entry.lattes ? (
                  <IonButton
                    href={"https://lattes.cnpq.br/" + entry.lattes}
                    target="_blank"
                  >
                    <PIonIcon icon="schoolOutline" />
                  </IonButton>
                ) : null}

                {entry.website ? (
                  <IonButton href={entry.website} target="_blank">
                    <PIonIcon icon="globeOutline" />
                  </IonButton>
                ) : null}
              </IonCol>
            </IonRow>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};

export default PageContributors;
