import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonModal, IonPage, IonRow, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './MainPage.css';
import logo from '../assets/logo.jpg'
import React, { useState } from 'react';
import { add, arrowBackCircle, arrowUpCircle, calendar, call, help, helpCircle, home, informationCircle, key, list, logoFacebook, logoInstagram, logoTwitter, logoVimeo, logoYoutube, map, person, personCircle, settings, share, todayOutline } from 'ionicons/icons';


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