import React, { FunctionComponent, useState } from 'react';
import { Input, PrimaryButton, SafeScreenContainer } from 'shared/components';
import { useLogin } from '../hooks';

const LoginScreen: FunctionComponent<void> = () => {
  const { isLoading, login } = useLogin();
  const [phone, setPhone] = useState<string>('');

  return (
    <SafeScreenContainer>
      <Input value={phone} onChangeText={setPhone} label="Phone" />
      <PrimaryButton
        disabled={isLoading}
        label="Login"
        onPress={() => login(phone)}
      />
    </SafeScreenContainer>
  );
};

export default LoginScreen;
