import { Box, Image, Text } from 'native-base';
import React from 'react';

const ItemMenuEvent = () => {
  return (
    <Box position='relative'>
      <Image
        source={{
          uri: 'https://static.wikia.nocookie.net/akb48/images/b/bd/Zee_Darashinai_Aishikata.jpg/revision/latest/scale-to-width-down/250?cb=20210807084938',
        }}
        width='142px'
        height='123px'
        rounded='2xl'
        alt='image'
      />
      <Box
        position='absolute'
        bottom='0'
        right='0'
        m='2'
        bg='rgba(0,0,0,0.5)'
        px='2'
        rounded='3xl'>
        <Text color='neutral.ghost' fontSize='xs'>
          Charity
        </Text>
      </Box>
    </Box>
  );
};

export default ItemMenuEvent;
