import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, TextInput } from 'react-native';
import {
  addError,
  editError,
  loadErrors,
} from '../redux/action';
import { Ionicons } from '@expo/vector-icons';

export const EditModal = ({
  visible,
  hideModal,
  editErrorId,
  allowedEditType,
}) => {
  const dispatch = useDispatch();
  const DATA = useSelector((state) => state.errors || '');

  let error = DATA[Number(editErrorId)] || {};

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
  }, [editErrorId, visible]);
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Не спешите...',
      'Все поля должны быть заполнены, кроме поля вывода, его можно заполнить позже.',
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
        editError(
          [inputTypeEdit, inputMoreEdit, inputResultEdit],
          editErrorId
        )
      );
      hideModal();
    }
  };
  return (
    <Modal
      visible={visible}
      animationType='fade'
      onRequestClose={() => {
        hideModal();
        setInputType('');
        setInputmore('');
        setInputResult('');
      }}
    >
      <Ionicons
        name='close-outline'
        onPress={hideModal}
        size={40}
        style={styles.closeIcon}
      ></Ionicons>
      <View style={styles.textInputBlock}>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={setInputType}
          value={inputTypeEdit}
          placeholder='Из какой сферы жизни ошибка?'
          maxLength={30}
          accessible={allowedEditType}
        />
      </View>
      <View style={styles.textInputBlock}>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={setInputmore}
          value={inputMoreEdit}
          placeholder='Расскажите подробнее...'
          maxLength={200}
        />
      </View>
      <View style={styles.textInputBlock}>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={setInputResult}
          value={inputResultEdit}
          placeholder='Какой вывод вы сделали?'
          maxLength={200}
        />
      </View>

      <View style={styles.addBatton}>
        <TouchableOpacity
          onPress={editErrorHandler}
          activeOpacity={0.7}
        >
          <Text style={styles.addButtonText}>
            Отредактировать ошибку
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  addBatton: {
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 15,
    marginHorizontal: '20%',
  },
  addButtonText: {
    fontFamily: 'Roboto-Bold',
  },
  closeIcon: {
    alignSelf: 'flex-end',
    padding: 20,
  },
  input: { paddingHorizontal: 20 },
  textInputBlock: { height: '20%' },
});
