import { AsyncStorage } from 'react-native';

export class Storage {

  static async setItem(item, value) {
    try {
      await AsyncStorage.setItem(item, value);
    } catch (error) {
      console.log(error, 'STORAGE_SET_ITEM');
    }
  }

  static async getItem(item) {
    try {
      const value = await AsyncStorage.getItem(item);
      return value ? value : null;
    } catch (error) {
      console.log(error, 'STORAGE_GET_ITEM');
      return null;
    }
  }
}