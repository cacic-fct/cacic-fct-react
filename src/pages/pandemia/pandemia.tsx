import { IonGrid, IonRow, IonCol } from "@ionic/react";

import { calendar, analytics, book } from "ionicons/icons";
import Card from "../../components/card/card";
import LinkItem from "../../components/link-item/link-item";
import LinkItemDate from "../../components/link-item-date/link-item-date";
import CardWrapper from "../../components/card-wrapper/card-wrapper";

import infoList from "./pandemia-info.json";

const Pandemia = () => {
  const urlList = [
    {
      title: "Calendário do câmpus",
      icon: calendar,
      url: "https://www.fct.unesp.br/#!/administracao/graduacao/espaco-do-aluno/",
    },
    {
      title: "Casos de COVID-19 em Prudente",
      icon: analytics,
      url: "https://inovaprudente.com.br/coronavirus",
    },
    {
      title: "Diretrizes para a reorganização das atividades",
      icon: book,
      url: "https://unesp.br/portal#!/covid19/reorganizacao-das-atividades/estrategia/",
    },
  ];

  return (
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
          <CardWrapper title="Últimas informações">
            {infoList.map((entry) => (
              <LinkItemDate
                content={entry.content}
                date={entry.date}
                url={entry.url}
              />
            ))}
          </CardWrapper>
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
  );
};

export default Pandemia;
