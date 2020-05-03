import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RTCView, ConnectyCube } from 'react-native-connectycube';

import {AuthService, CallService} from '../../services';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './Home.styles';

export const routeName = 'HOME';
const initialProfile = {
  id: -1,
  name: 'unknown',
  login: 'unknown'
};

const Home = props => {
  const { route } = props;
  const [userProfile, setUserProfile] = useState(initialProfile);
  const [targetUserId, setTargetUserId] = useState('');
  const [isIncomingCall, setIsIncomingCall] = useState(false);
  const [isActiveCall, setIsActiveCall] = useState(false);

  useEffect(() => {
    const { user } = route.params;

    if (user) {
      setUserProfile(user);
      initListeners();
    }

    return () => {
      AuthService.logout();
    }
  });

  const initListeners = () => {
    ConnectyCube.videochat.onCallListener = onCallListener;
    ConnectyCube.videochat.onAcceptCallListener = onAcceptCallListener;
  }

  const onCallListener = session => {
    CallService.handleOnCallListener(session)
      .then(() => setIsIncomingCall(true))
      .catch(e => console.error(e))
  };

  const onAcceptCallListener = (session, userId, extension) => {
    CallService.handleOnAcceptCallListener(session, userId, extension)
      .then(() => setIsActiveCall(true))
      .catch(e => {
        setIsIncomingCall(false);
        console.error(e);
      })
  }

  const renderRTCView = (id, stream) => (
    <RTCView
      objectFir="cover"
      style={{flex: 1}}
      key={id}
      streamURL={stream.toURL()}
      />
  );

  return (
    <SafeAreaView style={styles.f1}>
      <View>
        <Text>{`Your profile id: ${userProfile.id}`}</Text>
        <Text>{`Your profile login: ${userProfile.login}`}</Text>
        <Text>Enter id of user that you want to call</Text>
        <Input
          value={targetUserId}
          onChangeText={setTargetUserId}
        />
        <Button label="Start Call" onPress={() => {}}/>
        {isIncomingCall && (
          <Button
            label="Accept Incoming Call"
            onPress={() => {}}
          />
        )}
        {isActiveCall && (
          renderRTCView()
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
