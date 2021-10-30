import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// CRIA COMPONENTE
const Tab=createBottomTabNavigator();

// IMPORTAR TELAS
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import CadastroScreen from '../screens/CadastroScreen';

// IMPORTAR o CustomTabBar
import CustomTabBar from '../components/CustomTabBar';

const Tabs = () => {
  return (
/* importa o CUSTOMTABBAR (TabArea ) e usa ele passando as propriedade (props)  
FALA mais ou menos assim não usa tua TabBar, pega tuas propriedades e
usa na minha CustomTabBar
*/
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Cadastro" component={CadastroScreen} />
    </Tab.Navigator>
    
  );
}

export default Tabs;

