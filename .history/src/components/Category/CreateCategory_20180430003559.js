import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default class CreateCategory extends React.Component {
  state = {
    categoryName: '',
    categoryDescription: '',
  };

  render() {
    return (
      <View>
        <TouchableOpacity>
          <TextInput
            value={this.state.categoryName}
            placeholder="New Category name"
          />
        </TouchableOpacity>
      </View>
    );
  }
}
