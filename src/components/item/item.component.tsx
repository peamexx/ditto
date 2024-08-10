import "./item.css";
import {
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
} from "@ionic/react";
import copy from 'copy-to-clipboard';
import { archive, heart, trash } from "ionicons/icons";

export const Item = (message: any) => {
  const handleClick = async (e: any) => {
    console.log(e.target)
    const gap = await e.target.getOpenAmount();
    console.log(gap)
    if (gap < 10) {
      // 클릭
      return;
    }
    // 슬라이드
  };

  const handleCopy = () => {
    console.log(message);
    copy(message.message.subject);
  };

  return (
    <IonItemSliding onIonDrag={handleClick}>
      <IonItemOptions side="start">
        <IonItemOption color="success">
          <IonIcon slot="start" icon={archive}></IonIcon>
          Archive
        </IonItemOption>
      </IonItemOptions>

      <IonItem onClick={handleCopy}>
        <IonLabel>Sliding Item with Start Icons 입니다.</IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption>
          <IonIcon slot="start" icon={heart}></IonIcon>
          Favorite
        </IonItemOption>
        <IonItemOption color="danger">
          <IonIcon slot="start" icon={trash}></IonIcon>
          Delete
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
