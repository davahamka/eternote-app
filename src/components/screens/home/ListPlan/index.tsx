import React from 'react';
import { View, VStack } from 'native-base';
import ItemPlan from '../ItemPlan';

type Props = {
  data: any;
};

const ListPlan = ({ data }: Props) => {
  return (
    <View width='full'>
      <VStack mt='4' space='12px'>
        {data.map(item => (
          <ItemPlan data={item} />
        ))}
      </VStack>
    </View>
  );
};

export default ListPlan;
