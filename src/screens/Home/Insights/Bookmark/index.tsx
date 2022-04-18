import React from 'react';
import { Text } from 'native-base';
import ListBookmark from '../../../../components/screens/insight/ListBookmark';

const Bookmark = () => {
  return (
    <>
      <Text fontSize='3xl' fontWeight='bold' marginTop={'18px'}>
        Bookmark
      </Text>
      <ListBookmark />
    </>
  );
};

export default Bookmark;
