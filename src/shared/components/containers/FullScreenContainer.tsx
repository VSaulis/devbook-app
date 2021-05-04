import React, { ComponentProps, FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'styles';

const FullScreenContainer: FunctionComponent<ComponentProps<typeof View>> = (
  props
) => {
  const { children } = props;

  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White
  }
});

export default FullScreenContainer;
