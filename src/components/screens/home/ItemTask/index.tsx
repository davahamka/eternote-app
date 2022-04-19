import React from 'react';
import { Box, Button, HStack, Image, Text } from 'native-base';
import { DataTask } from '../../../../modules/tasks/entities';
import { useDispatch } from 'react-redux';
import { openTask } from '../../../../modules/homeSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  data: DataTask;
};

const ItemTask = ({ data }: Props) => {
  const dispatch = useDispatch();

  return (
    <Box
      width='270px'
      borderColor='neutral.gainsboro'
      borderWidth='1px'
      height='120px'
      padding='12px'
      borderRadius='xl'
      display='flex'
      justifyContent='space-between'>
      <Box width='84%'>
        <Text fontSize='xs' fontWeight='semibold'>
          {data.attributes.title}
        </Text>
      </Box>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'>
        <HStack space={1}>
          <Image
            source={require('../../../../assets/ic_coin.png')}
            size='16px'
            alt='info'
          />
          <Text fontSize='xs'>{data.attributes.point} points</Text>
        </HStack>
        <Button
          bg='#1CCC98'
          width='100px'
          alignItems='center'
          leftIcon={<Icon name='plus-circle' color='white' />}
          onPress={() => {
            dispatch(openTask(data));
          }}>
          <Text fontSize='xs' color='white'>
            Select
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default ItemTask;
