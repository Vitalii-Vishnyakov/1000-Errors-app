import React, { useEffect, useState } from 'react';

import {
  Modal,
  View,
  StyleSheet,
  Button,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, TextInput } from 'react-native';
import { addError, loadErrors } from '../redux/action';
import { Ionicons } from '@expo/vector-icons';

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
      setInputType('');
      setInputmore('');
      setInputResult('');
      hideModal();
    }
  };

  return (
    <Modal visible={visible} animationType='fade'>
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
          value={inputType}
          placeholder='Из какой сферы жизни ошибка?'
          maxLength={30}
        />
      </View>
      <View style={styles.textInputBlock}>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={setInputmore}
          value={inputMore}
          placeholder='Расскажите подробнее...'
          maxLength={200}
        />
      </View>
      <View style={styles.textInputBlock}>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={setInputResult}
          value={inputResult}
          placeholder='Какой вывод вы сделали?'
          maxLength={200}
        />
      </View>

      <View style={styles.addBatton}>
        <TouchableOpacity
          onPress={addErrorHandler}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>
            Добавить ошибку
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  addBatton: {
    alignItems: 'center',
  },
  addButtonText: {
    fontFamily: 'Roboto-Bold',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 15,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    padding: 20,
  },
  input: { paddingHorizontal: 20 },
  textInputBlock: { height: '20%' },
});
