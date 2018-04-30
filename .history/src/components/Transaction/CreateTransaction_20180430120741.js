import React from 'react';

import { Picker, View } from 'react-native';

export default class CreateTransaction extends React.Component {
  state = {
    pickerValue: '',
  };

  pickerValueChangeHandler = (val) => {
    this.setState({ pickerValue: val });
  };

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.pickerValue}
          onValueChange={val => this.pickerValueChangeHandler(val)}
        />
      </View>
    );
  }
}
