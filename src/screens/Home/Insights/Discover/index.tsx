import { Box, Image, Skeleton, Text } from 'native-base';
import React from 'react';
import ListArticle from '../../../../components/screens/insight/ListArticle';
import ListEvent from '../../../../components/screens/insight/ListEvent';
import ListMenuEvent from '../../../../components/screens/insight/ListMenuEvent';
import { useAppSelector } from '../../../../hooks';
import { CMS_URL } from '../../../../utils/constants';

const Discover = () => {
  const { articles, status } = useAppSelector(state => state.articles);

  const anotherArticles = articles.slice(1, articles.length - 1);

  return (
    <>
      <Text fontSize='3xl' fontWeight='bold' marginTop={'18px'}>
        Article
      </Text>

      {status === 'pending' ? (
        <Box mt='8px'>
          <Skeleton h='120px' />
          <Skeleton.Text />
        </Box>
      ) : status === 'succeeded' ? (
        <Box marginTop='8px'>
          <Image
            source={{
              uri:
                CMS_URL + articles[0].attributes.thumbnail.data.attributes.url,
            }}
            width='full'
            height='120px'
            borderRadius='xl'
            alt='Alternate Text'
          />
          <Text fontSize='lg' fontWeight='medium'>
            {articles[0].attributes.title}
          </Text>
        </Box>
      ) : (
        <Box mt='8px'>
          <Box h='120px' />
        </Box>
      )}

      <ListArticle anotherArticles={anotherArticles} />

      <Text
        fontSize='3xl'
        fontWeight='bold'
        marginTop={'18px'}
        marginBottom='8px'>
        Event
      </Text>

      <ListMenuEvent />

      <ListEvent />
    </>
  );
};

export default Discover;
