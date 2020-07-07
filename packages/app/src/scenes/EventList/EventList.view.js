import React from 'react';
import { View, FlatList } from 'react-native';

import FilterMenu from './components/FilterMenu/FilterMenu';
import EventCard from './components/EventCard/EventCard';

import styles from './EventList.styles';

const EventListView = ({ events }) => {
  return (
    <View style={styles.container}>
      <FilterMenu />
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <EventCard
            topic={item.topic}
            description={item.description}
            isNow={item.isNow}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default EventListView;
