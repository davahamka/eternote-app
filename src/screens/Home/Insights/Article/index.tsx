import React from 'react';
import { Text } from 'native-base';
import ListArticle from '../../../../components/screens/insight/ListArticle';

const Article = () => {
  return (
    <>
      <Text fontSize='3xl' fontWeight='bold' marginTop={'18px'}>
        Article
      </Text>

      <ListArticle />
    </>
  );
};

export default Article;
