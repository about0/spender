import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

export default class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Overview',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>There should be graph. In the future.</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
