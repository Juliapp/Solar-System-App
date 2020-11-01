import React from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';

import { LinearGradient } from 'expo-linear-gradient';

export const Colors = StyleSheet.create({
  brandBackground: {
    backgroundColor: '#151515',
  },
  brandWhite: {
    backgroundColor: '#ffffff',
  },
});

interface styled {
  styles?: StyleProp<ViewStyle>;
}

const button: React.FC<styled> = ({ styles, children }) => {
  return (
    <LinearGradient
      colors={['#EF5F53', '#FA8F70']}
      start={[0, 0]}
      end={[1, 0]}
      style={styles}
    >
      {children}
    </LinearGradient>
  );
};

const blue: React.FC<styled> = ({ styles, children }) => {
  return (
    <LinearGradient colors={['#5935FF', '#47408E']} style={styles}>
      {children}
    </LinearGradient>
  );
};

const pink: React.FC<styled> = ({ styles, children }) => {
  return (
    <LinearGradient colors={['#FF6CD9', '#FF2184']} style={styles}>
      {children}
    </LinearGradient>
  );
};

const cyan: React.FC<styled> = ({ styles, children }) => {
  return (
    <LinearGradient colors={['#01D4E4', '#009DE0']} style={styles}>
      {children}
    </LinearGradient>
  );
};

const yellow: React.FC<styled> = ({ styles, children }) => {
  return (
    <LinearGradient colors={['#F9C270', '#FFAA2B']} style={styles}>
      {children}
    </LinearGradient>
  );
};

export const Gradients = {
  button,
  blue,
  pink,
  cyan,
  yellow,
};
