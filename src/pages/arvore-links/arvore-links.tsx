import { IonButton, IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import CardWrapper from "../../components/card-wrapper/card-wrapper";
import LinkItem from "../../components/link-item/link-item";
import PIonIcon from "../../components/proper-ion-icon/proper-ion-icon";
import "./arvore-links.scss";
import eventosList from "./eventos.json";

const ArvoreLinks = () => {
  const ButtonWithIcon = (props: { href: string; icon: string }) => (
    <IonButton href={props.href} fill="clear">
      <PIonIcon icon={props.icon} slot="icon-only" />
    </IonButton>
  );

  return (
    <>
      <IonGrid className="ion-padding ion-text-center grid">
        <IonRow>
          <IonCol>
            <IonImg
              src={process.env.PUBLIC_URL + "\\assets\\icons\\favicon.png"}
              alt="Logo"
              className="margin-auto-horizontal img"
            />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <h5 className="h5">CACiC</h5>
            <span>Centro acadêmico de Ciência da Computação</span>
            <br />
            <span>FCT-Unesp</span>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <ButtonWithIcon
              href="https://cacic.page.link/youtube"
              icon="logoYoutube"
            />
            <ButtonWithIcon
              href="https://instagram.com/cacic.fct"
              icon="logoInstagram"
            />
            <ButtonWithIcon
              href="https://facebook.com/cacic.fct"
              icon="logoFacebook"
            />
            <ButtonWithIcon href="mailto:cacic.fct@gmail.com" icon="mail" />
          </IonCol>
        </IonRow>
      </IonGrid>
      <CardWrapper title="Eventos">
        {eventosList.map((entry, index) => (
          <LinkItem
            key={index}
            icon={entry.icon}
            title={entry.title}
            url={entry.url}
            content={entry.content}
          />
        ))}
      </CardWrapper>
    </>
  );
};

export default ArvoreLinks;
