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
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addError, loadErrors } from '../redux/action';
import { AddModal } from '../components/AddModal';
import { EditModal } from '../components/EditModal';
import { selectIcons } from '../components/selectIcons';

export const AddFail = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadErrors());
  }, [dispatch, isShowAddModal, isShowEditModal]);

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
              <View
                style={{
                  ...styles.separator,
                  paddingRight: !DATA[1]
                    ? 0
                    : Dimensions.get('window').width / 12,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    setIsShowAddModal((prev) => !prev)
                  }
                >
                  <View
                    style={{
                      ...styles.addBlock,
                      /*alignSelf: isAppFirstTimeStart
                        ? 'center'
                        : 'stretch',*/
                    }}
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
              <View
                style={{
                  ...styles.separator,
                  paddingRight: !DATA[1]
                    ? 0
                    : Dimensions.get('window').width / 12,
                }}
              >
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
                      borderColor: item.resultOfError
                        ? 'rgba(0, 184, 86, 1)'
                        : '#EE3D48',
                    }}
                  >
                    <Text style={styles.id}>
                      {item.id - 1}
                    </Text>
                    <View>
                      <View style={styles.headerWrapper}>
                        <Text style={styles.header}>
                          Из какой сферы жизни ошибка?
                        </Text>
                        <Text style={styles.userText}>
                          {item.typeOfError}
                        </Text>
                        <Image
                          source={selectIcons(
                            item.typeOfError
                          )}
                          style={styles.icons}
                        ></Image>
                      </View>
                      <View style={styles.headerWrapper}>
                        <Text style={styles.header}>
                          Расскажите подробнее...
                        </Text>
                        <Text style={styles.userText}>
                          {item.moreOfError}
                        </Text>
                      </View>
                      <View style={styles.headerWrapper}>
                        <Text style={styles.header}>
                          Какой вывод вы сделали?
                        </Text>
                        <Text style={styles.userText}>
                          {item.resultOfError}
                        </Text>
                      </View>
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
        style={{
          ...styles.flatList,
          alignSelf: !DATA[1] ? 'center' : 'stretch',
        }}
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
        allowedEditType={true}
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
    paddingTop: Dimensions.get('window').height / 9,
    //alignSelf: 'center',
  },
  plusIcon: {
    alignSelf: 'center',
    color: 'black',
  },
  block: {
    width: Dimensions.get('window').width / 1.3,
    height: Dimensions.get('window').height / 1.3,
    borderRadius: 25,

    borderWidth: 2,
  },
  time: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Roboto-Light',
  },
  id: {
    padding: 15,
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
  },
  headerWrapper: {
    height: '31%',
  },
  userText: {
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  header: {
    fontFamily: 'Roboto-Medium',
    paddingHorizontal: 20,
  },

  addBlock: {
    width: Dimensions.get('window').width / 1.3,
    height: Dimensions.get('window').height / 1.3,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
  },
  icons: {
    width: Dimensions.get('window').width / 4.5,
    height: Dimensions.get('window').width / 4.5,
    alignSelf: 'center',
  },
});
