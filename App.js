import React from 'react';
import {View, Image, StyleSheet, Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          borderTopRightRadius:20,
          borderColor: 'white',
          borderWidth: 5,
          height: 250,
          width: 300,
        }}
        source={require('download.png')}
      />
      <Text></Text>
    </View>
  );
};

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Get Started "
        onPress={() => navigation.navigate('Field')}
      />
    </View>
  );
}

function FieldScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FieldScreen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Field" component={FieldScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default DisplayAnImageWithStyle;