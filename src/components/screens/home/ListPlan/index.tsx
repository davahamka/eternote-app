import React from 'react';
import { View, VStack } from 'native-base';
import ItemPlan from '../ItemPlan';

const ListPlan = () => {
  return (
    <View width='full'>
      <VStack mt='4' space='12px'>
        <ItemPlan />
        <ItemPlan />
        <ItemPlan />
      </VStack>
    </View>
  );
};

export default ListPlan;
