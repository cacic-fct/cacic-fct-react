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
  IonCardTitle,
  IonTitle
} from "@ionic/react";
import { calendar, people } from "ionicons/icons";

import Card from "../../components/card/card";
import LinkItem from "../../components/link-item/link-item";
import SlateGridHamilton from "../../components/slate-grid-hamilton/slate-grid-hamilton";


const Home = () => {
  const urlList = [
    {
      title: 'Calendário do câmpus',
      icon: calendar,
      url: 'https://www.fct.unesp.br/#!/administracao/graduacao/espaco-do-aluno/',
    },
    {
      title: 'Calouros',
      icon: people,
      url: 'https://cacic-fct.web.app/calouros',
    },
  ];

  return (
  <>
    <IonHeader translucent={true}>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        <IonTitle>Página inicial</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol>
            <Card
            title="Retorno do presencial"
            date="04/04/2022"
            description="Data da 1ª aula, geral para o câmpus. Sujeito a alterações."
            />
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
              {
                urlList.map(entry => (
                  LinkItem(entry)
                ))
              }
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <h1 className="ion-padding no-margin-bottom">
        O CACiC
      </h1>
      <p className="ion-padding-horizontal no-margin-top">
        O Centro Acadêmico de Ciência da Computação é o órgão de representação
        estudantil do curso de Bacharelado em Ciência da Computação da FCT-Unesp. A
        organização defende os interesses e direitos dos alunos. A direção do CA é
        escolhida por meio de eleições periódicas, entre chapas de alunos do curso.
      </p>
      <h1 className="ion-padding">Chapa Margaret Hamilton</h1>
      <SlateGridHamilton className='margin-bottom-50' />
    </IonContent>
  </>
  )
}

export default Home;