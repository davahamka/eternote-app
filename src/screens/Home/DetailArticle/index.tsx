import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  HStack,
  Image,
  ScrollView,
  Skeleton,
  Text,
} from 'native-base';
import { useRoute } from '@react-navigation/native';
import ListRelatedArticle from '../../../components/screens/insight/ListRelatedArticle';
import { FetchStatus } from '../../../utils/fetcher';
import articlesApi from '../../../modules/articles/api';
import { DataArticle } from '../../../modules/articles/entities';
import { CMS_URL } from '../../../utils/constants';

const DetailArticleScreen = () => {
  const route = useRoute<any>();
  const [data, setData] = useState<DataArticle | null>(null);
  const [status, setStatus] = useState<FetchStatus>('idle');

  useEffect(() => {
    async function getArticleById() {
      try {
        setStatus('pending');
        const resData = await articlesApi.getById(route.params.id);
        console.log(resData.data);
        setData(resData.data);
        setStatus('succeeded');
      } catch (err) {
        setStatus('failed');
      }
    }

    getArticleById();
  }, [route.params.id]);

  console.log(data?.attributes.thumbnail.data.attributes.url);

  return (
    <ScrollView>
      <Box>
        {status === 'pending' ? (
          <></>
        ) : status === 'succeeded' ? (
          <Image
            source={{
              uri: CMS_URL + data?.attributes.thumbnail.data.attributes.url,
            }}
            alt='dw'
            width='full'
            height='190px'
          />
        ) : (
          <></>
        )}
      </Box>
      <Box padding='18px'>
        {status === 'pending' ? (
          <Skeleton.Text />
        ) : status === 'succeeded' ? (
          <Text fontSize='lg' fontWeight='medium' color='neutral.richblack'>
            {data?.attributes.title}
          </Text>
        ) : (
          ''
        )}

        <HStack mt='10px' space={8}>
          <HStack>
            <Text fontSize='xs' color='black2'>
              5 mins read
            </Text>
          </HStack>
          <HStack>
            <Text fontSize='xs' color='black2'>
              April 09, 2022
            </Text>
          </HStack>
        </HStack>

        <Box mt='4'>
          {status === 'pending' ? (
            <Skeleton.Text lines={10} />
          ) : status === 'succeeded' ? (
            <Text>{data?.attributes.content}</Text>
          ) : (
            <Skeleton.Text lines={10} />
          )}
        </Box>
      </Box>

      <Box padding='18px'>
        <Center>
          <Text fontWeight='semibold'>Share This Article</Text>
        </Center>
      </Box>

      <Box padding='18px'>
        <Center>
          <Text fontWeight='semibold' fontSize='2xl'>
            Related Article
          </Text>
        </Center>
        <ListRelatedArticle />
      </Box>
      <Text>{route.params.id}</Text>
    </ScrollView>
  );
};

export default DetailArticleScreen;
