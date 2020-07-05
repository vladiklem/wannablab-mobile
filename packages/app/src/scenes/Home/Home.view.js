import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import FBLoginButton from '../../components/FBLoginButton/FBLoginButton';
import Toolbar from '../../components/Toolbar/Toolbar.view';
import { RTCViewGrid } from './components/RTCViewGrid/RTCViewGrid.view';
import styles from './Home.styles';

const HomeView = props => {
  const {
    id,
    login,
    provider,
    userInterests,
    opponentId,
    isIncomingCall,
    isActiveCall,
    streams,
    setOpponentId,
    startCall,
    stopCall,
    onPressAccept,
    onPressReject,
    onLogout,
  } = props;

  return (
    <SafeAreaView style={styles.f1}>
      {provider ? (
        <FBLoginButton onFBLogout={onLogout} />
      ) : (
        <Button label="Logout" onPress={onLogout} />
      )}
      <Text>{`Your profile id: ${id}`}</Text>
      <Text>{`Your profile login: ${login}`}</Text>
      <Text>{`User interests: ${userInterests.toString()}`}</Text>
      <Text>Enter id of user that you want to call</Text>
      <Input value={opponentId} onChangeText={setOpponentId} />
      {isIncomingCall && (
        <>
          <Button label="Accept Incoming Call" onPress={onPressAccept} />
          <Button label="Reject Incoming Call" onPress={onPressReject} />
        </>
      )}
      <RTCViewGrid streams={streams} />
      <Toolbar
        startCall={startCall}
        stopCall={stopCall}
        isActiveCall={isActiveCall}
      />
    </SafeAreaView>
  );
};

export default HomeView;
