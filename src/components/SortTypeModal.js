import { Ionicons } from '@expo/vector-icons';
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

export const SortTypeModal = ({
  visible,
  onClose,
  setSortType,
}) => {
  const sortTypes = [
    'По возрастанию количества ошибок',
    'По убыванию количества ошибок',
    //'По возрастанию количества сделанных выводов',
    //'По убыванию количества сделанных выводов',
    //'Все без вывода',
    //'Все с выводом',
  ];

  return (
    <Modal
      visible={visible}
      animationType='slide'
      onRequestClose={() => onClose()}
      transparent={true}
    >
      <View style={styles.mainFrame}>
        <Ionicons
          name='close-outline'
          onPress={() => onClose()}
          size={40}
          style={styles.closeIcon}
        ></Ionicons>
        {sortTypes.map((item) => {
          return (
            <View key={item}>
              <TouchableOpacity
                onPress={() => {
                  setSortType(item);
                  onClose();
                }}
                activeOpacity={0.7}
              >
                <View style={styles.button}>
                  <Text style={styles.sortText}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  mainFrame: {
    height: '30%',
    marginTop: 'auto',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },

  closeIcon: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  button: {
    alignItems: 'center',

    //borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 5,
    marginBottom: 5,
  },
  sortText: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});
