import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import { StackActions, useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { checkAuth, logout } from '../../../modules/auth/authSlice';

const AccountScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkAuth('x'));
  }, [dispatch]);

  return (
    <ScrollView>
      <View bgColor='white' paddingX='16px'>
        <Box flex={1} justifyContent='center' alignItems='center' mt='64px'>
          <Image
            source={{
              uri: 'https://static.wikia.nocookie.net/akb48/images/b/bd/Zee_Darashinai_Aishikata.jpg/revision/latest/scale-to-width-down/250?cb=20210807084938',
            }}
            width='44px'
            rounded='full'
            alt='Alternate Text'
            size='xl'
          />
          <Text fontSize='xl' fontWeight='semibold' mt={2}>
            {user?.name}
          </Text>
          <Box>
            <Text color='gray.400' mt='-2px'>
              {user?.email}
            </Text>
          </Box>
        </Box>

        <HStack space={'4%'} marginTop={6}>
          <Box
            width='48%'
            bgColor='#FFE6A5'
            height='128px'
            rounded='2xl'
            paddingY='8px'
            paddingX='14px'>
            <Text fontSize='md' fontWeight='bold' color='#E8C66D'>
              This Week
            </Text>
            <Text
              color='#EAC461'
              fontSize='5xl'
              fontWeight='extrabold'
              marginTop='-8px'>
              40
            </Text>
          </Box>

          <Box
            width='48%'
            bgColor='#C4F0D3'
            height='128px'
            rounded='2xl'
            paddingY='8px'
            paddingX='14px'>
            <Pressable
              onPress={() => {
                navigation.navigate('Badge');
              }}>
              <Text fontSize='md' fontWeight='semibold' color='#7BD49D'>
                Badge
              </Text>
              <Text
                letterSpacing={'0'}
                lineHeight='36px'
                fontSize='3xl'
                mt='2px'
                fontWeight='black'
                color='#73B78E'>
                {user?.level}
              </Text>
            </Pressable>
          </Box>
        </HStack>

        <VStack mt={'24px'}>
          <HStack space={'24px'} py={'14px'}>
            <Text>Test</Text>
            <Text fontSize='xl' fontWeight='semibold'>
              Account
            </Text>
          </HStack>
          <Divider />
          <HStack space={'24px'} py={'14px'}>
            <Text>Test</Text>
            <Text fontSize='xl' fontWeight='semibold'>
              Settings
            </Text>
          </HStack>
          <Divider />
          <HStack space={'24px'} py={'14px'}>
            <Text>Test</Text>
            <Text fontSize='xl' fontWeight='semibold'>
              About
            </Text>
          </HStack>
          <Divider />

          <Button
            onPress={() => {
              dispatch(logout());
              navigation.dispatch(StackActions.pop());
              navigation.dispatch(StackActions.replace('Information'));
            }}
            rounded='full'
            py={'12px'}
            bgColor='black'
            mt='48px'
            mb={'86px'}>
            Logout
          </Button>
        </VStack>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;
