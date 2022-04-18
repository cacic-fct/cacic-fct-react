import {
  IonAvatar,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
} from "@ionic/react";
import "./slate-grid-hamilton.scss";
import SlateGridHamiltonItem from "../slate-grid-hamilton-item/slate-grid-hamilton-item";

const SlateGridHamilton = () => {
  return (
    <IonGrid className="grid">
      <IonRow>
        <SlateGridHamiltonItem
        image="mariana-alves"
        name="Mariana Alves"
        function="Presidenta"
        />

        <SlateGridHamiltonItem
        image="willian-murayama"
        name="Willian Murayama"
        function="Vice-presidente"
        />
      </IonRow>

      <IonRow>
        <SlateGridHamiltonItem
        image="andressa-yida"
        name="Andressa Yida"
        function="Relações públicas"
        />
        <SlateGridHamiltonItem
        image="guilherme-tomiasi"
        name="Guilherme Tomiasi"
        function="Finanças"
        />
        <SlateGridHamiltonItem
        image="rafael-rosseto"
        name="Rafael Rosseto"
        function="Finanças"
        />
      </IonRow>

      <IonRow>
        <SlateGridHamiltonItem
        image="daniel-monteiro"
        name="Daniel Monteiro"
        function="Eventos"
        />
        <SlateGridHamiltonItem
        image="carlos-santana"
        name="Carlos Santana"
        function="Comunicação"
        />
        <SlateGridHamiltonItem
        image="victor-eiji"
        name="Victor Eiji"
        function="Comunicação"
        />
      </IonRow>

      <IonRow>
        <SlateGridHamiltonItem
        image="renan-araujo"
        name="Renan Araújo"
        function="Ex-vice-presidente"
        />
        <SlateGridHamiltonItem
        image="rafael-chinaglia"
        name="Rafael Chinaglia"
        function="Ex-comunicação"
        />
      </IonRow>
    </IonGrid>
  );
};

export default SlateGridHamilton;
