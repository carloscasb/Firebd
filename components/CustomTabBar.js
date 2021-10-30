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

export default ({state, navigation}) => {
  

  /*CRIA  FUNÇÃO DE NAVEGAÇÃO goto e a USA LA EM onPress da Tabitem
  Antes  coloca na função duas propriedade (props)- state e navigation que vai receber  receber
  */
     const goTo = (screenName) => {
            navigation.navigate(screenName);
     }

    return (
        //CRIA NOSSO COMPONENTE TABAREA
        <TabArea>
                <TabItem onPress={()=>goTo('Home')}>
                <Image style={{width:24, height:24}} source={require('../assets/icons/casa.png')} />
               
                </TabItem>

                <TabItem onPress={()=>goTo('Chat')}>
                <Image style={{width:24, height:24}} source={require('../assets/icons/calend.png')} />
                </TabItem>

                <TabItem onPress={()=>goTo('Cadastro')}>
                <Image style={{width:24, height:24}} source={require('../assets/icons/casa.png')} />
                </TabItem>

        </TabArea>

    );
}