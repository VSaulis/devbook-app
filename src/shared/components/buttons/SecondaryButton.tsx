import React, { ComponentProps, FunctionComponent } from 'react';
import Button from './Button';
import { StyleSheet } from 'react-native';
import { Colors, FontSizes } from 'styles';

const SecondaryButton: FunctionComponent<ComponentProps<typeof Button>> = (
  props
) => {
  return (
    <Button labelStyle={styles.label} style={styles.container} {...props} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  label: {
    color: Colors.Text.Secondary,
    textTransform: 'uppercase',
    fontSize: FontSizes.XL
  }
});

export default SecondaryButton;
