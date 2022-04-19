import React, { useState } from 'react';
import { Box, Checkbox, HStack, Text } from 'native-base';
import Pill from '../../../ui/Pill';

type Props = {
  data: any;
};

const ItemPlan = ({ data }: Props) => {
  const [x, s] = useState(false);
  return (
    <Box
      height='92px'
      borderWidth='1'
      borderColor='#E2ECF2'
      rounded='xl'
      display='flex'
      justifyContent='space-between'
      px='2'
      py='2'>
      <Box
        display='flex'
        alignItems='center'
        flexDir='row'
        justifyContent='space-between'>
        <HStack display='flex' alignItems='center' space='4px' mt='4px'>
          <Text>{data.emoji}</Text>
          <Text fontSize='sm' fontWeight='semibold'>
            {data.title}
          </Text>
        </HStack>
        <Box px='14px' rounded='xl' bg='#E9F8FF' py='3px'>
          <Text fontSize='xs'>Work</Text>
        </Box>
      </Box>
      <Box display='flex' flexDir='row' justifyContent='space-between'>
        <Text color='#5A717E' fontSize='xs'>
          07.30AM-08.30AM
        </Text>
        <Checkbox isChecked={x} onChange={() => s(z => z)} value={'dam'}>
          <Text display='none'>a</Text>
        </Checkbox>
      </Box>
    </Box>
  );
};

export default ItemPlan;
