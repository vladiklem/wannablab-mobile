import React from 'react';
import { View, ScrollView } from 'react-native';

import FilterMenu from './components/FilterMenu/FilterMenu';
import EventCard from './components/EventCard/EventCard';

import styles from './EventList.styles';

const EventListView = () => {
  return (
    <View style={styles.container}>
      <FilterMenu />
      <ScrollView>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </ScrollView>
    </View>
  );
};

export default EventListView;
