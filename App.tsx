import {StatusBar} from 'expo-status-bar';
import React, {FunctionComponent} from 'react';
import {Provider} from "react-redux";
import {persistor, store} from "store";
import {PersistGate} from "redux-persist/integration/react";
import RootNavigator from "./src/navigation/navigators/RootNavigator";
import {useFonts} from 'expo-font';

const App: FunctionComponent<void> = () => {
  const [loaded] = useFonts({
    Thin: require('./assets/fonts/FiraSans-Thin.ttf'),
    ExtraLight: require('./assets/fonts/FiraSans-ExtraLight.ttf'),
    Light: require('./assets/fonts/FiraSans-Light.ttf'),
    Regular: require('./assets/fonts/FiraSans-Regular.ttf'),
    Medium: require('./assets/fonts/FiraSans-Medium.ttf'),
    SemiBold: require('./assets/fonts/FiraSans-SemiBold.ttf'),
    Bold: require('./assets/fonts/FiraSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar/>
        <RootNavigator/>
      </PersistGate>
    </Provider>
  );
};

export default App;
