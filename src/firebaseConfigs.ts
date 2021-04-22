import firebase from 'firebase'
import { toast } from './toast'

const config = {    
    apiKey: "AIzaSyDwwqnsbfUV4cxg8bBB1MgYLmCG5hwUCP4",
    authDomain: "finalapp-b064e.firebaseapp.com",
    projectId: "finalapp-b064e",
    storageBucket: "finalapp-b064e.appspot.com",
    messagingSenderId: "194742391011",
    appId: "1:194742391011:web:7a1d352ff6a558999c35d6",
    measurementId: "G-3Y9N0H9CKB"
}

firebase.initializeApp(config)

export async function loginUser(username: string, password: string) {
    const email = '${username}@jaa.com'

    try {
    
        const res = await firebase.auth().signInWithEmailAndPassword(email, password)
    
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = '${username}@jaa.com'

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        toast(error.message, 4000)
        return false
    }
}