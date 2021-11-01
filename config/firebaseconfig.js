import React from 'react'; 
import firebase from "@react-native-firebase/app"
 import 'firebase/storage';
 /*
import  firebase from '@react-native-firebase/app'

*/
// Importe as funções de que você precisa dos SDKs de que precisa
//import { initializeApp } from "firebase/app";

//Configuração do Firebase do seu aplicativo da web

const firebaseConfig = {
    apiKey: "AIzaSyCgIp8PWWHYi-J1BFRBiuyM63rfDUfPVWk",
    authDomain: "tarefas-fc676.firebaseapp.com",
    projectId: "tarefas-fc676",
    storageBucket: "tarefas-fc676.appspot.com",
    messagingSenderId: "618486846165",
    appId: "1:618486846165:web:0b5d8238052cd86951085c"
  };
  
  // Initialize Firebase // 
 const app =initializeApp(firebaseConfig);
  /* 
//// CRIA UMA CONSTANTE (apelido) PARA USA EM OUTRA PARTE DO PROJETO
 const database = firebase.firestore();
 */
 export default app