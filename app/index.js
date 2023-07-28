import { ScrollView, Text, View, Button, } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  const [name, setName] = useState('Faith ');

  const clickHandler = () => {
    setName('Ruby');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      
        <Text>My Name is {name}</Text>
        <Text></Text>
        <View style={styles.buttonContainer}>
          <Button title="Update Name" onPress={clickHandler} />
        </View>
        
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'teal',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'pink',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});