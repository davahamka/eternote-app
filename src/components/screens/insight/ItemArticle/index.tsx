import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Image, Pressable, Text } from 'native-base';
import React from 'react';

type Props = {
  text?: string;
  imgSrc?: string;
};

const ItemArticle = ({}: Props) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('DetailArticle', {
          key: '1',
          id: '1',
          title: 'Understanding Javascript to know for React implementation',
        });
      }}>
      <HStack space={4}>
        <Box width='30%'>
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            width='full'
            height='96px'
            borderRadius='12px'
            alt='image-article'
          />
        </Box>
        <Box width='70%'>
          <Text>Understanding Javascript to know for React implementation</Text>
          <Text fontSize='xs'>5 mins read</Text>
        </Box>
      </HStack>
    </Pressable>
  );
};

export default ItemArticle;
