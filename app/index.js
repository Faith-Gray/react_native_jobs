import { ScrollView, Text, View, } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Fuck yes bro</Text>
      </View>
      <View style={styles.body}>
        <Text>This is  aline adafj. adfaild</Text>
        <Text>This is  aline adafj. adfaild</Text>
        <Text>This is  aline adafj. adfaild</Text>
        <Text>This is  aline adafj. adfaild</Text>

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
});