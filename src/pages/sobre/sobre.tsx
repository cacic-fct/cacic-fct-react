import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import globalConstants from "../../globalConstants.json";
import PageContributors from "./components/page-contributors";

const Sobre = () => {
  return (
    <IonGrid class="ion-padding ion-text-center" style={{maxWidth: 700}}>
      <IonRow>
        <IonCol>
          <IonImg
            src={process.env.PUBLIC_URL + "\\assets\\icons\\favicon.png"}
            alt="Logo"
            style={{width: 64}}
            class="margin-auto-horizontal"
          />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <h5 style={{margin: 0}}>{globalConstants.appName}</h5>
          <h5 style={{margin: 0}}>{"Versão do app: " + globalConstants.appVersion}</h5>
          <p style={{fontSize: '1em', margin: "5px 0 0 0"}}>
            Copyright (c) Centro Acadêmico de Ciência da Computação da FCT–Unesp
          </p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <p style={{margin: 0}}>
            Este aplicativo web é uma realização dos seus contribuidores e do
            Centro Acadêmico de Ciência da Computação (CACiC) – Chapa Margaret
            Hamilton (2021&nbsp;–&nbsp;2022).
          </p>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <PageContributors />
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <p
            color="medium"
            style={{textDecoration: "underline", cursor: "pointer"}}
          >
            Licenças
          </p>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Sobre;