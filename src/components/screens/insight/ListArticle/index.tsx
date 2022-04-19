import React from 'react';
import { VStack } from 'native-base';
import ItemArticle from '../ItemArticle';
import { DataArticle } from '../../../../modules/articles/entities';

type Props = {
  articles: DataArticle[];
};

const ListArticle = ({ articles }: Props) => {
  return (
    <VStack space={8} marginTop={6}>
      {articles.map(item => (
        <ItemArticle key={item.id} data={item} />
      ))}
    </VStack>
  );
};

export default ListArticle;
