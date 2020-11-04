import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../../../assets/images/BackgroundApp.svg';
import DetailPlanetCard from '../../components/DetailPlanetCard';

import { Colors } from '../../Styles/StyleGuide';
import Saturno from '../../../assets/images/Saturn.svg';
import Plutao from '../../../assets/images/Pluto.svg';
import { ScrollView } from 'react-native-gesture-handler';

const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <DetailPlanetCard PlanetImage={Saturno} planetName="Saturno" />
        <DetailPlanetCard PlanetImage={Plutao} planetName="Plutão" />
        <DetailPlanetCard PlanetImage={Saturno} planetName="Saturno" />
        <DetailPlanetCard PlanetImage={Saturno} planetName="Saturno" />
        <DetailPlanetCard PlanetImage={Saturno} planetName="Saturno" />
        <DetailPlanetCard PlanetImage={Saturno} planetName="Saturno" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    zIndex: 0,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.brandBackground,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  scrollview: {
    marginVertical: 60,
  },
});

export default Search;
