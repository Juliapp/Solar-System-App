import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Colors, Gradients } from './src/Styles/StyleGuide';
import Button from './src/components/Button';
export default function App() {
  return (
    <View style={Colors.brandBackground}>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  teste: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

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
