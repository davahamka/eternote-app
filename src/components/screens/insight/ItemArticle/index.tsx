import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Image, Pressable, Text } from 'native-base';
import React from 'react';
import { DataArticle } from '../../../../modules/articles/entities';
import { CMS_URL } from '../../../../utils/constants';

type Props = {
  data: DataArticle;
};

const ItemArticle = ({ data }: Props) => {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('DetailArticle', {
          key: data.id,
          id: data.id,
          title: data.attributes.title,
        });
      }}>
      <HStack space={4}>
        <Box width='30%'>
          <Image
            source={{
              uri: CMS_URL + data.attributes.thumbnail.data.attributes.url,
            }}
            width='full'
            height='96px'
            borderRadius='12px'
            alt='img-article'
          />
        </Box>
        <Box width='70%'>
          <Text>{data.attributes.title}</Text>
          <Text fontSize='xs'>5 mins read</Text>
        </Box>
      </HStack>
    </Pressable>
  );
};

export default ItemArticle;
