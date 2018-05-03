import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderColor: colors.tintColor,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.tabBar,
    margin: 'auto',
  },
  textItemName: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
  textItemDescription: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    color: colors.warningText,
  },
  removeItem: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    color: 'red',
  },
});

export default ({ item, removeCategory }) => (
  <View style={styles.container}>
    <Text style={styles.textItemName}>{item.name}</Text>
    <Text style={styles.textItemDescription}>{item.description}</Text>
    <TouchableOpacity onPress={() => removeCategory(item.id)}>
      <Text style={styles.removeItem}>Remove</Text>
    </TouchableOpacity>
  </View>
);
