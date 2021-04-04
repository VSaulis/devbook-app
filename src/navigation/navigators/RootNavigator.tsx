import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import {useAppSelector} from "store";
import {authRoute, mainRoute} from "../routes";
import {RootScreens} from "../screens";

const RootStack = createStackNavigator<RootScreens>();

const screenOptions = {
  headerShown: false
};

const RootNavigator = () => {
  const isLogged = useAppSelector(state => state.auth.isLogged);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        {!isLogged && <RootStack.Screen name={authRoute} component={AuthNavigator}/>}
        {isLogged && <RootStack.Screen name={mainRoute} component={MainNavigator}/>}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
