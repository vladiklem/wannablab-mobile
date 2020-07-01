import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './DateTime.styles';

const DateTime = ({ date, time }) => {
  const timeStyle = time ? styles.timeNumber : styles.timeNow;

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        {date ? (
          <Text>{date}</Text>
        ) : (
          <Image source={require('../../../../assets/icons/fire.png')} />
        )}
      </View>
      <Text style={timeStyle}>now</Text>
    </View>
  );
};

export default DateTime;
