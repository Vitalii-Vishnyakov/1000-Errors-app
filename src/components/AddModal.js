import React, { useEffect, useState } from 'react';

import {
  Modal,
  View,
  StyleSheet,
  Button,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
  Touchable,
  KeyboardAvoidingView,
  Keyboard,
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

  const typesOfErrors = [
    'Семья',
    'Финансы',
    'Продажи',
    'Работа',
    'Здоровье',
    'Любовь',
    'Учёба',
    'Дружба',
    'Саморазвитие',
    'Знакомства',
    'Секс',
    'Имидж',
    'Просто затупил',
  ];
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
  const addTyoeOfErrorHandler = (type) => {
    setInputType(type);
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
        onPress={() => {
          hideModal();
          setInputType('');
          setInputmore('');
          setInputResult('');
        }}
        size={40}
        style={styles.closeIcon}
      ></Ionicons>
      {/*<TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >*/}
      <View style={styles.textInputBlock}>
        <TextInput
          multiline={true}
          style={styles.input}
          onChangeText={setInputType}
          value={inputType}
          placeholder='Из какой сферы жизни ошибка?'
          maxLength={30}
        />

        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          {typesOfErrors.map((item) => {
            return (
              <View
                key={item.toString()}
                style={styles.addTypeOfError}
              >
                <TouchableOpacity
                  onPress={() =>
                    addTyoeOfErrorHandler(item)
                  }
                  activeOpacity={0.7}
                >
                  <Text style={styles.addTypeOfErrorText}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
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
          activeOpacity={0.7}
        >
          <Text style={styles.addButtonText}>
            Добавить ошибку
          </Text>
        </TouchableOpacity>
      </View>
      {/*</TouchableOpacity>*/}
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
  addTypeOfErrorText: {
    fontFamily: 'Roboto-Bold',

    fontSize: 15,
  },
  addTypeOfError: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,

    padding: 5,
    paddingLeft: 8,
    marginBottom: 2,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    padding: 20,
  },
  input: { paddingHorizontal: 20 },
  scroll: { paddingHorizontal: 20 },
  textInputBlock: { height: '21%' },
});
