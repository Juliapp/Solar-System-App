import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Colors, Fonts } from '../../Styles/StyleGuide';

import Save from '../../../assets/icons/Save.svg';
import OrangeFoward from '../../../assets/icons/OrangeForward.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IDetailPlanetCardProps {
  PlanetImage: React.FC<SvgProps>;
  planetName: string;
}
const DetailPlanetCard: React.FC<IDetailPlanetCardProps> = ({
  PlanetImage,
  planetName,
}) => {
  return (
    <View style={styles.container}>
      <PlanetImage width={200} height={200} style={styles.planet} />
      <View style={styles.infos}>
        <View style={styles.header}>
          <Text style={[Fonts.homeTitle(), styles.text]}>{planetName}</Text>
          <TouchableOpacity>
            <Save />
          </TouchableOpacity>
        </View>
        <Text style={[styles.text, Fonts.placeholder(), styles.placeholder]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          eligendi ducimus praesentium aut provident possimus quidem corrupti
          quam quis magnam veniam reprehenderit a quia laborum, est, maxime iure
          nulla nisi?
        </Text>
        <TouchableOpacity style={styles.footer}>
          <Text style={[styles.text, Fonts.placeholder(), { marginRight: 10 }]}>
            Continue lendo
          </Text>
          <OrangeFoward width={14} height={14} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: 200,
    backgroundColor: Colors.brandBackground,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 6,
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
  },
  placeholder: {
    opacity: 0.65,
    maxHeight: 64,
    marginTop: 6,
  },
  planet: {
    top: -50,
    left: -40,
  },
  infos: {
    left: -30,
    width: '43%',
    marginRight: 100,
    marginLeft: 6,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 25,
    alignItems: 'center',
  },
});

export default DetailPlanetCard;
