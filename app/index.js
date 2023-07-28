import { ScrollView, Text, View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  const [name, setName] = useState('Faith');
  const [age, setAge] = useState('26');

 

  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput 
      style={styles.input} 
      placeholder="Enter " 
      onChangeText={(value) => setName(value)} />
      <Text> name: {name}, age: {age}</Text>
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
  input: {
    borderWidth: 1,
    borderColor: 'teal',
    padding: 8,
    margin: 10,
    width: 200,
  },
});