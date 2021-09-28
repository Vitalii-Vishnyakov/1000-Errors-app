import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addError, loadErrors } from '../redux/action';
import { AddModal } from '../components/AddModal';
export const AddFail = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadErrors());
  }, [dispatch]);

  const [isShowModal, setIsShowModal] = useState(false);

  const DATA = useSelector((state) => state.errors);

  return (
    <View style={styles.center}>
      <AddModal
        visible={isShowModal}
        hideModal={() => {
          setIsShowModal((prev) => !prev);
        }}
      ></AddModal>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          if (item.id === '0') {
            return (
              <View style={styles.addWrapper}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() =>
                    setIsShowModal((prev) => !prev)
                  }
                >
                  <View
                    style={styles.addBlock}
                    key={item.id}
                  ></View>
                </TouchableOpacity>
              </View>
            );
          } else {
            return (
              <View style={styles.wrapper}>
                <View
                  style={{
                    ...styles.block,
                    backgroundColor: item.resultOfError
                      ? 'rgba(24, 245, 128, 0.3)'
                      : 'rgba(250, 42, 101, 0.3)',
                  }}
                >
                  <Text style={styles.id}>{item.id}</Text>
                  <View style={styles.mainBlockWithText}>
                    <Text
                      style={styles.mainBlockTextBorder}
                    >
                      Тип ошибки
                    </Text>
                    <Text style={styles.mainBlockText}>
                      {item.typeOfError}
                    </Text>
                    <Text
                      style={styles.mainBlockTextBorder}
                    >
                      Суть ошибки
                    </Text>
                    <Text style={styles.mainBlockText}>
                      {item.moreOfError}
                    </Text>
                    <Text
                      style={styles.mainBlockTextBorder}
                    >
                      Вывод
                    </Text>
                    <Text style={styles.mainBlockText}>
                      {item.resultOfError}
                    </Text>
                  </View>
                  <Text style={styles.time}>
                    {item.time}
                  </Text>
                </View>
              </View>
            );
          }
        }}
        keyExtractor={(item) => item.id}
        horizontal={true}
        inverted
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  center: { padding: 20, paddingRight: 30 },
  wrapper: { padding: 10 },
  addWrapper: { padding: 10 },
  block: {
    width: Dimensions.get('window').width / 1.3,
    height: Dimensions.get('window').height / 1.2,
    borderRadius: 25,
    backgroundColor: 'rgba(200, 200, 255, 0.3)',
    elevation: 4,
  },
  time: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 12,
  },
  id: {
    padding: 20,

    alignSelf: 'flex-end',
    fontSize: 20,
  },
  mainBlockWithText: {
    padding: 10,
  },
  mainBlockText: {
    marginBottom: 120,
  },
  mainBlockTextBorder: {
    borderBottomColor: 'black',

    borderBottomWidth: 1,
  },

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
