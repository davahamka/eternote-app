import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Center, Text, VStack, Image, HStack } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<any, 'Information'>;

const InformationScreen = ({ navigation }: Props) => {
  const checkIfTokenExistRedirect = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      navigation.navigate('HomeTab');
    }
  };

  checkIfTokenExistRedirect();
  return (
    <Box paddingX='32px' marginTop='104px'>
      <VStack>
        <Center>
          <Image
            source={require('../../../assets/info_hand.png')}
            size='168px'
            alt='info'
          />
        </Center>
        <Center marginTop='32px'>
          <Text fontSize='3xl' fontWeight='bold'>
            Plan Your Work
          </Text>
          <Text textAlign='center' fontSize='lg'>
            Make Plan, Save Earth.
          </Text>
          <Text textAlign='center' fontSize='lg'>
            Take the first step in living a sustainable lifestyle for our earth
          </Text>
        </Center>

        <Center marginTop='142px'>
          <Button
            width='90%'
            py='12px'
            bgColor='primary'
            rounded='3xl'
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Button>
        </Center>

        <Center mt='24px'>
          <HStack space='2px'>
            <Text fontSize='xs'>Don't have an account yet?</Text>
            <Text
              fontSize='xs'
              color='primary'
              fontWeight='semibold'
              onPress={() => {
                navigation.navigate('Register');
              }}>
              Register
            </Text>
          </HStack>
        </Center>
      </VStack>
    </Box>
  );
};

export default InformationScreen;
