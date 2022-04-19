import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Fab,
  HStack,
  Input,
  ScrollView,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ListTask from '../../../components/screens/home/ListTask';
import Tab from '../../../components/PlansTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pill from '../../../components/ui/Pill';

import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TaskSheet from '../../../components/screens/home/TaskSheet';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { checkAuth } from '../../../modules/auth/authSlice';
import PlanSheet from '../../../components/screens/home/PlanSheet';

type Props = NativeStackScreenProps<any, 'Home'>;

const HomeScreen = ({}: Props) => {
  const onOpenPlan = () => {
    SheetManager.show('add_plan');
  };

  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkAuth('x'));
  }, [dispatch]);

  return (
    <>
      <Fab
        bg='warning'
        position='absolute'
        bottom='80px'
        width='60'
        height='60'
        onPress={onOpenPlan}
        icon={<Icon name='plus' size={26} color='#fff' />}
      />
      <ScrollView bg='white' position='relative'>
        <TaskSheet />

        <PlanSheet />

        <Box paddingX='18px'>
          <Text mt='24px' fontSize='lg'>
            Welcome,{' '}
            <Text fontWeight='bold' fontSize='lg'>
              {user?.name}!
            </Text>
          </Text>
          <Box display='flex' flexDir='row' alignItems='center' mt='10px'>
            <Text fontSize='2xl'>What</Text>
            <Text fontSize='2xl' fontWeight='bold' ml='6px'>
              good activities
            </Text>
            <Text fontSize='2xl' ml='6px'>
              are
            </Text>
          </Box>
          <Box display='flex' flexDir='row' alignItems='center'>
            <Text fontSize='2xl'>you going to do today?</Text>
          </Box>
          <Text mt='18px' fontSize='md'>
            Your progress
          </Text>
          <HStack
            display='flex'
            space={'2%'}
            mt='8px'
            justifyContent='space-between'
            bg='#1CCC98'
            height='126px'
            alignItems='center'
            py='14px'
            paddingX='16px'
            rounded='xl'>
            <Box width='58%'>
              <Text fontSize='xl' fontWeight='medium' color='white'>
                {user?.level} progress
              </Text>
              <Text fontSize='xs' color='white'>
                Excellent, your planter progress almost done.
              </Text>
            </Box>
            <Box
              width='42%'
              display='flex'
              justifyContent='center'
              alignItems='center'>
              <Box position='relative'>
                <Text
                  position='absolute'
                  left='4'
                  top='5'
                  fontSize='xs'
                  color='white'
                  width='full'>
                  70%
                </Text>
                <AnimatedCircularProgress
                  size={60}
                  width={8}
                  fill={70}
                  tintColor='#FBFF39'
                  backgroundColor='#28EFB4'
                />
              </Box>
              <Text mt='6px' fontSize='xs' color='white'>
                35/100
              </Text>
            </Box>
          </HStack>
          <Text fontSize='xl' fontWeight='medium' mt='16px'>
            Save our world start with doing the little things
          </Text>
          <Text mt='6px' color='neutral.cadet'>
            You can add this “little things” below to your today’s or upcoming's
            plan:
          </Text>
          <Box mt='10px'>
            <ListTask />
          </Box>
          <Text mt='24px' fontSize='xl' fontWeight='semibold'>
            Your Plans
          </Text>
          <Box>
            <Tab />
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
