import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './MainPage.css';
import { help, home, key, logoDiscord, logoFacebook, logoInstagram, logoTwitter, settings } from 'ionicons/icons';

const About: React.FC = () => {

    return (
        <IonPage>
          <IonHeader className="ion-no-border">
            <IonToolbar >
              <IonTitle>About</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>List it </IonCardSubtitle>
                <IonCardTitle>Labwork-5-6 app</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                  Need help? You can reach us with any of your problems related to our application through these links or contact us at listitapp@support.com
              <IonButton expand="block"><IonIcon icon={logoInstagram} />Instagram</IonButton>
              <IonButton expand="block"><IonIcon icon={logoFacebook} />Facebook</IonButton>
              <IonButton expand="block"><IonIcon icon={logoTwitter} />Twitter</IonButton>
              <IonButton expand="block"><IonIcon icon={logoDiscord} />Discord</IonButton>
            </IonCardContent>
            </IonCard>    
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

export default About;