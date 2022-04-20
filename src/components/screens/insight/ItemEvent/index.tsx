import React from 'react';
import { Box, HStack, Image, Text, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  data: {
    title: string;
    category: string[];
    date: string;
    time: string;
    place: string;
    imgSrc: any;
  };
};

const ItemEvent = ({ data }: Props) => {
  return (
    <View>
      <Box position='relative' height='200px'>
        <Box
          width='full'
          position='absolute'
          zIndex='1'
          height='200px'
          rounded='2xl'
          bg='#000'
          opacity='0.4'
        />
        <Image
          source={data.imgSrc}
          width='full'
          height='200px'
          rounded='2xl'
          alt='img'
        />
      </Box>
      <Box position='absolute' px='4' zIndex='2'>
        <Text fontSize='lg' color='white' fontWeight='semibold' mt='10px'>
          {data.title}
        </Text>
        <HStack space={2}>
          {data.category.map(item => (
            <Box bg='neutral.ghost' px='2' py='1' rounded='xl' key={item}>
              <Text fontSize='2xs'>{item}</Text>
            </Box>
          ))}
        </HStack>
        <HStack
          space={2}
          mt='12px'
          display='flex'
          flexDir='row'
          alignItems='center'>
          <Icon name='calendar' size={14} color='#fff' />
          <Text color='white' fontSize='xs'>
            {data.date}
          </Text>
        </HStack>
        <HStack
          space={2}
          mt='12px'
          display='flex'
          flexDir='row'
          alignItems='center'>
          <Icon name='clock-o' size={14} color='#fff' />
          <Text color='white' fontSize='xs'>
            {data.time}
          </Text>
        </HStack>
        <HStack
          space={2}
          mt='12px'
          display='flex'
          flexDir='row'
          alignItems='center'>
          <Icon name='map-pin' size={14} color='#fff' />
          <Text color='white' fontSize='xs'>
            {data.place}
          </Text>
        </HStack>
      </Box>
    </View>
  );
};

export default ItemEvent;
