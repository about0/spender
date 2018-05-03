import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'goldenrod',
    alignSelf: 'center',
    fontSize: 70,
  },
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Loading...</Text>
  </View>
);
