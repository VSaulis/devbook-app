import React, { FunctionComponent } from 'react';
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { Colors, FontSizes } from 'styles';

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Button: FunctionComponent<Props> = (props) => {
  const { style, onPress, label, disabled, labelStyle } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.container, style]}
    >
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: Colors.Text.Secondary,
    textTransform: 'uppercase',
    fontSize: FontSizes.XL
  }
});

export default Button;
