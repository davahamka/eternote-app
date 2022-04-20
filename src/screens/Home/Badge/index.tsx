import React from 'react';
import {
  Box,
  Center,
  Divider,
  HStack,
  Image,
  Progress,
  ScrollView,
  Text,
} from 'native-base';
import { BadgeData } from '../../../contents/BadgeData';

const BadgeScreen = () => {
  return (
    <ScrollView px='18px'>
      <Text mt='30px' fontSize='xl' fontWeight='bold'>
        Your current badges
      </Text>
      <Box mt='42px' textAlign='center' display='flex' justifyContent='center'>
        <Center>
          <Image
            source={require('../../../assets/badge_planter.png')}
            size='120px'
            alt='info'
          />
        </Center>
        <Text textAlign='center' fontWeight='bold' fontSize='xl'>
          Planter
        </Text>

        <Text textAlign='center' fontSize='lg'>
          Level 1
        </Text>
        <Progress value={35} mx='12' colorScheme='emerald' />
        <Text textAlign='center' mt='10px'>
          35/100 pts
        </Text>
        <Text textAlign='center' mt='14px'>
          Take more “little things” action to get points and be the environment
          goddess by level up your badge!
        </Text>
      </Box>

      <Box mt='24px'>
        <Text fontSize='lg'>Badge List</Text>
        <Divider h='2px' mt='2px' mb='24px' />
        {BadgeData.map(item => (
          <>
            <Box width='full'>
              <Box display='flex' flexDir='row'>
                <Box width='24%'>
                  <Image source={item.imgSrc} size='74px' alt='info' />
                </Box>
                <Box width='70%' ml='6%'>
                  <Text fontSize='lg' fontWeight='semibold'>
                    {item.name}
                  </Text>
                  <Box
                    display='flex'
                    flexDir='row'
                    justifyContent='space-between'>
                    <Text fontWeight='semibold' color='gray.400'>
                      Level {item.level}
                    </Text>

                    <HStack space={1}>
                      <Image
                        source={require('../../../assets/ic_coin.png')}
                        size='16px'
                        alt='info'
                      />
                      <Text>{item.pts}</Text>
                    </HStack>
                  </Box>

                  <Text fontSize='xs' color='gray.600'>
                    {item.desc}
                  </Text>
                </Box>
              </Box>
              <Box
                borderRadius='xl'
                borderColor='gray.300'
                borderWidth='1'
                mt='10px'
                bg='neutal.ghost'
                display='flex'
                flexDir='row'
                justifyContent='space-between'
                px='7'
                py='6'
                m='2'>
                <Text fontSize='md'>Unlock {item.emoji} emojis</Text>
              </Box>
              <Box
                borderRadius='xl'
                mt='10px'
                borderWidth='1'
                borderColor='gray.300'
                bg='neutal.ghost'
                display='flex'
                flexDir='row'
                justifyContent='space-between'
                px='7'
                py='6'
                m='2'>
                <Text fontSize='md'>Unlock {item.avatar} avatars</Text>
              </Box>
              <Box
                borderRadius='xl'
                borderColor='gray.300'
                borderWidth='1'
                mt='10px'
                bg='neutal.ghost'
                display='flex'
                flexDir='row'
                justifyContent='space-between'
                px='7'
                py='6'
                m='2'>
                <Text fontSize='md'>Unlock {item.color} colors</Text>
              </Box>
            </Box>
            <Divider my='20px' />
          </>
        ))}
      </Box>
    </ScrollView>
  );
};

export default BadgeScreen;
