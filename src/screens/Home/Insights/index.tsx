import { HStack, ScrollView, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import Pill from '../../../components/ui/Pill';
import { useAppDispatch } from '../../../hooks';
import { fetchArticles } from '../../../modules/articles/articlesSlice';

import Article from './Article';
import Bookmark from './Bookmark';
import Discover from './Discover';
import Event from './Event';
import Recent from './Recent';

const InsightsScreen = () => {
  const [option, setOption] = useState('Discover');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  return (
    <ScrollView>
      <View paddingX='16px' bgColor='white' paddingBottom='48px'>
        <ScrollView horizontal={true}>
          <HStack marginTop='16px' space='12px'>
            {optionsData.map(item => (
              <Pill
                key={item}
                active={item === option}
                onPress={() => {
                  setOption(item);
                }}>
                {item}
              </Pill>
            ))}
          </HStack>
        </ScrollView>

        {option === 'Discover' ? (
          <Discover />
        ) : option === 'Article' ? (
          <Article />
        ) : option === 'Event' ? (
          <Event />
        ) : option === 'Bookmark' ? (
          <Bookmark />
        ) : option === 'Recent' ? (
          <Recent />
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  );
};

const optionsData = ['Discover', 'Article', 'Event', 'Bookmark', 'Recent'];

export default InsightsScreen;
