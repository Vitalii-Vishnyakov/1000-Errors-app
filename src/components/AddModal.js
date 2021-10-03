import React, { useEffect, useState } from 'react';

import {
  Modal,
  View,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, TextInput } from 'react-native';
import { addError, loadErrors } from '../redux/action';

export const AddModal = ({ visible, hideModal }) => {
  const dispatch = useDispatch();
  const [inputType, setInputType] = useState('');
  const [inputMore, setInputmore] = useState('');
  const [inputResult, setInputResult] = useState('');
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Не все поля заполны',
      'Укажите тип и подробности',
      [
        {
          text: 'OK',
          onPress: () => {},
        },
      ]
    );
  const addErrorHandler = () => {
    if (
      !inputType ||
      !inputMore ||
      inputType.trim() === '' ||
      inputMore.trim() === ''
    ) {
      createTwoButtonAlert();
    } else {
      dispatch(
        addError([inputType, inputMore, inputResult])
      );
    }
  };
  return (
    <Modal visible={visible} animationType='fade'>
      <Button
        style={styles.addBatton}
        title='Add'
        onPress={addErrorHandler}
      ></Button>
      <TextInput
        style={styles.input}
        onChangeText={setInputType}
        value={inputType}
        placeholder='Тип ошибки'
        maxLength={30}
      />
      <TextInput
        style={styles.input}
        onChangeText={setInputmore}
        value={inputMore}
        placeholder='подробности'
        maxLength={150}
      />
      <TextInput
        style={styles.input}
        onChangeText={setInputResult}
        value={inputResult}
        placeholder='вывод'
        maxLength={150}
      />
      <Button
        style={styles.addBatton}
        title='Hide'
        onPress={hideModal}
      ></Button>
    </Modal>
  );
};
const styles = StyleSheet.create({
  addBlock: {
    width: Dimensions.get('window').width / 1.3,
    height: Dimensions.get('window').height / 1.2,
    borderRadius: 25,
    backgroundColor: 'rgba(200, 200, 255, 0.3)',
    elevation: 4,
    justifyContent: 'center',
  },
  addBatton: {
    width: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
