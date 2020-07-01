import React from 'react';
import { View } from 'react-native';
import FilterItem from '../FilterItem/FilterItem';

import styles from './FilterMenu.styles';

const FilterMenu = () => {
  return (
    <View style={styles.container}>
      <FilterItem status="active" name="relevant" />
      <FilterItem name="theme" />
      <FilterItem name="nearest" />
    </View>
  );
};

export default FilterMenu;
