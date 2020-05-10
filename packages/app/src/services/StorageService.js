import AsyncStorage from '@react-native-community/async-storage';

class StorageService {
  getItem = async key => {
    const item = await AsyncStorage.getItem(key);

    return item;
  };

  setItem = async (key, item) => {
    await AsyncStorage.setItem(key, item);
  };

  getJSON = async key => {
    const item = await this.getItem(key);

    return JSON.parse(item);
  };

  setJSON = async (key, obj) => {
    const item = JSON.stringify(obj);

    await this.setItem(key, item);
  };
}

export default StorageService;
