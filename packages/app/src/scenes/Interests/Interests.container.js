import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../store/interests/actions';

import InterestsView from './Interests.view';

export const routeName = 'INTERESTS';

const Interests = props => {
  const dispatch = useDispatch();
  const { interests } = useSelector(state => state.interests);
  const [userInterests, setUserInterests] = useState([]);

  useEffect(() => {
    dispatch(get());
  }, []);

  useEffect(() => {
    setUserInterests(interests);
  }, [interests]);

  const onSave = userInterests => {
    const userInterestsActiveNames = userInterests
      .filter(interest => interest.active)
      .map(interest => interest.name);

    console.log(userInterestsActiveNames);
  };

  const onSelect = (id, selected) => {
    const updatedInterests = userInterests.map(interest => {
      if (interest.id === id) {
        interest.active = !selected;
      }
      return interest;
    });
    setUserInterests(updatedInterests);
  };

  return (
    <InterestsView
      userInterests={userInterests}
      onSelect={onSelect}
      onSave={onSave}
    />
  );
};

export default Interests;
