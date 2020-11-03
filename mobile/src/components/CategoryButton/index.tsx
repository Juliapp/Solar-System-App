import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { Fonts, Gradients } from '../../Styles/StyleGuide';

interface ICategoryButtonProps {
  gradient: 'blue' | 'pink' | 'cyan' | 'yellow';
  label: string;
  Icon: React.FC<SvgProps>;
}
const CategoryButton: React.FC<ICategoryButtonProps> = ({
  gradient,
  label,
  Icon,
}) => {
  const GradientColor = Gradients[gradient];

  return (
    <TouchableOpacity>
      <GradientColor style={styles.container}>
        <Icon style={styles.icon} />
        <Text style={[styles.label, Fonts.placeholder()]}>{label}</Text>
      </GradientColor>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 73,
    height: 73,
    borderRadius: 8,
  },
  icon: {
    width: 32,
    height: 32,
  },
  label: {
    color: '#fff',
    marginTop: 6,
  },
});

export default CategoryButton;
