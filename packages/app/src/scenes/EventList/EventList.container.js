/* eslint-disable import/no-cycle */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEvents } from '../../store/events/actions';

import EventListView from './EventList.view';

export const routeName = 'EVENTLIST';

const EventList = () => {
  const dispatch = useDispatch();
  const { events } = useSelector(state => state.events);
  const { profile } = useSelector(state => state.user);
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    setEventList(events);
  }, [events]);

  return <EventListView events={eventList} />;
};

export default EventList;
