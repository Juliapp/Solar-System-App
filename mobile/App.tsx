import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Gradients } from './src/Styles/StyleGuide';
import Button from './src/components/Button';
import Foward from './assets/icons/Forward.svg';

export default function App() {
  return (
    <View style={Colors.brandBackground}>
      <Button label="dkasjdhkasjh" Icon={Foward} />
    </View>
  );
}

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
*/
