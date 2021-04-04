import React, {FunctionComponent} from "react";
import {View} from "react-native";
import {Input} from "../../../shared/components";

const LoginScreen: FunctionComponent<void> = () => {
  return (
    <View>
      <Input label="Phone"/>
    </View>
  )
};

export default LoginScreen;
