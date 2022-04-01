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
  IonTitle,
} from "@ionic/react";
import { calendar, people } from "ionicons/icons";
import CardWrapper from "../../components/card-wrapper/card-wrapper";

import Card from "../../components/card/card";
import LinkItem from "../../components/link-item/link-item";
import SlateGridHamilton from "../../components/slate-grid-hamilton/slate-grid-hamilton";

const Home = () => {
  const urlList = [
    {
      title: "Calendário do câmpus",
      icon: calendar,
      url: "https://www.fct.unesp.br/#!/administracao/graduacao/espaco-do-aluno/",
    },
    {
      title: "Calouros",
      icon: people,
      url: "https://cacic-fct.web.app/calouros",
    },
  ];

  return (
    <>
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
            <CardWrapper title="Acesso rápido">
              {urlList.map((entry) => LinkItem(entry))}
            </CardWrapper>
          </IonCol>
        </IonRow>
      </IonGrid>

      <h1 className="ion-padding" style={{ marginBottom: 0 }}>
        O CACiC
      </h1>
      <p className="ion-padding-horizontal" style={{ marginTop: 0 }}>
        O Centro Acadêmico de Ciência da Computação é o órgão de representação
        estudantil do curso de Bacharelado em Ciência da Computação da
        FCT-Unesp. A organização defende os interesses e direitos dos alunos. A
        direção do CA é escolhida por meio de eleições periódicas, entre chapas
        de alunos do curso.
      </p>
      <h1 className="ion-padding">Chapa Margaret Hamilton</h1>
      <SlateGridHamilton />
    </>
  );
};

export default Home;
