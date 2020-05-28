import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConnectyCube from 'react-native-connectycube';

import HomeView from './Home.view';
import { logout } from '../../store/user/actions';
import { AuthService, CallService } from '../../services';

export const routeName = 'HOME';

const Home = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);
  const [targetUserId, setTargetUserId] = useState('1417921');
  const [isIncomingCall, setIsIncomingCall] = useState(false);
  const [isActiveCall, setIsActiveCall] = useState(false);
  const [remoteStreams, setRemoteStreams] = useState([]);
  const [localStream, setLocalStream] = useState({});
  const [_session, _setSession] = useState(null);

  useEffect(() => {
    profile.userToken && initListeners();
  }, []);

  const onLogout = () => dispatch(logout());

  const showIncomingCall = useCallback(session => {
    _setSession(session);
    setIsIncomingCall(true);
  }, [_setSession, setIsIncomingCall]);

  const hideIncomingCall = useCallback(
    session => {
      _setSession(null);
      setIsIncomingCall(false);
    },
    [_setSession, setIsIncomingCall]
  );

  const resetState = useCallback(() => {
    setLocalStream({});
    setRemoteStreams([]);
    setIsActiveCall(false);
  }, [setLocalStream, setRemoteStreams, setIsActiveCall]);

  const initRemoteStreams = useCallback(
    opponentsIds => {
      const emptyStreams = opponentsIds.map(userId => ({
        userId,
        stream: null,
      }));

      setRemoteStreams(emptyStreams);
    },
    [setRemoteStreams]
  );

  const removeRemoteStream = userId => {
    setRemoteStreams(remoteStreams =>
      remoteStreams.filter(item => item.userId !== userId)
    );
  };

  const updateRemoteStream = useCallback(
    (userId, stream) => {
      setRemoteStreams(remoteStreams => {
        const updatedRemoteStreams = remoteStreams.map(item =>
          item.userId === userId ? { userId, stream } : { ...item }
        );

        return { remoteStreams: updatedRemoteStreams };
      });
    },
    [setRemoteStreams]
  );

  const onCallListener = useCallback(
    (session, extension) => {
      CallService.handleOnCallListener(session)
        .then(() => showIncomingCall(session))
        .catch(e => {
          console.error(e);
          hideIncomingCall();
        });
    },
    [showIncomingCall, hideIncomingCall]
  );

  const onAcceptCallListener = (session, userId, extension) => {
    CallService.handleOnAcceptCallListener(session, userId, extension)
      .then(() => setIsActiveCall(true))
      .catch(e => {
        setIsIncomingCall(false);
        console.error(e);
      });
  };

  const onRejectCallListener = (session, userId, extension) => {
    CallService.handleOnRejectCallListener(session, userId, extension)
      .then(() => removeRemoteStream(userId))
      .catch(e => {
        console.error(e);
        setIsIncomingCall(false);
      });
  };

  const onStopCallListener = (session, userId, extension) => {
    const isStoppedByInitiator = session.initiatorID === userId;

    CallService.handleOnStopCallListener(userId, isStoppedByInitiator)
      .then(() => {
        if (isStoppedByInitiator) {
          resetState();
        } else {
          removeRemoteStream(userId);
        }
      })
      .catch(e => {
        console.error(e);
        // setIsIncomingCall(false);
      });
  };

  const onUserNotAnswerListener = (session, userId) => {
    CallService.handleOnUserNotAnswerListener(userId)
      .then(() => removeRemoteStream(userId))
      .catch(e => {
        console.error(e);
      });
  };

  const onRemoteStreamListener = (session, userId, stream) => {
    CallService.handleOnRemoteStreamListener(userId)
      .then(() => {
        updateRemoteStream(userId, stream);
        // setIsIncomingCall()
      })
      .catch(e => {
        console.error(e);
      });
  };

  const initListeners = () => {
    ConnectyCube.videochat.onCallListener = onCallListener;
    ConnectyCube.videochat.onAcceptCallListener = onAcceptCallListener;
    ConnectyCube.videochat.onRejectCallListener = onRejectCallListener;
    ConnectyCube.videochat.onStopCallListener = onStopCallListener;
    ConnectyCube.videochat.onUserNotAnswerListener = onUserNotAnswerListener;
    ConnectyCube.videochat.onRemoteStreamListener = onRemoteStreamListener;
  };

  const onPressAccept = useCallback(() => {
    CallService.acceptCall(_session).then(stream => {
      const { opponentsIDs, initiatorID, currentUserID } = _session;
      const opponentsIds = [initiatorID, ...opponentsIDs].filter(
        userId => currentUserID !== userId
      );

      initRemoteStreams(opponentsIds);
      setLocalStream(stream);
      hideIncomingCall();
    });
  }, [_session, setLocalStream, initRemoteStreams]);

  const onPressReject = useCallback(() => {
    CallService.rejectCall(_session);
    hideIncomingCall();
  });

  const streams = [localStream, ...remoteStreams];

  return (
    <HomeView
      id={profile.id}
      login={profile.login}
      provider={profile.provider}
      userInterests={profile.interests || ''}
      targetUserId={targetUserId}
      streams={streams}
      isActiveCall={isActiveCall}
      isIncomingCall={isIncomingCall}
      initRemoteStreams={initRemoteStreams}
      resetState={resetState}
      setLocalStream={setLocalStream}
      setTargetUserId={setTargetUserId}
      onPressAccept={onPressAccept}
      onPressReject={onPressReject}
      onLogout={onLogout}
    />
  );
};

export default Home;
