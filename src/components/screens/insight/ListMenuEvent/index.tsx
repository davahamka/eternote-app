import React from 'react';
import { HStack, ScrollView } from 'native-base';
import ItemMenuEvent from '../ItemMenuEvent';
import { CategoryEventData } from '../../../../contents/CategoryEventData';

const ListMenuEvent = () => {
  return (
    <ScrollView horizontal={true}>
      <HStack space={3}>
        {CategoryEventData.map(item => (
          <ItemMenuEvent key={item.name} data={item} />
        ))}
      </HStack>
    </ScrollView>
  );
};

export default ListMenuEvent;
