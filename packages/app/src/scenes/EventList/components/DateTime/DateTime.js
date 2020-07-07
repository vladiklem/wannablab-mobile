import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './DateTime.styles';

const DateTime = ({ date, time, isNow }) => {
  const timeStyle = time ? styles.timeNumber : styles.timeNow;

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        {isNow ? (
          <Image source={require('../../../../assets/icons/fire.png')} />
        ) : (
          <Text>{date}</Text>
        )}
      </View>
      {isNow ? (
        <Text style={timeStyle}>now</Text>
      ) : (
        <Text style={timeStyle}>{time}</Text>
      )}
    </View>
  );
};

export default DateTime;
