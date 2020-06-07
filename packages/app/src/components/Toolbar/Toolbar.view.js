import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';

import Button from '../Button/Button';
import { CallService } from '../../services';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Toolbar = props => {
  const {
    opponentId,
    isActiveCall,
    initRemoteStreams,
    setLocalStream,
    resetState,
  } = props;

  const startCall = async () => {
    if (opponentId) {
      initRemoteStreams([opponentId]);
      const stream = await CallService.startCall([+opponentId]);
      setLocalStream(stream);
    } else {
      Alert.alert('Enter opponent id');
    }
  };

  const stopCall = () => {
    CallService.stopCall();
    resetState();
  };

  return (
    <View style={styles.container}>
      <Button
        label={isActiveCall ? 'Stop' : 'Start'}
        onPress={isActiveCall ? stopCall : startCall}
      />
    </View>
  );
};

export default Toolbar;
