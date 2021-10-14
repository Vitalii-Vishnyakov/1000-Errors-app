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

export const SortTypeModal = ({ visible, onClose }) => {
  const sortTypes = [
    'По возрастанию количества ошибок',
    'По убыванию количества ошибок',
    'По возрастанию количества сделанных выводов',
    'По убыванию количества сделанных выводов',
    'Все без вывода',
    'Все с выводом',
  ];
  return (
    <Modal
      visible={visible}
      animationType='fade'
      onRequestClose={() => {}}
      transparent={true}
    >
      <View
        style={{
          height: '50%',
          marginTop: 'auto',
          backgroundColor: 'blue',
        }}
      >
        <TouchableOpacity onPress={onClose}>
          <View style={styles.button}></View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});
