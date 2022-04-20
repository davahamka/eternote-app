import React, { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Pressable,
  ScrollView,
  Text,
  TextArea,
  useToast,
  VStack,
} from 'native-base';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import Pill from '../../../ui/Pill';
import BoxOptionReminder from './BoxOptionReminder';

const PlanSheet = () => {
  const [category, setCategory] = useState('task');
  const [reminder, setReminder] = useState<Array<string>>(['5 minutes before']);
  const [reminderType, setReminderType] = useState('');
  const [color, setColor] = useState('#fff');

  const handleAddReminder = (data: string) => {
    if (reminder.findIndex(data) != -1) {
      setReminder(r => [...r, data]);
    }
  };

  const toast = useToast();
  return (
    <ActionSheet id='add_plan' gestureEnabled={true} headerAlwaysVisible={true}>
      <ScrollView width='94%' pt='20px' px='18px' nestedScrollEnabled={true}>
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
              autoCompleteType={true}
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
                <Box mb='10px' key={item.name}>
                  <Pill
                    activeBgColor='primary'
                    active={category === item.value}
                    onPress={() => {
                      setCategory(item.value);
                    }}
                    width='auto'
                    px='16px'>
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
            <Box display='flex' flexDir='row' justifyContent='space-between'>
              <Box>
                <Text fontSize='xs'>START DATE</Text>
                <Text fontSize='sm'>20 April 2022 - 07.00AM</Text>
              </Box>
              <Box>
                <Text fontSize='xs'>END DATE</Text>
                <Text fontSize='sm'>20 April 2022 - 08.00AM</Text>
              </Box>
            </Box>
            {/* <Button bg='neutral.richblack' rounded='xl'>
              New Reminder
            </Button> */}
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
                <BoxOptionReminder active={true}>
                  {reminderOptions[0].name}
                </BoxOptionReminder>
                <BoxOptionReminder active={true}>
                  {reminderOptions[1].name}
                </BoxOptionReminder>
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
                <BoxOptionReminder
                  active={reminderTypeOptions[0].name === reminderType}
                  onPress={() => {
                    setReminderType(reminderTypeOptions[0].name);
                  }}>
                  {reminderTypeOptions[0].name}
                </BoxOptionReminder>
                <BoxOptionReminder
                  active={reminderTypeOptions[1].name === reminderType}
                  onPress={() => {
                    setReminderType(reminderTypeOptions[1].name);
                  }}>
                  {reminderTypeOptions[1].name}
                </BoxOptionReminder>
              </HStack>
              <HStack space='4%'>
                <BoxOptionReminder
                  active={reminderTypeOptions[2].name === reminderType}
                  onPress={() => {
                    setReminderType(reminderTypeOptions[2].name);
                  }}>
                  {reminderTypeOptions[2].name}
                </BoxOptionReminder>
                <BoxOptionReminder
                  active={reminderTypeOptions[3].name === reminderType}
                  onPress={() => {
                    setReminderType(reminderTypeOptions[3].name);
                  }}>
                  {reminderTypeOptions[3].name}
                </BoxOptionReminder>
              </HStack>
            </VStack>
          </Box>
          <Box>
            <Box>
              <Text
                fontSize='xs'
                mb='4px'
                color='neutral.characoal'
                fontWeight='semibold'>
                COLOR
              </Text>
              <Box display='flex' flexDir='row' justifyContent='space-between'>
                <Text>Plan Color</Text>
                <Box
                  width='36px'
                  height='36px'
                  bg={color}
                  borderWidth='1'
                  borderColor='gray'
                />
              </Box>
            </Box>
            <Text
              fontSize='xs'
              mb='4px'
              color='neutral.characoal'
              fontWeight='semibold'>
              Choose
            </Text>
            <HStack space='4'>
              <Pressable
                onPress={() => {
                  setColor('#83DB8B');
                }}>
                <Box bg='#83DB9B' width='36px' height='36px' />
              </Pressable>
              <Pressable
                onPress={() => {
                  setColor('#8BC7FF');
                }}>
                <Box bg='#8BC7FF' width='36px' height='36px' />
              </Pressable>
              <Pressable
                onPress={() => {
                  setColor('#FFBC58');
                }}>
                <Box bg='#FFBC58' width='36px' height='36px' />
              </Pressable>
              <Pressable
                onPress={() => {
                  setColor('#EBA1ED');
                }}>
                <Box bg='#EBA1ED' width='36px' height='36px' />
              </Pressable>
            </HStack>
          </Box>

          <Button
            bg='primary'
            width='full'
            rounded='full'
            height='48px'
            mb='64px'
            onPress={() => {
              SheetManager.hideAll();
              toast.show({
                title: 'Plan successfully added',
                placement: 'top',
              });
            }}
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
  // {
  //   name: 'Task',
  //   value: 'task',
  // },
  {
    name: 'Exercise',
    value: 'Exercise',
  },
  {
    name: 'Needs',
    value: 'wNeedsork',
  },
  {
    name: 'Trip',
    value: 'trip',
  },
  {
    name: 'Daily',
    value: 'Daily',
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
