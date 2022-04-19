/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Text, View } from 'native-base';
import { useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import ListPlan from './screens/home/ListPlan';

const data = [
  { title: 'Attend webinar', emoji: '💻' },
  { title: "Fix Modric' computer", emoji: '🖥' },
  { title: 'Go to buchery', emoji: '🍖' },
];

const FirstRoute = () => (
  <View height='100%'>
    <ListPlan data={data} />
  </View>
);

const SecondRoute = () => (
  <View>
    <Text>s</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Tab = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Today' },
    { key: 'second', title: 'Upcoming' },
  ]);

  return (
    <View height='1000px'>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default Tab;
