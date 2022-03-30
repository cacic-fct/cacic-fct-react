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
//import { calendar, people } from "ionicons/icons";

import Card from "../../components/card/card";
import LinkItemDate from "../../components/link-item-date/link-item-date";

const Pandemia = () => {
  const infoList = [
    {
      date: '24/02/22',
      content:
        'Reitoria confirma o retorno ao presencial para 7 de março em post nas redes sociais. Cada unidade deve estabelecer um calendário de retomada próprio.',
      url: 'https://twitter.com/Unesp_Oficial/status/1496948393637261317',
    },
    {
      date: '22/02/22',
      content:
        'STG confirma o retorno ao presencial para 4 de abril. Calouros terão atividades remotas até 1 de abril.',
    },
    {
      date: '31/01/22',
      content: 'Fim do prazo para o cadastro do comprovante de vacinação',
    },
    {
      date: '15/01/22',
      content:
        'Reitoria prorroga o prazo para envio do comprovante de vacinação de 18/01 para 31/01',
    },
    {
      date: '14/01/22',
      content:
        'É disponibilizado, no SISGRAD, um espaço para o cadastro do comprovante de vacinação',
    },
    {
      date: '12/01/22',
      content: 'Reitoria prorroga o retorno ao presencial para 6 de março',
      url: 'https://unesp.br/Home/covid19/comunicado-n-1-de-2022-do-comite-unesp-covid-19.pdf',
    },
    {
      date: '08/01/22',
      content:
        'Reitoria torna obrigatório a apresentação do comprovante de vacinação',
      url: 'https://unesp.br/portal#!/noticia/36692/unesp-torna-obrigatorio-comprovante-de-vacinacao-contra-covid-19/',
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
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                Últimas informações
              </IonCardTitle>
            </IonCardHeader>
            {
              infoList.map(entry => (
                <LinkItemDate
                content={entry.content}
                date={entry.date}
                url={entry.url}
                />
              ))
            }
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default Pandemia;