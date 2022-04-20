import { Box, Image, Text } from 'native-base';
import React from 'react';

type Props = {
  data: {
    name: string;
    imgSrc: any;
  };
};

const ItemMenuEvent = ({ data }: Props) => {
  return (
    <Box position='relative'>
      <Image
        source={data.imgSrc}
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
          {data?.name}
        </Text>
      </Box>
    </Box>
  );
};

export default ItemMenuEvent;
