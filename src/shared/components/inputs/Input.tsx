import React, { FunctionComponent, ComponentProps } from 'react';
import {
  StyleProp,
  TextInput,
  TextStyle,
  ViewStyle,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Colors, FontSizes } from 'styles';

interface Props extends ComponentProps<typeof TextInput> {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  error?: string;
}

const Input: FunctionComponent<Props> = (props) => {
  const { style, containerStyle, label, error, ...rest } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...rest} style={[styles.input, style]} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
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
  },
  input: {
    fontSize: FontSizes.XXL,
    height: 36,
    padding: 0,
    fontFamily: 'Regular',
    borderBottomColor: Colors.Border.Light,
    borderBottomWidth: 1
  },
  error: {
    fontSize: FontSizes.XL,
    color: Colors.Alert.Danger
  }
});

export default Input;
