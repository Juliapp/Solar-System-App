import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { Colors, Fonts } from '../../Styles/StyleGuide';

import Background from '../../../assets/images/BackgroundApp.svg';

import MarsImage from '../../../assets/images/Mars.svg';

import Save from '../../../assets/icons/SaveBlack.svg';
import Share from '../../../assets/icons/Share.svg';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DropDownListItem from '../../components/DropDownListItem';

const DetailPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Background />
      </View>
      <Header stackIcon />
      <MarsImage width={200} height={200} style={styles.planet} />
      <ScrollView style={styles.containerInfos}>
        <View style={styles.nameBlock}>
          <Text style={[styles.planetName, Fonts.homeTitle()]}>Marte</Text>

          <View style={styles.iconsBlock}>
            <TouchableOpacity style={{ marginRight: 16 }}>
              <Save width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Share width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.abstract, Fonts.paragraph()]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ab
          aut, neque soluta temporibus architecto velit ipsam omnis sit fuga
          fugit voluptate nihil quisquam, saepe quia culpa eum similique
          reprehenderit.
        </Text>

        <DropDownListItem title="Introdução" text={'lorem ipsun'} />
        <View style={styles.separator} />

        <DropDownListItem
          title="Características Físicas"
          text={'lorem ipsun'}
        />
        <View style={styles.separator} />

        <DropDownListItem title="Hidrologia" text={'lorem ipsun'} />

        <View style={styles.separator} />

        <DropDownListItem title="Geografia" text={'lorem ipsun'} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brandWhite,
    paddingTop: 40,
  },
  containerInfos: {
    paddingHorizontal: 16,
    top: -100,
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
  planetName: {},
  nameBlock: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
  },
  iconsBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  abstract: { marginTop: 10 },

  separator: {
    borderWidth: 0.5,
    borderColor: '#151515',
    opacity: 0.1,
  },
});

export default DetailPage;
