import { IonButton, IonContent, IonImg, IonInput, IonPage } from '@ionic/react';
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import logo from '../assets/logo2.jpg'
import { toast } from '../toast';
import { registerUser } from '../firebaseConfigs'

const Register: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    async function register() {
       if(password !== cpassword){
           return toast('Password do not match')
       }
       if(username.trim() === '' || password.trim() == ''){
           return toast("Username and password are required")
       }

       const res = await registerUser(username, password)
    }

  return (
    <IonPage>
      <IonContent fullscreen>
          <IonContent className="ion-padding">
            <IonImg class="image" src={logo}></IonImg>
              <IonInput placeholder="Email" onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
              <IonInput placeholder="Password" type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
              <IonInput placeholder="Confirm password" type="password" onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
              <IonButton expand="block" onClick={register}>Register</IonButton>
              <p>
                  Already have an account? <Link to="/Home">Login</Link>
              </p>
          </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Register;
