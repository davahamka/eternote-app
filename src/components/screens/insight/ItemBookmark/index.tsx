import React from 'react';
import { Box, Image, Text } from 'native-base';

const ItemBookmark = () => {
  return (
    <Box width='48%' mb='16px' position='relative'>
      <Image
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        width='full'
        height='160px'
        borderRadius='12px'
        alt='image-article'
      />

      <Text
        color='white'
        fontWeight='semibold'
        position='absolute'
        bottom='0'
        px='4px'
        mb='4px'>
        Don't ever say skqdwqk
      </Text>
    </Box>
  );
};

export default ItemBookmark;
