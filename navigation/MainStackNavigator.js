import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTabs">
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{
            title: 'Detalle del Producto',
            headerStyle: { backgroundColor: '#c8102e' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
