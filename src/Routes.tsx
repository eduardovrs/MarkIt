import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import CurrentList from './pages/CurrentList';
import History from './pages/History';
import BalanceSheet from './pages/BalanceSheet';

export default function Routes() {
  const Tab = createBottomTabNavigator();

  const Stack = createNativeStackNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Produtos" component={Home} />
      <Stack.Screen name="Carrinho" component={CurrentList} />
      <Stack.Screen name="Histórico" component={History} />
      <Stack.Screen name="Balancete" component={BalanceSheet} />
    </Tab.Navigator>
  );
}
