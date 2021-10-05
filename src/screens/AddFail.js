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
import { Ionicons } from '@expo/vector-icons';

import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addError, loadErrors } from '../redux/action';
import { AddModal } from '../components/AddModal';
import { EditModal } from '../components/EditModal';

export const AddFail = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadErrors());
  }, [dispatch]);
  const [editErrorId, setEditErrorId] = useState(0);
  const [isShowAddModal, setIsShowAddModal] =
    useState(false);
  const [isShowEditModal, setIsShowEditModal] =
    useState(false);
  const tmpDATA = useSelector((state) => state.errors);
  const DATA = [];
  for (let index = 0; index < tmpDATA.length; index++) {
    if (index === 0) {
      DATA[index] = tmpDATA[index];
    } else {
      DATA[index] = tmpDATA[tmpDATA.length - index];
    }
  }

  return (
    <View style={styles.center}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          if (item.id === 1) {
            return (
              <View style={styles.separator}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setIsShowAddModal((prev) => !prev)
                  }
                >
                  <View
                    style={styles.addBlock}
                    key={item.id}
                  >
                    <Ionicons
                      style={styles.plusIcon}
                      name='add-outline'
                      size={
                        Dimensions.get('window').width / 3
                      }
                    ></Ionicons>
                  </View>
                </TouchableOpacity>
              </View>
            );
          } else {
            return (
              <View style={styles.separator}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    setIsShowEditModal((prev) => !prev);
                    setEditErrorId(item.id - 1);
                  }}
                >
                  <View
                    style={{
                      ...styles.block,
                      backgroundColor: item.resultOfError
                        ? 'rgba(24, 245, 128, 0.3)'
                        : 'rgba(250, 42, 101, 0.3)',
                    }}
                  >
                    <Text style={styles.id}>
                      {item.id - 1}
                    </Text>
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
                </TouchableOpacity>
              </View>
            );
          }
        }}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        inverted
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      ></FlatList>
      <AddModal
        visible={isShowAddModal}
        hideModal={() => {
          setIsShowAddModal((prev) => !prev);
        }}
      ></AddModal>
      <EditModal
        visible={isShowEditModal}
        hideModal={() => {
          setIsShowEditModal((prev) => !prev);
        }}
        editErrorId={editErrorId}
      ></EditModal>
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    width: '100%',
    height: '100%',
    //backgroundColor: 'red',
  },
  separator: {
    paddingRight: Dimensions.get('window').width / 12,
  },
  flatList: {
    marginVertical: '10%',
  },
  plusIcon: {
    alignSelf: 'center',
    color: 'white',
  },
  block: {
    width: Dimensions.get('window').width / 1.3,
    height: '99%',
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  time: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Roboto-Light',
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
    fontFamily: 'Roboto-Light',
    fontSize: 15,
  },
  mainBlockTextBorder: {
    borderBottomColor: 'black',

    borderBottomWidth: 1,
  },

  addBlock: {
    width: Dimensions.get('window').width / 1.3,
    height: '99%',
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 1)',

    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
