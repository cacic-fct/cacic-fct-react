import { IonButton } from "@ionic/react";
import "./eventos.scss";

const Eventos = () => {
  const youtube: Array<String> = [
    "i_STkDJ3z5s",
    "9myJMm-8S90",
    "FN18datZk1M",
    "GrVpFnxXQoY",
    "0ku7FR5Tfv0",
  ];

  return (
    <div id="outer-div">
      <IonButton
        className="codetalk-button"
        expand="full"
        href="https://fct-pp.web.app"
        class="margin-auto-horizontal"
      >
        Clique aqui para acompanhar o evento
      </IonButton>
      <div style={{ color: "#FFF" }} className="ion-padding">
        <p>
          O Centro Acadêmico de Ciência da Computação da FCT-Unesp (câmpus de
          Presidente Prudente) convida a comunidade para o evento on-line "Code
          Talk FCT-Unesp", a realizar-se entre os dias 07 a 31/03.
        </p>
        <p>
          Contaremos com minicursos ministrados por graduandos do curso de
          Ciência da Computação da FCT-Unesp.
          <br />
          <a href="https://fct-pp.web.app">
            Para participar, faça a sua inscrição aqui!
          </a>
        </p>
        <p>Haverá emissão de certificado de participação.</p>
        <p>
          <b>Não acabou ainda!</b>
          <br />
          Tem mais vindo aí!!!
        </p>
        <h2>Confira os replays</h2>
        {youtube.map((entry) => (
          <iframe
            width="400"
            height="225"
            src={"https://youtube.com/embed/" + entry}
            frameBorder="0"
            allow="encrypted-media; picture-in-picture"
            className="margin-auto-horizontal youtube-iframe"
            allowFullScreen
          />
        ))}
      </div>
      <IonButton
        className="margin-auto-horizontal codetalk-button"
        expand="full"
        href="https://fct-pp.web.app"
      >
        Clique aqui para acompanhar o evento
      </IonButton>
    </div>
  );
};

export default Eventos;
