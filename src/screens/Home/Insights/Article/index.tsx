import React from 'react';
import { Text } from 'native-base';
import ListArticle from '../../../../components/screens/insight/ListArticle';
import { useAppSelector } from '../../../../hooks';

const Article = () => {
  const { articles } = useAppSelector(state => state.articles);
  return (
    <>
      <Text fontSize='3xl' fontWeight='bold' marginTop={'18px'}>
        Article
      </Text>

      <ListArticle articles={articles} />
    </>
  );
};

export default Article;
