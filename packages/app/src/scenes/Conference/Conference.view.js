import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {RTCView} from 'react-native-connectycube';

const styles = StyleSheet.create({
    rtcWindow: {
        flex: 1,
    },
});

const renderRTCWindow = ({userId, stream}) => (
    <View>
      {stream ? (
        <RTCView
          objectFit="cover"
          style={styles.rtcWindow.window}
          key={userId}
          streamURL={stream.toURL()}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
);

const Conference = ({ streams }) => {
    return (
      <View>
        {streams.map(stream => (
          renderRTCWindow(stream)
        ))}
      </View>
    );
};

export default Conference;
