import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../../../assets/images/BackgroundApp.svg';
import { Colors } from '../../Styles/StyleGuide';
const Gallery: React.FC = () => {
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <Text style={styles.title}>Gallery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brandBackground,
  },
  background: {
    position: 'absolute',
    zIndex: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Gallery;
