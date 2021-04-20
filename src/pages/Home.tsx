import { IonButton, IonContent, IonHeader, IonImg, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import logo from '../assets/logo2.jpg'
import React from 'react';
import { Link } from 'react-router-dom'



const Home: React.FC = () => {
  return (
    
    <IonPage>      
      <IonContent className="ion-padding">
        <IonImg class="image" src={logo}></IonImg>
        <h1>List It</h1>
        <p>Keep it simple, keep it clean</p>
        <IonButton class="jaa" expand="block" routerLink="/MainPage">Continue with Google </IonButton>
        <IonButton expand="block" routerLink="/MainPage">Continue with Apple</IonButton>
        <IonButton expand="block" routerLink="/login">Continue with email</IonButton>
        <p>
          New here? <Link to="/register">Register with email</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;