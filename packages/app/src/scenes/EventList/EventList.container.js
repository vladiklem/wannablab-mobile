/* eslint-disable import/no-cycle */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import EventListView from './EventList.view';

export const routeName = 'EVENTLIST';

const EventList = props => {
  return <EventListView />;
};

export default EventList;
