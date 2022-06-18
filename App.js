import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Descomentar codigo para el uso de botones y redireccion. 
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//--importancion de ventanas La que se encuentra primero es la principal recuerda que es un formato de pila.
import login from './Screen/Login';
import Ventana2 from './Screen/Ventana2';

//import Ventana3 from './Screen/Ventana3';

const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      // Aqui se agregaran las ventanas creadas
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={login}
          />
          <Stack.Screen
            name="ventana2"
            component={Ventana2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

