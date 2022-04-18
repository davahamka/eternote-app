import React from 'react';
import { Box, Button, HStack, Text } from 'native-base';

const ItemTask = () => {
  return (
    <Box
      width='200px'
      borderColor='neutral.gainsboro'
      borderWidth='1px'
      height='98px'
      padding='12px'
      borderRadius='xl'
      display='flex'
      justifyContent='space-between'>
      <Box width='84%'>
        <Text fontSize='xs' fontWeight='semibold'>
          Turn off the lights before going out
        </Text>
      </Box>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'>
        <HStack>
          <Text fontSize='xs'>10 pts</Text>
        </HStack>
        <Button bg='#1CCC98'>
          <Text fontSize='xs' color='white'>
            Pilih
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default ItemTask;
