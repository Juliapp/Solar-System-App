import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/HomePage';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import Gallery from '../pages/Gallery';

const Tab = createBottomTabNavigator();
const HomeRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Início" component={HomePage} />
        <Tab.Screen name="Buscar" component={Search} />
        <Tab.Screen name="Favoritos" component={Favorites} />
        <Tab.Screen name="Galeria" component={Gallery} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeRoutes;
