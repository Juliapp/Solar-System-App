import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { Colors } from '../../Styles/StyleGuide';

import Background from '../../../assets/images/BackgroundApp.svg';

import MarsImage from '../../../assets/images/Mars.svg';
const DetailPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Background />
      </View>
      <Header stackIcon />
      <MarsImage width={200} height={200} style={styles.planet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brandWhite,
    paddingTop: 40,
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.brandBackground,
    borderBottomEndRadius: 32,
    borderBottomStartRadius: 32,
    paddingTop: 40,
    position: 'absolute',
    overflow: 'hidden',
  },
  planet: {
    alignSelf: 'center',
    top: -100,
    shadowRadius: 30,
    shadowOffset: { width: 5, height: 20 },
    elevation: 10,
    borderRadius: 100,
    //shadowOpacity:,
  },
});

export default DetailPage;
