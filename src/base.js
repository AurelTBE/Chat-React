import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcymdvejq9Mw_Jm2OMowoQv4AF8nZw6oo",
    authDomain: "chatbox-app-a0eaa.firebaseapp.com",
    databaseURL: "https://chatbox-app-a0eaa.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}

export default base