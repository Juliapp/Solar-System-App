import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Gradients, Fonts } from '../../Styles/StyleGuide';
import Styles from './styles';

interface IButtonProps {
  label: string;
  Icon?: FunctionComponent<SvgProps>;
}
const Button: React.FC<IButtonProps> = ({ label, Icon }) => {
  return (
    <Gradients.button style={Styles.gradient}>
      <Text style={[Fonts.buttonTitle(), { color: '#fff' }]}>{label}</Text>
      {Icon && <Icon style={{ marginLeft: 16 }} />}
    </Gradients.button>
  );
};

export default Button;
