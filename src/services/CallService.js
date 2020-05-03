import ConnectyCube from 'react-native-connectycube';

export default class CallService {
  static MEDIA_OPTIONS = { audio: true, video: { facingMode: 'user' } };

  _session = null;
  mediaDevices = [];

  startCall = id => {
    const type = ConnectyCube.videochat.CallType.VIDEO;
    const options = {};

    this._session = ConnectyCube.videochat.createNewSession([id], type, options);
    this.setMediaDevices();

    return this._session
      .getUserMedia(this.MEDIA_OPTIONS)
      .then(stream => {
        this._session.call({});

        return stream;
      });
  }

  stopCall = () => {
    if (this._session) {
      this._session.stop({});
      ConnectyCube.videochat.clearSession(this._session.ID);
      this._session = null;
      this.mediaDevices = [];
    }
  }

  handleOnCallListener = session => {
    return new Promeise((resolve, reject) => {
      if (session.initiatorID === session.currentUserId) {
        reject();
      }

      if (this._session) {
        reject();
      }

      resolve();
    });
  }

  handleOnAcceptCallListener = (session, userId) => {
    return new Promise((resolve, reject) => {
      if (userId === session.currentUserId) {
        this._session = null;

        reject();
      } else {
        resolve();
      }
    })
  }

  setMediaDevices = () => {
    return ConnectyCube.videochat.getMediaDevices().then(mediaDevices => {
      this.mediaDevices = mediaDevices;
    });
  }
};
