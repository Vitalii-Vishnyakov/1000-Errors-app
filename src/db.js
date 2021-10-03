import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('errors.db');
export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS ers (id INTEGER PRIMARY KEY NOT NULL, time TEXT NOT NULL, typeOfError TEXT NOT NULL ,moreOfError TEXT NOT NULL ,resultOfError TEXT , howToFix TEXT)',
          [],
          resolve,
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  }
  static addZeroItem() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO ers (time,typeOfError,moreOfError,resultOfError , howToFix ) VALUES (?,?,?,?,?)`,
          ['00', '00', '00', '00', '00'],
          (_, result) => resolve(result.insertId),
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  }
  static getErrors() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM ers',
          [],
          (_, result) => resolve(result.rows._array),
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  }
  static createError(newError) {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO ers (time,typeOfError,moreOfError,resultOfError , howToFix ) VALUES (?,?,?,?,?)`,
          [
            newError.time.toString(),
            newError.typeOfError.toString(),
            newError.moreOfError.toString(),
            newError.resultOfError.toString(),
            newError.howToFix.toString(),
          ],
          (_, result) => resolve(result.insertId),
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  }
}
