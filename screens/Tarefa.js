import React, {useState, useEffect} from "react";
import database from '../config/firebaseconfig'
import {SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    FlatList,
    AppState
     } from "react-native";
import app from "../config/firebaseconfig";



export default function Tarefa(){

  //  VAMOS FAZER UMS STATE QUE SERA UMA array QUE GUARDARA NOSSA TAREFAS
 const [Tarefas, setTarefas]=useState([])

 // QUANDO CARREGAR (UseEfecct) RECEBER NOSSAS TAREFAS (que estão dentro da nossa colegão no firebase )POR UMA arrayfunction 
 /**/
        useEffect(()=>{ 
          app.collection
          app.collection("Tarefas").onSnapshot((query) => {
                const list = [];
                query.forEach((doc) => {
                  list.push({ ...doc.data(), id: doc.id });
                });
                setTarefas(list);
              });

        }, [ ])

        return (
                <View>
                <Text>Tela de Tarefa</Text>

                </View>

        );

}