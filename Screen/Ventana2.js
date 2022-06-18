import React from "react";
import {StyleSheet, Text, View} from "react-native";

//Aqui entra el {navigation} entre los parentecis.
const Ventana2 = () => {
   return (
    <View style={styles.container}>
        <Text style={styles.text}>Hola como estas entraste a la ventana2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    paddingHorizontal: 10,
  },
  text:{
     alignItems: 'center',
     padding: 10,
  }
});

export default Ventana2;


