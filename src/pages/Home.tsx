import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";

const Home = () => (
  <>
    <IonHeader translucent={true}>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>
                  Acesso rápido
                </IonCardTitle>
              </IonCardHeader>
              {/*<app-link-list [urlList]="urlList"></app-link-list>*/}
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <h1 className="ion-padding" style={{marginBottom: 0}}>
        O CACiC
      </h1>
      <p className="ion-padding-horizontal" style={{marginTop: 0}}>
        O Centro Acadêmico de Ciência da Computação é o órgão de representação
        estudantil do curso de Bacharelado em Ciência da Computação da FCT-Unesp. A
        organização defende os interesses e direitos dos alunos. A direção do CA é
        escolhida por meio de eleições periódicas, entre chapas de alunos do curso.
      </p>
      <h1 className="ion-padding">Chapa Margaret Hamilton</h1>
      {/*<app-slate-hamilton-grid></app-slate-hamilton-grid>*/}
    </IonContent>
  </>
);

export default Home;