import React from 'react';

import { Picker, View } from 'react-native';

export default class CreateTransaction extends React.Component {
  render() {
    return (
      <View>
        <Picker selectedValue="Select category to assign" onValueChange />
      </View>
    );
  }
}
