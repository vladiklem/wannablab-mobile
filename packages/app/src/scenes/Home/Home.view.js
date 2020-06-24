import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Toolbar from '../../components/Toolbar/Toolbar.view';
import styles from './Home.styles';

const HomeView = props => {
  const {
    id,
    login,
    provider,
    userInterests,
    targetUserId,
    isIncomingCall,
    initRemoteStreams,
    resetState,
    setLocalStream,
    setTargetUserId,
    onPressAccept,
    onPressReject,
    onLogout,
  } = props;

  return (
    <SafeAreaView style={styles.f1}>
      <Button label="Logout" onPress={onLogout} />
      <Text>{`Your profile id: ${id}`}</Text>
      <Text>{`Your profile login: ${login}`}</Text>
      <Text>{`User interests: ${userInterests.toString()}`}</Text>
      <Text>Enter id of user that you want to call</Text>
      <Input value={targetUserId} onChangeText={setTargetUserId} />
      {isIncomingCall && (
        <>
          <Button label="Accept Incoming Call" onPress={onPressAccept} />
          <Button label="Reject Incoming Call" onPress={onPressReject} />
        </>
      )}
      <Toolbar
        opponentId={targetUserId}
        initRemoteStreams={initRemoteStreams}
        setLocalStream={setLocalStream}
        resetState={resetState}
      />
    </SafeAreaView>
  );
};

export default HomeView;
