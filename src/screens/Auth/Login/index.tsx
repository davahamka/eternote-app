import React, { useRef, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { loginAuth } from '../../../modules/auth/authSlice';
import { LoginRequest } from '../../../modules/auth/entities';
import { StackActions } from '@react-navigation/native';

type Props = NativeStackScreenProps<any, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const inputPasswordRef = useRef<any>();
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(state => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(data => {
    dispatch(loginAuth(data))
      .unwrap()
      .then(() => {
        navigation.dispatch(StackActions.pop(1));
        navigation.dispatch(StackActions.replace('HomeTab'));
      })
      .catch(rejectedValueOrSerializedError => {
        setError(rejectedValueOrSerializedError.message);
      });
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
        {!errors.email && !errors.password && (
          <Text color='error' fontSize='xs'>
            {error}
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
                type='email'
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
            isLoading={status === 'pending'}
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
