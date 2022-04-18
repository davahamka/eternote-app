import React from 'react';
import { HStack, ScrollView } from 'native-base';
import ItemTask from '../ItemTask';

const ListTask = () => {
  return (
    <ScrollView horizontal={true}>
      <HStack space='24px'>
        <ItemTask />
        <ItemTask />
        <ItemTask />
        <ItemTask />
        <ItemTask />
      </HStack>
    </ScrollView>
  );
};

export default ListTask;
