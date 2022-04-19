import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import { DataTask } from '../../../../modules/tasks/entities';
import { colorLevel } from '../../../../utils/color';
import { CMS_URL } from '../../../../utils/constants';

const TaskSheet = () => {
  const [data, setData] = useState<DataTask | null>(null);
  const navigation = useNavigation<any>();

  return (
    <ActionSheet
      id='task_info'
      onBeforeShow={(props: DataTask | unknown) => {
        setData(props as DataTask);
      }}
      gestureEnabled={true}
      headerAlwaysVisible={true}>
      <ScrollView height='99%' nestedScrollEnabled={true}>
        <Image
          source={{
            uri: CMS_URL + data?.attributes.image.data.attributes.url,
          }}
          mt='2'
          width='full'
          height='200px'
          alt='img-article'
        />
        <Box paddingX='18px' mt='20px'>
          <Text fontSize='xl' color='neutral.black' fontWeight='bold'>
            {data?.attributes.title}
          </Text>
          <Box>
            <Box
              mt='2'
              mb='6'
              display='flex'
              flexDir='row'
              alignItems='center'
              justifyContent='space-between'>
              <Box
                bg={
                  colorLevel(data?.attributes.category.toLowerCase() as string)
                    ?.background
                }
                px='3'
                rounded='lg'
                py='1'>
                <Text
                  textAlign={'center'}
                  fontSize='sm'
                  color={
                    colorLevel(
                      data?.attributes.category.toLowerCase() as string,
                    )?.color
                  }>
                  {data?.attributes.category}
                </Text>
              </Box>
              <HStack space={1}>
                <Image
                  source={require('../../../../assets/ic_coin.png')}
                  size='16px'
                  alt='info'
                />
                <Text fontSize='xs'>{data?.attributes.point} points</Text>
              </HStack>
            </Box>
            <Text
              fontSize='lg'
              color='neutral.characoal'
              fontWeight='semibold'
              mb='2px'>
              Description
            </Text>
            <Text fontSize='sm' color='neutral.metal'>
              {data?.attributes.description}
            </Text>

            <Text
              fontSize='lg'
              color='neutral.characoal'
              fontWeight='semibold'
              mb='2px'
              mt='10px'>
              Discover More
            </Text>
            <VStack ml='10px'>
              {data?.attributes.articles.data.map(item => (
                <HStack alignItems='center' key={item.id} space={2}>
                  <Box rounded='3xl' h='10px' width='10px' bg='gray.800' />
                  <Link
                    onPress={() => {
                      SheetManager.hide('task_info');
                      navigation.navigate('DetailArticle', {
                        key: item.id,
                        id: item.id,
                        title: item.attributes.title,
                      });
                    }}>
                    {item.attributes.title}
                  </Link>
                </HStack>
              ))}
            </VStack>

            <Button
              bg='neutral.characoal'
              mt='40px'
              mb='30px'
              rounded='2xl'
              py='12px'>
              <Text fontWeight='semibold' color='white'>
                Take this task
              </Text>
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </ActionSheet>
  );
};

export default TaskSheet;
