import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Dimensions } from 'react-native';
export const AddFail = ({}) => {
  const DATA = ['1', '2', '3', '4', '5'];
  return (
    <View style={styles.center}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.wrapper}>
            <View style={styles.block}>
              <Text>{item}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item}
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
  block: {
    width: Dimensions.get('window').width / 1.3,
    height: Dimensions.get('window').height / 1.2,

    borderRadius: 25,
    backgroundColor: 'rgba(200, 200, 255, 0.3)',
    elevation: 4,
  },
});
