import React, { useState } from 'react';
import { Box, Checkbox, HStack, Text } from 'native-base';

const ItemPlan = () => {
  const [x, s] = useState(false);
  return (
    <Box
      height='78px'
      borderWidth='1'
      borderColor='#E2ECF2'
      rounded='xl'
      px='2'
      py='2'>
      <Box display='flex' flexDir='row' justifyContent='space-between'>
        <HStack display='flex' alignItems='center' space='4px'>
          <Text>💰</Text>
          <Text>Use public transportation</Text>
        </HStack>
        <Checkbox isChecked={x} onChange={() => s(z => z)} value={'dam'}>
          <Text display='none'>a</Text>
        </Checkbox>
      </Box>
    </Box>
  );
};

export default ItemPlan;
