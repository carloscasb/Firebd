import React from "react";
import styled from "styled-components";
import { Image, Text, TouchableOpacity } from "react-native";

import HomeIcon  from '../assets/icons/calend.png'

const TabArea = styled.View`
height:60px;
background-color: #4EADBE;
flex-direction: row
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
   
`;

 //VAMOS FAZER UM COMPONENTES (TouchableOpacity) DIFERENTE PARA O ICONE DO MEIO NA CustomTabBar, 
 //O TabItemCenter e SUBSTITUE O TabItem

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

export default ({state, navigation}) => {
  

  /*CRIA  FUNÇÃO DE NAVEGAÇÃO goto e a USA LA EM onPress da Tabitem
  Antes  coloca na função duas propriedade (props)- state e navigation que vai receber  receber
  */
     const goTo = (screenName) => {
            navigation.navigate(screenName);
     }

    return (

     //CRIA NOSSO COMPONENTE TABAREA
     /*  VAMOS FAZER UM EFEITO CO A OPACIDADE DO ITEM
        ----SE O STATE (state.index===0) QUE TIVER ATIVADO A OPACIDADE VAI SER 1 DO CONTRARIO VAI SER 0,5
        ---O ZERO É A POSIÇÂO DO State (ITEM) ---isso é tela 0, 1, 2,
     */
     /*   SUBSTITUIR O TabItem pelo TabItemCenter  */

        <TabArea>
                <TabItem onPress={()=>goTo('Home')}>
                <Image style={{width:24, height:24, opacity: state.index===0? 1 : 0.5 }} source={require('../assets/icons/casa.png')} />
                </TabItem>

                <TabItem onPress={()=>goTo('Tarefa')}>
                <Image style={{width:24, height:24, opacity: state.index===1? 1 : 0.5 }} source={require('../assets/images/leitura.png')} />
                </TabItem>

                <TabItemCenter  onPress={()=>goTo('Chat')}>
                <Image style={{width:24, height:24, opacity: state.index===2? 1 : 0.5}} source={require('../assets/icons/trevo.png')} />
                </TabItemCenter >

                <TabItem onPress={()=>goTo('NovaTarefa')}>
                <Image style={{width:24, height:24, opacity: state.index===3? 1 : 0.5 }} source={require('../assets/icons/star_vazia.png')} />
                </TabItem>

                <TabItem onPress={()=>goTo('Cadastro')}>
                <Image style={{width:24, height:24,opacity: state.index===4? 1 : 0.5  }} source={require('../assets/icons/calend.png')} />
                </TabItem>

        </TabArea>

    );
}