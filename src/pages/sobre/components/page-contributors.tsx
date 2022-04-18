import { IonAvatar, IonButton, IonCol, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonRow } from "@ionic/react";
import getIoniconByString from "../../../utils/ionicon";
import PageContributorsData from "./page-contributors.json";

const PageContributors = () => {
  return (
    <IonList>
      <IonListHeader>

      </IonListHeader>

      {PageContributorsData.people.map((entry, index) => (
        <IonItem key={index}>
          <IonAvatar
          slot="start"
          aria-hidden="true">
            <img
            loading="lazy"
            src={process.env.PUBLIC_URL + "\\assets\\people\\" + entry.avatar + ".webp"}/>
          </IonAvatar>
          <IonLabel>
            <IonRow>
              <IonCol style={{paddingBottom: 0}}>
                <h2 className="ion-text-wrap">
                  {entry.name}
                </h2>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol className="ion-text-wrap">
                {entry.emailAcademic ? (
                  <IonButton
                  href={"mailto:"+entry.emailAcademic+"@unesp.br"}
                  >
                    <IonIcon icon={getIoniconByString("mailOutline")} />
                  </IonButton>
                ) : null}

                {entry.lattes ? (
                  <IonButton
                  href={"https://lattes.cnpq.br/"+entry.lattes}
                  target="_blank">
                    <IonIcon
                    icon={getIoniconByString("schoolOutline")}
                    />
                  </IonButton>
                ) : null}

                {entry.website ? (
                  <IonButton
                  href={entry.website}
                  target="_blank"
                  >
                    <IonIcon
                    icon={getIoniconByString("globeOutline")}/>
                  </IonButton>
                ) : null}
              </IonCol>
            </IonRow>

          </IonLabel>
        </IonItem>
      ))}

    </IonList>
  );
}

export default PageContributors;