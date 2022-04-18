import React from 'react';
import { VStack } from 'native-base';
import ItemEvent from '../ItemEvent';

const ListEvent = () => {
  return (
    <VStack space={4} mt={6}>
      <ItemEvent />
      <ItemEvent />
      <ItemEvent />
    </VStack>
  );
};

export default ListEvent;
