import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
  Touchable,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector } from 'react-redux';
import { AboutModal } from '../components/AboutModal';
import { EditModal } from '../components/EditModal';
import { sort } from '../components/Sort';
import { SortTypeModal } from '../components/SortTypeModal';
export const ShowStat = ({ navigation }) => {
  const DATA = useSelector((state) => state.errors);
  const [isShowEditModal, setIsShowEditModal] =
    useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowAboutModal, setIsShowAboutModal] =
    useState(false);
  const [editErrorId, setEditErrorId] = useState(0);

  const [tmp, setTmp] = useState([]);
  const [sortType, setSortType] = useState(
    'По убыванию количества ошибок'
  );
  const sortTypes = [
    'По возрастанию количества ошибок',
    'По убыванию количества ошибок',
    'По возрастанию количества сделанных выводов',
    'По убыванию количества сделанных выводов',
  ];

  useEffect(() => {
    setTmp(sort(DATA, sortType));
  }, [isShowModal, sortType, navigation.isFocused()]);
  //разделитель между кладками сделать как набор стикеров, а на самом деле иконки как типах ошибок
  return (
    <View style={styles.center}>
      <TouchableOpacity
        onPress={() => setIsShowModal(true)}
        activeOpacity={0.8}
      >
        <View style={styles.button}>
          <Text style={styles.sortText}>Отсортировать</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={tmp}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.tabs}>
              <Text style={styles.title}>
                {item.id.toString()}
              </Text>
              <View>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={item.data}
                  horizontal={true}
                  keyExtractor={(item) =>
                    item.id.toString()
                  }
                  renderItem={({ item }) => {
                    if (item.id != 1) {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setIsShowEditModal(
                              (prev) => !prev
                            );
                            setEditErrorId(
                              parseInt(item.id - 1)
                            );
                          }}
                          activeOpacity={0.8}
                        >
                          <View
                            style={{
                              ...styles.block,
                              borderColor:
                                item.resultOfError
                                  ? 'rgba(0, 184, 86, 1)'
                                  : '#EE3D48',
                            }}
                          >
                            <Text
                              style={styles.numberBlock}
                            >
                              {item.id - 1}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    } else {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setIsShowAboutModal(
                              (prev) => !prev
                            );
                          }}
                          activeOpacity={0.8}
                        >
                          <View
                            style={{
                              ...styles.block,
                              borderColor: 'black',
                            }}
                          >
                            <Text
                              style={styles.numberBlock}
                            >
                              0
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    }
                  }}
                ></FlatList>
              </View>
            </View>
          );
        }}
      ></FlatList>

      <SortTypeModal
        visible={isShowModal}
        onClose={() => setIsShowModal(false)}
        setSortType={setSortType}
      ></SortTypeModal>
      <EditModal
        visible={isShowEditModal}
        hideModal={() => {
          setIsShowEditModal((prev) => !prev);
        }}
        editErrorId={editErrorId}
        allowedEditType={false}
      ></EditModal>
      <AboutModal
        visible={isShowAboutModal}
        hideModal={() => {
          setIsShowAboutModal((prev) => !prev);
        }}
      ></AboutModal>
    </View>
  );
};
const styles = StyleSheet.create({
  center: { paddingVertical: 40 },
  block: {
    width: 50,
    height: 50,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
  },
  numberBlock: {
    fontSize: 17,
    alignSelf: 'center',
    fontFamily: 'Roboto-Bold',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
  },
  tabs: {
    padding: 5,

    margin: 5,
  },
  button: {
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    padding: 5,
    marginHorizontal: '30%',
  },
  sortText: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});
