import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import {
  FlatList,
  TextInput,
} from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addError, loadErrors } from '../redux/action';
export const AddFail = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadErrors());
  }, [dispatch]);

  const [inputType, setInputType] = useState(null);
  const [inputMore, setInputmore] = useState(null);
  const [inputResult, setInputResult] = useState(null);
  const DATA = useSelector((state) => state.errors);
  const addErrorHandler = () => {
    dispatch(addError([inputType, inputMore, inputResult]));
  };
  return (
    <View style={styles.center}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          if (item.id === '0') {
            return (
              <View style={styles.addWrapper}>
                <View style={styles.addBlock}>
                  <Button
                    style={styles.addBatton}
                    title='Add'
                    onPress={addErrorHandler}
                  ></Button>
                  <TextInput
                    style={styles.input}
                    onChangeText={setInputType}
                    value={inputType}
                    placeholder='Тип ошибки'
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={setInputmore}
                    value={inputMore}
                    placeholder='подробности'
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={setInputResult}
                    value={inputResult}
                    placeholder='вывод'
                  />
                </View>
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
                  <Text>{item.typeOfError}</Text>
                  <Text>{item.moreOfError}</Text>
                  <Text>{item.resultOfError}</Text>
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
    position: 'absolute',
    alignSelf: 'flex-end',
    fontSize: 20,
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
