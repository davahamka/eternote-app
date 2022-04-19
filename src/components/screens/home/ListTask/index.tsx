import React, { useEffect } from 'react';
import { HStack, ScrollView } from 'native-base';
import ItemTask from '../ItemTask';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { fetchTasks } from '../../../../modules/tasks/tasksSlice';
import { RefreshControl } from 'react-native';

const ListTask = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const { status, tasks } = useAppSelector(state => state.task);
  const dispatch = useAppDispatch();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchTasks('d')).then(() => setRefreshing(false));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTasks('d'));
  }, [dispatch]);

  console.log(tasks);
  return (
    <ScrollView
      horizontal={true}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <HStack space='24px'>
        {status === 'pending' || status === 'idle' ? (
          <></>
        ) : status === 'succeeded' ? (
          tasks.map(item => <ItemTask key={item.id} data={item} />)
        ) : (
          <></>
        )}
      </HStack>
    </ScrollView>
  );
};

export default ListTask;
