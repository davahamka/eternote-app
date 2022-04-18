import React from 'react';
import {
  Box,
  Button,
  Fab,
  HStack,
  Input,
  ScrollView,
  Text,
  TextArea,
  View,
  VStack,
} from 'native-base';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ListTask from '../../../components/screens/home/ListTask';
import Tab from '../../../components/PlansTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pill from '../../../components/ui/Pill';

import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type Props = NativeStackScreenProps<any, 'Home'>;

const HomeScreen = ({}: Props) => {
  const onOpenPlan = () => {
    SheetManager.show('add_plan');
  };

  return (
    <ScrollView bg='white' position='relative'>
      <Fab
        position='absolute'
        size='lg'
        bottom='80px'
        onPress={onOpenPlan}
        icon={<Icon name='Home' size={30} color='#000' />}
      />

      <ActionSheet id='add_task'>
        <View height='90%'>
          <Text>Hello World</Text>
        </View>
      </ActionSheet>

      <ActionSheet
        id='add_plan'
        gestureEnabled={true}
        headerAlwaysVisible={true}>
        <ScrollView width='full' pt='20px' px='18px' pb='24px'>
          <VStack space='12px' height='60%'>
            <Box>
              <Text
                color='neutral.characoal'
                textAlign='left'
                mb='4px'
                fontSize='xs'
                fontWeight='semibold'>
                TITLE
              </Text>
              <HStack display='flex' flexDir='row' space='2%'>
                <Box
                  rounded='xl'
                  width='18%'
                  display='flex'
                  borderWidth='1'
                  borderColor='neutral.ashgrey'
                  alignItems='center'
                  justifyContent='center'>
                  <Text>🎉</Text>
                </Box>
                <Input
                  placeholder='Insert your plan'
                  width='80%'
                  px='14px'
                  borderColor='neutral.ashgrey'
                  bg='neutral.issabeline'
                  rounded='xl'
                />
              </HStack>
            </Box>
            <Box>
              <Text
                mb='4px'
                fontSize='xs'
                color='neutral.characoal'
                fontWeight='semibold'>
                DESCRIPTION
              </Text>
              <TextArea
                autoCompleteType
                width='full'
                placeholder='Description about your plan (not required)'
              />
            </Box>
            <Box>
              <Text
                mb='4px'
                fontSize='xs'
                fontWeight='semibold'
                color='neutral.characoal'>
                CATEGORY
              </Text>
              <HStack flexWrap='wrap' space='4px'>
                <Box mb='8px'>
                  <Pill onPress={() => {}} width='auto' px='12px'>
                    <Text fontSize='xs'>Swimming</Text>
                  </Pill>
                </Box>
                <Box mb='8px'>
                  <Pill onPress={() => {}} width='auto' px='12px'>
                    <Text fontSize='xs'>Swimming</Text>
                  </Pill>
                </Box>
                <Box mb='8px'>
                  <Pill onPress={() => {}} width='auto' px='12px'>
                    <Text fontSize='xs'>Swimming</Text>
                  </Pill>
                </Box>
                <Box mb='8px'>
                  <Pill onPress={() => {}} width='auto' px='12px'>
                    <Text fontSize='xs'>Swimming</Text>
                  </Pill>
                </Box>
                <Box mb='8px'>
                  <Pill onPress={() => {}} width='auto' px='12px'>
                    <Text fontSize='xs'>+</Text>
                  </Pill>
                </Box>
              </HStack>
            </Box>
            <Box>
              <Text
                fontSize='xs'
                mb='4px'
                color='neutral.characoal'
                fontWeight='semibold'>
                CALENDAR
              </Text>
              <Button bg='neutral.richblack' rounded='xl'>
                New Reminder
              </Button>
            </Box>
            <Box>
              <Text
                fontSize='xs'
                mb='4px'
                color='neutral.characoal'
                fontWeight='semibold'>
                REMINDER
              </Text>
              <Button bg='neutral.richblack' rounded='xl'>
                New Reminder
              </Button>
            </Box>
            <Button
              bg='primary'
              width='full'
              rounded='full'
              height='48px'
              mt='64px'>
              <Text color='white'>Add Plan</Text>
            </Button>
          </VStack>
        </ScrollView>
      </ActionSheet>

      <Box paddingX='18px'>
        <Text mt='24px' fontSize='lg'>
          Welcome,{' '}
          <Text fontWeight='bold' fontSize='lg'>
            Dava!
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
              Planter progress
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
          You can add this “little things” below to your today’s or upcoming’s
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
  );
};

export default HomeScreen;
