import ConnectyCube from 'react-native-connectycube';

export default class CallService {
  static MEDIA_OPTIONS = { audio: true, video: { facingMode: 'user' } };

  _session = null;
  mediaDevices = [];

  acceptCall = session => {
    this._session = session;
    this.setMediaDevices();

    return this._session
      .getUserMedia(CallService.MEDIA_OPTIONS)
      .then(stream => {
        this._session.accept({});

        return stream;
      });
  };

  setMediaDevices = () =>
    ConnectyCube.videochat.getMediaDevices().then(mediaDevices => {
      this.mediaDevices = mediaDevices;
    });

  startCall = ids => {
    const type = ConnectyCube.videochat.CallType.VIDEO;
    const options = {};

    this._session = ConnectyCube.videochat.createNewSession(ids, type, options);
    this.setMediaDevices();

    console.info('this.mediaDevices: ', this.mediaDevices);

    console.info('MEDIA_OPTIONS: ', CallService.MEDIA_OPTIONS);
    console.info('this._session: ', this._session);

    return this._session
      .getUserMedia(CallService.MEDIA_OPTIONS)
      .then(localStream => {
        console.info('localStream: ', localStream);

        this._session.call({});

        return localStream;
      })
      .catch(error => console.log(error));
  };

  stopCall = () => {
    if (this._session) {
      this._session.stop({});
      ConnectyCube.videochat.clearSession(this._session.ID);
      this._session = null;
      this.mediaDevices = [];
    }
  };

  rejectCall = (session, extension) => session.reject(extension);

  handleOnUserNotAnswerListener = userId =>
    new Promise((resolve, reject) => {
      if (!this._session) {
        reject();
      } else {
        console.log(`${userId} did not answer`);
        resolve();
      }
    });

  handleOnCallListener = session =>
    new Promise((resolve, reject) => {
      if (session.initiatorID === session.currentUserId) {
        reject();
      }

      if (this._session) {
        this.rejectCall(session, { busy: true });
        reject();
      }

      resolve();
    });

  handleOnAcceptCallListener = (session, userId) =>
    new Promise((resolve, reject) => {
      if (userId === session.currentUserId) {
        this._session = null;

        reject();
      } else {
        console.log(`${userId} has accepted the call`);
        resolve();
      }
    });

  handleOnRejectCallListener = (session, userId, extension = {}) =>
    new Promise((resolve, reject) => {
      if (userId === session.currentUserID) {
        this._session = null;

        reject();
      } else {
        console.log(
          extension.busy ? `${userId} busy` : `${userId} rejected call`
        );

        resolve();
      }
    });

  handleOnStopCallListener = (userId, isInitiator) =>
    new Promise((resolve, reject) => {
      if (!this._session) {
        reject();
      } else {
        console.log(
          `${userId} has ${isInitiator ? 'stopped' : 'left'} the call`
        );
        resolve();
      }
    });

  handleOnRemoteStreamListener = () =>
    new Promise((resolve, reject) => {
      if (!this._session) {
        reject();
      } else {
        resolve();
      }
    });
}
