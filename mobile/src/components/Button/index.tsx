import React from 'react';
import { Text, View } from 'react-native';
import { Gradients } from '../../Styles/StyleGuide';

import Styles from './styles';

const Button: React.FC = () => {
  return (
    <View>
      <Gradients.button styles={Styles.container}>
        <Text>Button</Text>
      </Gradients.button>
    </View>
  );
};

export default Button;
