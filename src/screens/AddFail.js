import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export const AddFail = ({}) => {
  const DATA = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    'gf',
    'g',
    's',
    'sd',
    'f',
    'd',
    'st',
    'dt',
  ];
  return (
    <View style={styles.center}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item}</Text>
        )}
        keyExtractor={(item) => item}
        horizontal={true}
        inverted
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  center: { padding: 20 },
  text: { fontSize: 37, padding: 40 },
});
