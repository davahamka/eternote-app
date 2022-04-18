import React from 'react';
import { Box, HStack, Image, Pressable, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const ItemRelatedArticle = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => {
        console.log('first');
        navigation.push('DetailArticle', {
          id: '2',
          title: 'Understanding Javascript to know for React implementation',
        });
      }}>
      <HStack space='2%'>
        <Box width='74%'>
          <Text>Understanding Javascript to know for React implementation</Text>
          <Text fontSize='xs'>5 mins read</Text>
        </Box>
        <Box width='24%'>
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            width='full'
            height='86px'
            borderRadius='12px'
            alt='img'
          />
        </Box>
      </HStack>
    </Pressable>
  );
};

export default ItemRelatedArticle;
