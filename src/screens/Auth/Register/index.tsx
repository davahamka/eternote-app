import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import { Controller, useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterScreen = () => {
  const {
    control,
    // handleSubmit,
    // formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  //   const onSubmit = handleSubmit(() => {});

  return (
    <ScrollView>
      <Box paddingX='24px'>
        <VStack>
          <Text fontSize='3xl' fontWeight='bold' marginTop='30%'>
            Register
          </Text>
          <Text mb='24px'>Create your account first, to access the app</Text>

          <VStack>
            <FormControl.Label>Name</FormControl.Label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder='Name'
                  bgColor='neutral.ghost'
                  borderColor='secondary2'
                  rounded='2xl'
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
              name='name'
            />

            <FormControl.Label marginTop={'12px'}>Email</FormControl.Label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder='Email'
                  bgColor='neutral.ghost'
                  borderColor='secondary2'
                  rounded='2xl'
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
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
                  placeholder='Password'
                  type='password'
                  bgColor='neutral.ghost'
                  borderColor='secondary2'
                  rounded='2xl'
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
              name='password'
            />

            <FormControl.Label marginTop={'12px'}>
              Confirm Password
            </FormControl.Label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder='Confirm Password'
                  type='password'
                  bgColor='neutral.ghost'
                  borderColor='secondary2'
                  rounded='2xl'
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
              name='confirmPassword'
            />

            <Button marginTop='36px' bgColor='primary' py='12px' rounded='full'>
              Register
            </Button>
          </VStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default RegisterScreen;
