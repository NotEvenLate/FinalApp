import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './MainPage.css';
import { help, home, key, settings} from 'ionicons/icons';

const Account: React.FC = () => {

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar >
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Joined: 23.7.2017</IonCardSubtitle>
            <IonCardTitle>Shannon Mcculloch</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
              Lists: 5 <br/>
              Total items: 63 <br/>
        </IonCardContent>
        </IonCard>
        <IonButton  color="danger" expand="block" routerLink="/Home">Logout</IonButton>
          <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton color="dark">
            <IonIcon  icon={settings} />
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton routerLink="/About">
              <IonIcon icon={help} />
            </IonFabButton>
            <IonFabButton routerLink="/MainPage">
              <IonIcon icon={home} />
            </IonFabButton>
            <IonFabButton routerLink="/Account">
              <IonIcon icon={key} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Account;