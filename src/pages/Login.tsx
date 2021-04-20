import { IonButton, IonContent, IonHeader, IonImg, IonInput, IonItem, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import logo from '../assets/logo2.jpg'
import { loginUser } from '../firebaseConfigs'
import { toast } from '../toast'

const Login: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    async function login() {
        const res = await loginUser(username, password)
        if(!res){
        toast('Error')
        }
        else {
            toast('Logged in')
            window.location.href='/MainPage'
        }
    }

  return (
    <IonPage>
      <IonContent fullscreen>
          <IonContent className="ion-padding">
            <IonImg class="image" src={logo}></IonImg>
              <IonInput placeholder="Email" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
              <IonInput placeholder="Password" type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
              <IonButton expand="block" onClick={login}>Login</IonButton>
              <p>New here? <Link to="/register">Register</Link></p>
          </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Login;
