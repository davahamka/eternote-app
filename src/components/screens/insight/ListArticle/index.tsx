import React from 'react';
import { VStack } from 'native-base';
import ItemArticle from '../ItemArticle';
import { DataArticle } from '../../../../modules/articles/entities';
import { useAppSelector } from '../../../../hooks';

type Props = {
  articles: DataArticle[];
};

const ListArticle = ({ articles }: Props) => {
  const { status } = useAppSelector(state => state.articles);
  return (
    <VStack space={8} marginTop={6}>
      {status === 'pending' ? (
        <></>
      ) : status === 'succeeded' ? (
        articles?.map(item => <ItemArticle key={item.id} data={item} />)
      ) : (
        <></>
      )}
    </VStack>
  );
};

export default ListArticle;
