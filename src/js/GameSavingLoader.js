/* eslint-disable no-unused-vars, consistent-return */
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const a = await read();
      const b = await json(a);
      const c = JSON.parse(b);
      return c;
    } catch (error) {
      return error;
    }
  }
}
