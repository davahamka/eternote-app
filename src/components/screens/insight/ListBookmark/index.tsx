import React from 'react';
import { Box, HStack } from 'native-base';
import ItemBookmark from '../ItemBookmark';

const ListBookmark = () => {
  return (
    <HStack display='flex' flexDirection='row' flexWrap='wrap'>
      <ItemBookmark />
      <Box width='2%' />
      <ItemBookmark />
      <ItemBookmark />
      <Box width='2%' />
      <ItemBookmark />
    </HStack>
  );
};

export default ListBookmark;
