import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText,
} from "@ionic/react";
import "./transparencia.scss";
import reunioes from "./reunioes.json";
import acoes from "./acoes.json";

const RepassesReunioes = () => {
  return (
    <IonCard>
      <IonAccordionGroup>
        <IonAccordion>
          <IonItem slot="header">
            <IonLabel>Repasses</IonLabel>
          </IonItem>
          <IonList slot="content">
            <IonItem>
              <IonLabel>Não há repasses.</IonLabel>
            </IonItem>
          </IonList>
        </IonAccordion>

        <IonAccordion>
          <IonItem slot="header">
            <IonLabel className="ion-text-wrap">
              Reuniões da chapa, plenárias e assembleias
            </IonLabel>
          </IonItem>
          <IonList slot="content">
            {reunioes.map((entry) => (
              <IonItem
                href={"https://docs.google.com/document/d/" + entry.id}
                target="_blank"
              >
                <IonText slot="start">
                  <b>
                    {entry.date.slice(-2) +
                      "/" +
                      entry.date.slice(5, 7) +
                      "/" +
                      entry.date.slice(0, 4)}
                  </b>
                </IonText>
                <IonLabel className="ion-text-wrap">{entry.title}</IonLabel>
              </IonItem>
            ))}
            <div className="ion-padding ion-text-wrap">
              Decisões e discussões também ocorrem fora de reuniões, plenárias e
              assembleias e não constam nessa lista.
            </div>
          </IonList>
        </IonAccordion>
      </IonAccordionGroup>
    </IonCard>
  );
};

interface CardProps {
  title: string;
  content: string;
  image?: string;
  url?: string;
}

const CardAcao = (props: CardProps) => {
  const urlExists = typeof props.url === "string";
  let imageSrc = "";

  if (!props.image)
    imageSrc = process.env.PUBLIC_URL + "\\assets\\openness\\placeholder.webp";
  else imageSrc = process.env.PUBLIC_URL + "\\assets\\openness\\" + props.image;

  return (
    <IonCard
      href={props.url}
      target={urlExists ? "_blank" : undefined}
      className={urlExists ? "card-with-url" : undefined}
    >
      <IonImg src={imageSrc} className="card-img" />
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="ion-text-wrap">{props.content}</IonCardContent>
    </IonCard>
  );
};

const CardsAcoes = () => {
  return (
    <IonGrid>
      <IonRow>
        {acoes.map((entry, index) => (
          <IonCol className="card-col">
            <CardAcao
              title={entry.title}
              content={entry.content}
              image={entry.image}
              url={entry.url}
              key={index}
            />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

const Transparencia = () => {
  return (
    <>
      <RepassesReunioes />
      <CardsAcoes />
    </>
  );
};

export default Transparencia;
