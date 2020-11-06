import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../../../assets/images/BackgroundApp.svg';
import DetailPlanetCard from '../../components/DetailPlanetCard';

import { Colors } from '../../Styles/StyleGuide';
import Saturno from '../../../assets/images/Saturn.svg';
import Plutao from '../../../assets/images/Pluto.svg';
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../../components/Input';

const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <Input placeholderText="Procure galaxias, planetas..." />
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
    paddingTop: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  scrollview: {
    marginVertical: 30,
  },
});

export default Search;
