import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
} from "@ionic/react";
import { logoYoutube, logoInstagram, logoFacebook, mail } from "ionicons/icons";
import CardWrapper from "../../components/card-wrapper/card-wrapper";
import LinkItem from "../../components/link-item/link-item";
import getIoniconByString from "../../utils/ionicon";
import "./arvore-links.scss";
import eventosList from "./eventos.json";

const ArvoreLinks = () => {
  return (
    <>
      <IonGrid className="ion-padding ion-text-center grid">
        <IonRow>
          <IonCol>
            <IonImg
              src="/assets/icons/favicon.png"
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
            <IonButton href="https://cacic.page.link/youtube" fill="clear">
              <IonIcon src={logoYoutube} slot="icon-only" />
            </IonButton>
            <IonButton href="https://instagram.com/cacic.fct" fill="clear">
              <IonIcon src={logoInstagram} slot="icon-only" />
            </IonButton>
            <IonButton href="https://facebook.com/cacic.fct" fill="clear">
              <IonIcon src={logoFacebook} slot="icon-only" />
            </IonButton>
            <IonButton href="mailto:cacic.fct@gmail.com" fill="clear">
              <IonIcon src={mail} slot="icon-only" />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      <CardWrapper title="Eventos">
        {eventosList.map((entry, index) => (
          <LinkItem
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
