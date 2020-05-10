import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '../../store/interests/actions';
import { updateUser } from '../../store/user/actions';
import { routeName as HOME } from '../Home/Home.container';

import InterestsView from './Interests.view';

export const routeName = 'INTERESTS';

const Interests = ({ navigation }) => {
  const dispatch = useDispatch();
  const { interests } = useSelector(state => state.interests);
  const [userInterests, setUserInterests] = useState([]);

  useEffect(() => {
    dispatch(get());
  }, []);

  useEffect(() => {
    setUserInterests(interests);
  }, [interests]);

  const openHome = () => navigation.navigate(HOME);

  const onSave = useCallback(() => {
    const userInterestsActiveNames = userInterests
      .filter(interest => interest.active)
      .map(interest => interest.name);

    const updatedUserProfile = {
      tag_list: userInterestsActiveNames.toString(),
    };

    dispatch(updateUser(updatedUserProfile));

    openHome();
  }, [userInterests]);

  const onSelect = useCallback(
    (id, selected) => {
      const updatedInterests = userInterests.map(interest => {
        if (interest.id === id) {
          interest.active = !selected;
        }
        return interest;
      });

      setUserInterests(updatedInterests);
    },
    [userInterests],
  );

  return (
    <InterestsView
      userInterests={userInterests}
      onSelect={onSelect}
      onSave={onSave}
    />
  );
};

export default Interests;
