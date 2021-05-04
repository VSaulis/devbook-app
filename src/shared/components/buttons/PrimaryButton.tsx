import React, { ComponentProps, FunctionComponent } from 'react';
import Button from './Button';
import { StyleSheet } from 'react-native';
import { Colors } from 'styles';

const PrimaryButton: FunctionComponent<ComponentProps<typeof Button>> = (
  props
) => {
  return (
    <Button labelStyle={styles.label} style={styles.container} {...props} />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Primary
  },
  label: {
    color: Colors.White
  }
});

export default PrimaryButton;
