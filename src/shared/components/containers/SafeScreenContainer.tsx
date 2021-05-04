import React, { ComponentProps, FunctionComponent } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar
} from 'react-native';
import { Colors } from 'styles';

const SafeScreenContainer: FunctionComponent<ComponentProps<typeof View>> = (
  props
) => {
  const { children } = props;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.White
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

export default SafeScreenContainer;
