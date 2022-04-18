import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Center, Text, VStack, Image, HStack } from 'native-base';

type Props = NativeStackScreenProps<any, 'Information'>;

const InformationScreen = ({ navigation }: Props) => {
  return (
    <Box paddingX='32px' marginTop='104px'>
      <VStack>
        <Center>
          <Image
            source={require('../../../assets/info_handphone.png')}
            size='168px'
            alt='info'
          />
        </Center>
        <Center marginTop='32px'>
          <Text fontSize='3xl' fontWeight='bold'>
            Plan Your Work
          </Text>
          <Text textAlign='center'>
            Easily plan your work with one touch and simply integrate with your
            calendar
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
