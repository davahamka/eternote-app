import React from 'react';
import { VStack } from 'native-base';
import ItemArticle from '../ItemArticle';

const ListArticle = () => {
  return (
    <VStack space={8} marginTop={6}>
      <ItemArticle />
      <ItemArticle />
      <ItemArticle />
      <ItemArticle />
      <ItemArticle />
      <ItemArticle />
    </VStack>
  );
};

export default ListArticle;
