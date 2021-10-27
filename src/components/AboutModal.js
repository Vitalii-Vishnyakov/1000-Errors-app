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
  Platform,
  Linking,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, TextInput } from 'react-native';
import { addError, loadErrors } from '../redux/action';
import { Ionicons } from '@expo/vector-icons';

export const AboutModal = ({ visible, hideModal }) => {
  return (
    <Modal
      visible={visible}
      animationType='fade'
      onRequestClose={() => {
        hideModal();
      }}
    >
      <Ionicons
        name='close-outline'
        onPress={() => {
          hideModal();
        }}
        size={40}
        style={styles.closeIcon}
      ></Ionicons>
      <Text style={styles.text}>
        Это приложение поменяет твоё отношение к ошибкам.
        Каждая новая ошибка - это всего лишь урок, который в
        будущем тебе пригодиться. С этим приложением ты
        научишься делать выводы, а не грустить из-за неудач.
      </Text>
      <Text style={styles.text}>
        Приложение бесплатное, а вот аккаунт разработчика
        платный, 100$ в год. Поддержи проект, если
        понравилось приложение. Но я на тебя не давлю и не
        настаиваю, если это приложение мне встанет в
        копеечку, то я просто запишу эту ошибку в приложение
        и сделаю выводы.
      </Text>
      <Text style={styles.boldText}>Сервис Sobe.ru</Text>
      <Text
        style={styles.link}
        onPress={() =>
          Linking.openURL('https://sobe.ru/na/1000_errors')
        }
      >
        https://sobe.ru/na/1000_errors
      </Text>
      <Text style={styles.boldText}>Сервис boosty.to</Text>

      <Text
        style={styles.link}
        onPress={() =>
          Linking.openURL(
            'https://boosty.to/myapps/single-payment/donation/71929?share=target_link'
          )
        }
      >
        https://boosty.to/myapps/
      </Text>
    </Modal>
  );
};
const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: 'flex-end',
    padding: 20,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    padding: 10,
    fontSize: 15,
  },
  link: {
    fontFamily: 'Roboto-Regular',
    padding: 10,
    fontSize: 15,
    color: 'blue',
  },
  boldText: {
    fontFamily: 'Roboto-Bold',
    padding: 10,
    fontSize: 15,
  },
});
