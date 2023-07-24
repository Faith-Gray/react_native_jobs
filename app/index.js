import { ScrollView, Text, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function Page() {
  const router = useRouter();


  return (
  <SafeAreaView>

    <Text>This is my App. And I love you</Text>
    <Stack.Screen
    
      options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconURL={icons.menu} dimension="60%" />
        ), 
        headerRight: () => (
          <ScreenHeaderBtn iconURL={icons.menu} dimension="100%" />
        ), 
      }}
    />
  </SafeAreaView>

  );
}

