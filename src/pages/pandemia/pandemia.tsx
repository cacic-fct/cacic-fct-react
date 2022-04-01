import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
//import { calendar, people } from "ionicons/icons";

import { calendar, analytics, book } from "ionicons/icons";
import Card from "../../components/card/card";
import LinkItem from "../../components/link-item/link-item";
import LinkItemDate from "../../components/link-item-date/link-item-date";
import CardWrapper from "../../components/card-wrapper/card-wrapper";

const Pandemia = () => {
  const infoList = [
    {
      date: "24/02/22",
      content:
        "Reitoria confirma o retorno ao presencial para 7 de março em post nas redes sociais. Cada unidade deve estabelecer um calendário de retomada próprio.",
      url: "https://twitter.com/Unesp_Oficial/status/1496948393637261317",
    },
    {
      date: "22/02/22",
      content:
        "STG confirma o retorno ao presencial para 4 de abril. Calouros terão atividades remotas até 1 de abril.",
    },
    {
      date: "31/01/22",
      content: "Fim do prazo para o cadastro do comprovante de vacinação",
    },
    {
      date: "15/01/22",
      content:
        "Reitoria prorroga o prazo para envio do comprovante de vacinação de 18/01 para 31/01",
    },
    {
      date: "14/01/22",
      content:
        "É disponibilizado, no SISGRAD, um espaço para o cadastro do comprovante de vacinação",
    },
    {
      date: "12/01/22",
      content: "Reitoria prorroga o retorno ao presencial para 6 de março",
      url: "https://unesp.br/Home/covid19/comunicado-n-1-de-2022-do-comite-unesp-covid-19.pdf",
    },
    {
      date: "08/01/22",
      content:
        "Reitoria torna obrigatório a apresentação do comprovante de vacinação",
      url: "https://unesp.br/portal#!/noticia/36692/unesp-torna-obrigatorio-comprovante-de-vacinacao-contra-covid-19/",
    },
  ];

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
