import { Box, Image, Text } from 'native-base';
import React from 'react';
import ListArticle from '../../../../components/screens/insight/ListArticle';
import ListEvent from '../../../../components/screens/insight/ListEvent';
import ListMenuEvent from '../../../../components/screens/insight/ListMenuEvent';

const Discover = () => {
  return (
    <>
      <Text fontSize='3xl' fontWeight='bold' marginTop={'18px'}>
        Article
      </Text>

      <Box marginTop='8px'>
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          width='full'
          height='120px'
          borderRadius='xl'
          alt='Alternate Text'
        />
        <Text fontSize='lg' fontWeight='medium'>
          Anies Baswedan Says Transportation Subsidy Rises by 180%
        </Text>
      </Box>

      <ListArticle />

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
