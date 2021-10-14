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
import { sort } from '../components/Sort';
import { SortTypeModal } from '../components/SortTypeModal';
export const ShowStat = ({}) => {
  const DATA = useSelector((state) => state.errors);
  const [isReload, setIsReload] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentSortType, setCurrentSortType] = useState(
    'По убыванию количества ошибок'
  );
  const [tmp, setTmp] = useState([]);
  const sortTypes = [
    'По возрастанию количества ошибок',
    'По убыванию количества ошибок',
    'По возрастанию количества сделанных выводов',
    'По убыванию количества сделанных выводов',
    'Все без вывода',
    'Все с выводом',
  ];
  useEffect(() => {
    setTmp(sort(DATA, 'По убыванию количества ошибок'));
  }, [isReload, isShowModal]);
  //разделитель между кладками сделать как набор стикеров, а на самом деле иконки как типах ошибок
  return (
    <View style={styles.center}>
      <TouchableOpacity
        onPress={() => setIsShowModal(true)}
        activeOpacity={0.1}
      >
        <View style={styles.button}></View>
      </TouchableOpacity>

      <FlatList
        data={tmp}
        keyExtractor={(item) => item.id.toString()}
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
                    return (
                      <View style={styles.block}>
                        <Text style={styles.numberBlock}>
                          {item.id + ' '}
                        </Text>
                      </View>
                    );
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
      ></SortTypeModal>
    </View>
  );
};
const styles = StyleSheet.create({
  center: { paddingVertical: 30 },
  block: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    margin: 10,
  },
  numberBlock: {
    fontSize: 16,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
    borderBottomWidth: 1,
  },
  tabs: {
    padding: 5,

    margin: 5,
  },
  button: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});
