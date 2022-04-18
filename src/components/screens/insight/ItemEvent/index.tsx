import React from 'react';
import { Box, Image, Text, View } from 'native-base';

const ItemEvent = () => {
  return (
    <View>
      <Box>
        <Image
          source={{
            uri: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i1j34kzvn4wU/v1/-1x-1.jpg',
          }}
          width='full'
          height='120px'
          rounded='xl'
          alt='img'
        />
      </Box>
      <Text>Understanding Javascript to know for React implementation</Text>
    </View>
  );
};

export default ItemEvent;
