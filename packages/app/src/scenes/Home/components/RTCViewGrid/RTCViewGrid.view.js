import React from 'react';
import { View, Text } from 'react-native';
import { RTCView } from 'react-native-connectycube';

import { styles } from './RTCViewGrid.style';

export const RTCViewGrid = ({ streams }) => {
  const renderRTCView = (userId, stream) => stream ? (
    <RTCView
      objectFit="cover"
      style={styles.blackView}
      key={userId}
      streamURL={stream.toURL()}
    />
      ) : (
        <View style={styles.blackView}>
          <Text>Loading</Text>
        </View>
      );

  return (
    <View style={styles.viewContainer}>
      {streams.map(({ userId, stream }) => renderRTCView(userId, stream))}
    </View>);
};
