import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

import { useSelector } from 'react-redux';
import { sort } from '../components/Sort';
export const ShowStat = ({}) => {
  const DATA = useSelector((state) => state.errors);
  const [isReload, setIsReload] = useState(false);
  const [tmp, setTmp] = useState([]);

  useEffect(() => {
    setTmp(sort(DATA, 'По убыванию количества ошибок'));
  }, [isReload]);

  return (
    <View style={styles.center}>
      <FlatList
        data={tmp}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.id.toString()}</Text>
              <FlatList
                data={item.data}
                horizontal={true}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                  if (item.id < 1)
                    return <Text>{'empty'}</Text>;

                  return <Text>{item.id + ' '}</Text>;
                }}
              ></FlatList>
            </View>
          );
        }}
      ></FlatList>
      <Button
        title='reload'
        onPress={() => setIsReload((prev) => !prev)}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  center: { padding: 50 },
  block: {},
});
