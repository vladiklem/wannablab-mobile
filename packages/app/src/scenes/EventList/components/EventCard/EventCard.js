import React from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Button from '../../../../components/Button/Button';

import { validatePreviewDescription } from '../../../../utils/validation';

import DateTime from '../DateTime/DateTime';
import ActionDots from '../ActionDots/ActionDots';

import styles from './EventCard.styles';

const EventCard = ({ topic, description, isNow }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ActionDots />
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={['#2DCE89', '#48C686', '#049A8F']}
          style={styles.buttonWrapper}>
          <Button label="Join" />
        </LinearGradient>
        <View style={styles.leftContent}>
          <Image
            style={styles.avatar}
            source={require('../../../../assets/images/avatar.jpg')}
          />
          <DateTime isNow={isNow} />
        </View>
        <View>
          <Text style={styles.title}>{topic}</Text>
          <Text style={styles.description}>
            {validatePreviewDescription(description)}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EventCard;
