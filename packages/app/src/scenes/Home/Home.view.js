import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import styles from './Home.styles';

const HomeView = props => {
  const {
    id,
    login,
    userInterests,
    targetUserId,
    setTargetUserId,
    isIncomingCall,
    onPressAccept,
    onPressReject,
    isActiveCall,
  } = props;

  return (
    <SafeAreaView style={styles.f1}>
      <View>
        <Text>{`Your profile id: ${id}`}</Text>
        <Text>{`Your profile login: ${login}`}</Text>
        <Text>{`User interests: ${userInterests.toString()}`}</Text>
        <Text>Enter id of user that you want to call</Text>
        <Input value={targetUserId} onChangeText={setTargetUserId} />
        <Button label="Start Call" onPress={() => {}} />
        {isIncomingCall && (
          <>
            <Button label="Accept Incoming Call" onPress={onPressAccept} />
            <Button label="Reject Incoming Call" onPress={onPressReject} />
          </>
        )}
        {isActiveCall && <Button label="End call" onPress={() => {}} />}
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
