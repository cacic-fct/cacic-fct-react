import { IonGrid, IonRow, IonCol } from "@ionic/react";
import CardWrapper from "../../components/card-wrapper/card-wrapper";

import LinkItem from "../../components/link-item/link-item";
import SlateGridHamilton from "./components/slate-grid-hamilton/slate-grid-hamilton";
import CardWithDate from "../../components/card-with-date/card-with-date";

const Home = () => {
  const urlList = [
    {
      title: "Calendário do câmpus",
      icon: "calendar",
      url: "https://www.fct.unesp.br/#!/administracao/graduacao/espaco-do-aluno/",
    },
    {
      title: "Página dos Calouros",
      icon: "people",
      url: "https://fct-pp.web.app/calouros",
    },
    {
      title: "Manual dos Calouros",
      icon: "informationCircle",
      url: "https://fct-pp.web.app/manual-do-calouro"
    }
  ];

  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol>
            <CardWithDate
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
