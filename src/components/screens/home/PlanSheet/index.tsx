import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Input,
  ScrollView,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import ActionSheet from 'react-native-actions-sheet';
import Pill from '../../../ui/Pill';
import BoxOptionReminder from './BoxOptionReminder';

const PlanSheet = () => {
  const [category, setCategory] = useState('');
  const [reminder, setReminder] = useState<Array<string>>([]);
  const [reminderType, setReminderType] = useState('');

  return (
    <ActionSheet id='add_plan' gestureEnabled={true} headerAlwaysVisible={true}>
      <ScrollView width='full' pt='20px' px='18px' nestedScrollEnabled={true}>
        <VStack space='12px'>
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
            <HStack flexWrap='wrap' space='8px'>
              {categoryOptions.map(item => (
                <Box mb='10px'>
                  <Pill onPress={() => {}} width='auto' px='16px'>
                    <Text fontSize='xs'>{item.name}</Text>
                  </Pill>
                </Box>
              ))}
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
            <VStack space={3} w='100%'>
              <HStack space='4%'>
                <BoxOptionReminder>{reminderOptions[0].name}</BoxOptionReminder>
                <BoxOptionReminder>{reminderOptions[1].name}</BoxOptionReminder>
              </HStack>
              <HStack space='4%'>
                <BoxOptionReminder>{reminderOptions[2].name}</BoxOptionReminder>
                <BoxOptionReminder>{reminderOptions[3].name}</BoxOptionReminder>
              </HStack>
              <HStack space='4%'>
                <BoxOptionReminder>{reminderOptions[4].name}</BoxOptionReminder>
                <BoxOptionReminder>{reminderOptions[5].name}</BoxOptionReminder>
              </HStack>
            </VStack>
            <Button
              mt='16px'
              bg='white'
              borderWidth='1'
              borderColor='#6A6A6A'
              rounded='xl'>
              <Text color='#6A6A6A'>Set reminder time</Text>
            </Button>
          </Box>
          <Box>
            <Text
              fontSize='xs'
              mb='4px'
              color='neutral.characoal'
              fontWeight='semibold'>
              REMINDER TYPE
            </Text>
            <VStack space={3} w='100%'>
              <HStack space='4%'>
                <BoxOptionReminder>
                  {reminderTypeOptions[0].name}
                </BoxOptionReminder>
                <BoxOptionReminder>
                  {reminderTypeOptions[1].name}
                </BoxOptionReminder>
              </HStack>
              <HStack space='4%'>
                <BoxOptionReminder>
                  {reminderTypeOptions[2].name}
                </BoxOptionReminder>
                <BoxOptionReminder>
                  {reminderTypeOptions[3].name}
                </BoxOptionReminder>
              </HStack>
            </VStack>
          </Box>
          <Box>
            <Text
              fontSize='xs'
              mb='4px'
              color='neutral.characoal'
              fontWeight='semibold'>
              PLAN CARD COLOR
            </Text>
          </Box>
          <Button
            bg='primary'
            width='full'
            rounded='full'
            height='48px'
            mb='64px'
            mt='64px'>
            <Text color='white'>Add Plan</Text>
          </Button>
        </VStack>
      </ScrollView>
    </ActionSheet>
  );
};

const reminderTypeOptions = [
  {
    name: 'Notification',
    value: 'notification',
  },
  {
    name: 'Vibration',
    value: 'vibration',
  },
  {
    name: 'Sound',
    value: 'sound',
  },
  {
    name: 'Lockscreen',
    value: 'lockscreen',
  },
];

const categoryOptions = [
  {
    name: 'Work',
    value: 'work',
  },
  {
    name: 'Exercise',
    value: 'work',
  },
  {
    name: 'Needs',
    value: 'work',
  },
  {
    name: 'Trip',
    value: 'trip',
  },
  {
    name: 'Daily',
    value: 'work',
  },
  {
    name: 'Shopping',
    value: 'shopping',
  },
  {
    name: 'Homework',
    value: 'homework',
  },
  {
    name: 'Study',
    value: 'study',
  },
  {
    name: 'Chill',
    value: 'chill',
  },
];

const reminderOptions = [
  {
    name: '5 minutes before',
  },
  {
    name: '10 minutes before',
  },
  {
    name: '15 minutes before',
  },
  {
    name: '30 minutes before',
  },
  {
    name: '1 day before',
  },
  {
    name: '2 day before',
  },
];

export default PlanSheet;
