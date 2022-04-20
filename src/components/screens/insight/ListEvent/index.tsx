import React from 'react';
import { VStack } from 'native-base';
import ItemEvent from '../ItemEvent';
import { EventData } from '../../../../contents/EventData';

const ListEvent = () => {
  return (
    <VStack space={4} mt={6}>
      {EventData.map(item => (
        <ItemEvent data={item} key={item.title} />
      ))}
    </VStack>
  );
};

export default ListEvent;
