import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Styles/StyleGuide';
import SettingsIcon from '../../../assets/icons/Settings.svg';
import Back from '../../../assets/icons/Back.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IHeaderProps {
  home?: boolean;
  stackIcon?: boolean;
}
const Header: React.FC<IHeaderProps> = ({ home = true, stackIcon = false }) => {
  return (
    <View style={styles.container}>
      {home ? (
        <View>
          <View style={styles.helloBlock}>
            <Text style={[Fonts.homeTitle(), styles.text]}>Olá, </Text>
            <Text style={[Fonts.homeTitle(), styles.textName]}>Fulana</Text>
          </View>
          <Text style={[Fonts.paragraph(), styles.text]}>
            O que você vai aprender hoje?
          </Text>
        </View>
      ) : stackIcon ? (
        <Back />
      ) : (
        <View></View>
      )}
      <TouchableOpacity>
        <SettingsIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.brandBackground,
    width: '100%',
    height: '20%',
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
  textName: {
    color: '#FF6CD9',
  },
  helloBlock: {
    flexDirection: 'row',
  },
});

export default Header;
