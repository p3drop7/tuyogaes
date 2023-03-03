import * as SplashScreen from 'expo-splash-screen';

import Index from './src/Index';
import React from 'react'
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'comfortaa': require('./assets/fonts/Comfortaa-Regular.ttf'),
    'comfortaa-bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
    'comfortaa-semibold': require('./assets/fonts/Comfortaa-SemiBold.ttf')
  });
  
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync()
  
  return (
    <Index onLayout={onLayoutRootView}/>
  );
}