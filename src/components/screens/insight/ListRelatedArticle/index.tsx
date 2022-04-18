import React from 'react';
import { VStack } from 'native-base';
import ItemRelatedArticle from '../ItemRelatedArticle';

const ListRelatedArticle = () => {
  return (
    <VStack space={6} mt='16px'>
      <ItemRelatedArticle />
      <ItemRelatedArticle />
      <ItemRelatedArticle />
    </VStack>
  );
};

export default ListRelatedArticle;
