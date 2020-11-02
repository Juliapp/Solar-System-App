import React, { FunctionComponent } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Gradients, Fonts } from '../../Styles/StyleGuide';
import Styles from './styles';

interface IButtonProps {
  label: string;
  Icon?: FunctionComponent<SvgProps>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
const Button: React.FC<IButtonProps> = ({ label, Icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Gradients.button style={Styles.gradient}>
        <Text style={[Fonts.buttonTitle(), { color: '#fff' }]}>{label}</Text>
        {Icon && <Icon style={{ marginLeft: 16 }} />}
      </Gradients.button>
    </TouchableOpacity>
  );
};

export default Button;
