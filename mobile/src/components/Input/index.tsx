import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SearchIcon from '../../../assets/icons/Search.svg';
import { Colors, Fonts } from '../../Styles/StyleGuide';

interface IInputProps {
  placeholderText?: string;
}

const Input: React.FC<IInputProps> = ({ placeholderText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setInputValue(e.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, Fonts.paragraph()]}
        onChange={handleOnChange}
        selectionColor="#FFF"
        underlineColorAndroid="transparent"
        value={inputValue}
        placeholder={placeholderText}
        placeholderTextColor="#FFFFFF64"
      />
      <SearchIcon width={16} height={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.brandBackground,
    height: 50,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingLeft: 4,
    width: '92%',
    alignSelf: 'center',
  },
  input: {
    marginHorizontal: 16,
    flex: 1,
    color: '#fff',
    opacity: 0.65,
    fontSize: 20,
  },
});

export default Input;
