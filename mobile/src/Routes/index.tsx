import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/HomePage';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import Gallery from '../pages/Gallery';
import { Colors } from '../Styles/StyleGuide';

import HomeIcon from '../../assets/icons/Home.svg';
import SearchIcon from '../../assets/icons/Search.svg';
import BookMarkIcon from '../../assets/icons/Save.svg';
import GalleryIcon from '../../assets/icons/Gallery.svg';

const Tab = createBottomTabNavigator();
const HomeRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Início"
      sceneContainerStyle={{ backgroundColor: 'red' }}
      tabBarOptions={{
        style: [
          {
            backgroundColor: Colors.brandBackground,
            borderTopColor: '#00000000',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            padding: 10,
            height: 60,
            position: 'absolute',
          },
        ],
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomePage}
        options={{
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Search}
        options={{
          tabBarIcon: () => <SearchIcon stroke="#000" />,
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: () => <BookMarkIcon />,
        }}
      />
      <Tab.Screen
        name="Galeria"
        component={Gallery}
        options={{
          tabBarIcon: () => <GalleryIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
