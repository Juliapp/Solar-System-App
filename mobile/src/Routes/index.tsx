import React from 'react';
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
        activeTintColor: '#fff',
        inactiveTintColor: '#ffffff00',
        labelStyle: {
          marginBottom: 10,
        },
        style: [
          {
            backgroundColor: Colors.brandBackground,
            borderTopColor: '#00000000',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            padding: 10,
            height: 65,
            position: 'absolute',
          },
        ],
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon
              style={{
                opacity: focused ? 0.95 : 0.5,
                marginBottom: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              style={{
                opacity: focused ? 0.95 : 0.5,
                marginBottom: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <BookMarkIcon
              style={{
                opacity: focused ? 0.95 : 0.5,
                marginBottom: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Galeria"
        component={Gallery}
        options={{
          tabBarIcon: ({ focused }) => (
            <GalleryIcon
              style={{
                opacity: focused ? 0.95 : 0.5,
                marginBottom: focused ? 6 : 0,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeRoutes;
