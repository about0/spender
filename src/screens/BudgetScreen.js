import React from 'react';
import { View, Text } from 'react-native';

export default class BudgetScreen extends React.Component {
  static navigationOptions = {
    title: 'Budget',
  };

  render() {
    return (
      <View>
        <Text>Budget Screen</Text>
      </View>
    );
  }
}
