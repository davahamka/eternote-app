import React, { useRef } from 'react';
import {
  Box,
  Input,
  Text,
  VStack,
  FormControl,
  Button,
  Center,
  HStack,
} from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Controller, useForm } from 'react-hook-form';

type Props = NativeStackScreenProps<any, 'Login'>;
type FormData = {
  email: string;
  password: string;
};

const LoginScreen = ({ navigation }: Props) => {
  const inputPasswordRef = useRef<any>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(() => {
    navigation.navigate('Home');
  });

  return (
    <Box paddingX='24px'>
      <VStack>
        <Text fontSize='3xl' fontWeight='bold' marginTop='30%'>
          Hello!
        </Text>
        <Text mb={'24px'}>Login into your app</Text>

        {(!!errors.email || !!errors.password) && (
          <Text fontSize='xs' color='error'>
            Check your input again.
          </Text>
        )}
        <VStack>
          <FormControl.Label>Username</FormControl.Label>

          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                isInvalid={!!errors.email}
                placeholder='Username'
                returnKeyType='next'
                bgColor='neutral.ghost'
                borderColor='secondary2'
                rounded='2xl'
                onSubmitEditing={() => {
                  inputPasswordRef.current.focus();
                }}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name='email'
          />

          <FormControl.Label marginTop={'12px'}>Password</FormControl.Label>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                isInvalid={!!errors.email}
                placeholder='Password'
                type='password'
                bgColor='neutral.ghost'
                borderColor='secondary2'
                rounded='2xl'
                ref={inputPasswordRef}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name='password'
          />

          <Text fontSize='xs' mt={2} textAlign='right'>
            Forgot your password?
          </Text>

          <Button
            marginTop='36px'
            bgColor='primary'
            py='12px'
            rounded='full'
            onPress={onSubmit}>
            Login
          </Button>

          <Center mt='14px'>
            <HStack space='2px'>
              <Text fontSize='xs'>Don't have account?</Text>
              <Text
                fontSize='xs'
                color='primary'
                fontWeight='bold'
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                Register
              </Text>
            </HStack>
          </Center>
        </VStack>
      </VStack>
    </Box>
  );
};

export default LoginScreen;
