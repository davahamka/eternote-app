import { View } from 'native-base';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchArticles } from '../../../modules/articles/articlesSlice';

const InsightsScreen = () => {
  const { articles, status } = useAppSelector(state => state.articles);
  const dispatch = useAppDispatch();

  console.log(status);
  console.log('articles ', articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  return <View></View>;
};

export default InsightsScreen;
