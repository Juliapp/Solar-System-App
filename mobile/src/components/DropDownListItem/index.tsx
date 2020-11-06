import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropdownIcon from '../../../assets/icons/Down.svg';
import { Fonts } from '../../Styles/StyleGuide';

interface IDropDownListItemProps {
  title: string;
  text: string;
}

const DropDownListItem: React.FC<IDropDownListItemProps> = ({
  text,
  title,
}) => {
  const [isCollapsed, setCollapse] = useState(false);

  const handleOnPress = () => {
    setCollapse(!isCollapsed);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={handleOnPress}>
        <DropdownIcon
          style={[
            styles.dropIcon,
            {
              transform: isCollapsed
                ? [{ rotate: '0deg' }]
                : [{ rotate: '270deg' }],
            },
          ]}
          width={16}
          height={16}
        />
        <Text style={[styles.title, Fonts.buttonTitle()]}>{title}</Text>
      </TouchableOpacity>

      <Text
        style={[
          Fonts.paragraph(),
          { display: isCollapsed ? 'flex' : 'none', marginLeft: 32 },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropIcon: {
    marginRight: 16,
  },
});

export default DropDownListItem;
