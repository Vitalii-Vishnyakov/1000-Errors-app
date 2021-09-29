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

export const EditModal = ({
  visible,
  hideModal,
  editErrorId,
}) => {
  const dispatch = useDispatch();
  const DATA = useSelector((state) => state.errors || '');

  let error = DATA[DATA.length - Number(editErrorId)] || {};

  const [inputTypeEdit, setInputType] = useState(
    error.typeOfError
  );
  const [inputMoreEdit, setInputmore] = useState(
    error.moreOfError
  );
  const [inputResultEdit, setInputResult] = useState(
    error.resultOfError
  );
  useEffect(() => {
    setInputType(error.typeOfError);
    setInputmore(error.moreOfError);
    setInputResult(error.resultOfError);
  }, [editErrorId]);
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
  const editErrorHandler = () => {
    if (
      !inputTypeEdit ||
      !inputMoreEdit ||
      inputTypeEdit.trim() === '' ||
      inputMoreEdit.trim() === ''
    ) {
      createTwoButtonAlert();
    } else {
      dispatch(
        addError([
          inputTypeEdit,
          inputMoreEdit,
          inputResultEdit,
        ])
      );
    }
  };
  return (
    <Modal visible={visible} animationType='fade'>
      <Button
        style={styles.addBatton}
        title='Edit'
        onPress={editErrorHandler}
      ></Button>
      <TextInput
        style={styles.input}
        onChangeText={setInputType}
        value={inputTypeEdit}
        placeholder='Тип ошибки'
        maxLength={30}
      />
      <TextInput
        style={styles.input}
        onChangeText={setInputmore}
        value={inputMoreEdit}
        placeholder='подробности'
        maxLength={150}
      />
      <TextInput
        style={styles.input}
        onChangeText={setInputResult}
        value={inputResultEdit}
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
