import React from 'react';
import { View, Text, StyleSheet, InteractionManager } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import Forward from '../../../assets/icons/OrangeForward.svg';
import { Colors, Fonts } from '../../Styles/StyleGuide';

interface IPlanetCardProps {
  PlanetImage: React.FC<SvgProps>;
  planetName: string;
}
const PlanetCard: React.FC<IPlanetCardProps> = ({
  PlanetImage,
  planetName,
}) => {
  return (
    <View style={styles.container}>
      <PlanetImage style={styles.planetImage} width={164} height={164} />

      <View style={styles.cardFooter}>
        <Text style={[styles.footerText, Fonts.paragraph()]}>{planetName}</Text>
        <TouchableOpacity>
          <Forward width={13} height={13} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.brandBackground,
    width: 140,
    height: 190,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 4,
  },

  planetImage: {
    top: -30,
    left: -54,
  },

  footerText: {
    color: '#fff',
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    flex: 1,
    marginBottom: 20,
  },
});

export default PlanetCard;
