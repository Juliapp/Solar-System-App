import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
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
  style?: StyleProp<ViewStyle>;
}

const button: React.FC<styled> = ({ style, children }) => {
  return (
    <LinearGradient
      colors={['#EF5F53', '#FA8F70']}
      start={[0, 0]}
      end={[1, 0]}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

const blue: React.FC<styled> = ({ style, children }) => {
  return (
    <LinearGradient colors={['#5935FF', '#47408E']} style={style}>
      {children}
    </LinearGradient>
  );
};

const pink: React.FC<styled> = ({ style, children }) => {
  return (
    <LinearGradient colors={['#FF6CD9', '#FF2184']} style={style}>
      {children}
    </LinearGradient>
  );
};

const cyan: React.FC<styled> = ({ style, children }) => {
  return (
    <LinearGradient colors={['#01D4E4', '#009DE0']} style={style}>
      {children}
    </LinearGradient>
  );
};

const yellow: React.FC<styled> = ({ style, children }) => {
  return (
    <LinearGradient colors={['#F9C270', '#FFAA2B']} style={style}>
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

export const Fonts = {
  homeTitle(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '700',
      fontSize: 32,
    };
  },

  buttonTitle(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '700',
      fontSize: 16,
    };
  },
  paragraph(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 16,
    };
  },
  placeholder(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 14,
    };
  },
  bottomBarItem(): StyleProp<TextStyle> {
    return {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: 12,
    };
  },
};
