import React from 'react';
import { HStack, ScrollView } from 'native-base';
import ItemMenuEvent from '../ItemMenuEvent';

const ListMenuEvent = () => {
  return (
    <ScrollView horizontal={true}>
      <HStack space={3}>
        <ItemMenuEvent />
        <ItemMenuEvent />
        <ItemMenuEvent />
        <ItemMenuEvent />
      </HStack>
    </ScrollView>
  );
};

export default ListMenuEvent;
