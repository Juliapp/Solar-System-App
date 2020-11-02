import React from 'react';
import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { Colors, Fonts } from '../../Styles/StyleGuide';
import BackgroundImage from '../../../assets/images/Background.svg';
import Button from '../../components/Button';
import Forward from '../../../assets/icons/Forward.svg';
import { useNavigation } from '@react-navigation/native';

const Welcome: React.FC = () => {
  const navigator = useNavigation();

  const handleOnPressWelcome = ({}) => {
    navigator.navigate('HomeRoutes');
  };

  return (
    <View style={[styles.container, Colors.brandBackground]}>
      <BackgroundImage style={styles.backgroundImage} />
      <Text style={[styles.belt, Fonts.paragraph()]}>Aperte o cinto</Text>
      <Text style={[styles.title, Fonts.homeTitle()]}>
        Comece sua jornada pelo sistema solar.
      </Text>
      <Text style={[styles.title, Fonts.paragraph(), styles.groupButton]}>
        Pronto para a decolagem?
      </Text>
      <Button
        label="Começar agora"
        Icon={Forward}
        onPress={handleOnPressWelcome}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    position: 'absolute',
    zIndex: 0,
  },

  title: {
    color: '#fff',
    maxWidth: '85%',
    alignContent: 'center',
    textAlign: 'center',
  },
  belt: {
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.65,
  },

  groupButton: {
    marginTop: '45%',
  },
});

export default Welcome;
