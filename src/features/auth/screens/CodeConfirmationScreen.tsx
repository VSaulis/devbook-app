import React, { FunctionComponent, useState } from 'react';
import { Input, PrimaryButton, SafeScreenContainer } from 'shared/components';
import { useCodeConfirmation } from '../hooks';
import { RouteProp } from '@react-navigation/native';
import { AuthScreens } from 'navigation/screens';
import { CodeConfirmationRoute } from 'navigation/routes';

interface Props {
  route: RouteProp<AuthScreens, CodeConfirmationRoute>;
}

const CodeConfirmationScreen: FunctionComponent<Props> = (props) => {
  const { route } = props;
  const { isLoading, confirmCode } = useCodeConfirmation();
  const [code, setCode] = useState<string>('');

  return (
    <SafeScreenContainer>
      <Input value={code} onChangeText={setCode} label="Code" />
      <PrimaryButton
        disabled={isLoading}
        label="Confirm"
        onPress={() => confirmCode(route.params.phone, Number(code))}
      />
    </SafeScreenContainer>
  );
};

export default CodeConfirmationScreen;
