import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Background from '../../../assets/images/BackgroundApp.svg';
import { Colors, Fonts } from '../../Styles/StyleGuide';
import CategoryButton from '../../components/CategoryButton';

import PlanetsIcon from '../../../assets/icons/Planets.svg';
import AsteroidsIcon from '../../../assets/icons/Asteroids.svg';
import StarsIcon from '../../../assets/icons/Stars.svg';
import GalaxiesIcon from '../../../assets/icons/Galaxies.svg';
import PlanetCard from '../../components/PlanetCard';

import Sun from '../../../assets/images/Sun.svg';
import Mercury from '../../../assets/images/Mercury.svg';
import Venus from '../../../assets/images/Venus.svg';
import { ScrollView } from 'react-native-gesture-handler';

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <Header home />
      <View style={styles.content}>
        <Text style={[styles.paragraph, Fonts.paragraph()]}>Categorias</Text>
        <View style={styles.categoriesBlock}>
          <CategoryButton gradient="blue" label="Planetas" Icon={PlanetsIcon} />
          <CategoryButton
            gradient="pink"
            label="Asteróides"
            Icon={AsteroidsIcon}
          />
          <CategoryButton gradient="cyan" label="Estrelas" Icon={StarsIcon} />
          <CategoryButton
            gradient="yellow"
            label="Galáxias"
            Icon={GalaxiesIcon}
          />
        </View>
      </View>

      <Text
        style={[
          styles.paragraph,
          Fonts.paragraph(),
          { paddingLeft: 16, marginTop: 20 },
        ]}
      >
        Planetas
      </Text>
      <ScrollView
        horizontal={true}
        decelerationRate="normal"
        style={styles.planetsBlock}
      >
        <PlanetCard PlanetImage={Sun} planetName="Sol" />
        <PlanetCard PlanetImage={Mercury} planetName="Mercúrio" />
        <PlanetCard PlanetImage={Venus} planetName="Vênus" />
      </ScrollView>
      <View style={styles.planetsBlock}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brandBackground,
  },
  content: {
    padding: 16,
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
  paragraph: {
    color: '#fff',
  },
  categoriesBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  planetsBlock: {
    marginTop: 10,
    paddingHorizontal: 12,
  },
});

export default HomePage;
