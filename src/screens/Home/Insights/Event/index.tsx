import React from 'react';
import { Text } from 'native-base';
import ListMenuEvent from '../../../../components/screens/insight/ListMenuEvent';
import ListEvent from '../../../../components/screens/insight/ListEvent';

const Event = () => {
  return (
    <>
      <Text fontSize='3xl' fontWeight='bold' marginTop={'18px'}>
        Event
      </Text>

      <ListMenuEvent />

      <ListEvent />
    </>
  );
};

export default Event;
