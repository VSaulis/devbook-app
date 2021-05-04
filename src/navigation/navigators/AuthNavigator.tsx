import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, CodeConfirmationScreen } from 'features/auth/screens';
import { codeConfirmationRoute, loginRoute } from '../routes';
import { AuthScreens } from '../screens';

const AuthStack = createStackNavigator<AuthScreens>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={loginRoute} component={LoginScreen} />
      <AuthStack.Screen
        name={codeConfirmationRoute}
        component={CodeConfirmationScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
