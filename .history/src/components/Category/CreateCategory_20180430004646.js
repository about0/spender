import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { CREATE_CATEGORY, REMOVE_CATEGORY } from '../../store/actions';

class CreateCategory extends React.Component {
  state = {
    categoryName: '',
    categoryDescription: '',
  };

  changeTextValueHandler = (val, target) => {
    this.setState({
      [target]: val,
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity>
          <TextInput
            value={this.state.categoryName}
            placeholder="New Category name"
            onChangeText={val =>
              this.changeTextValueHandler(val, 'categoryName')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <TextInput
            value={this.state.categoryDescription}
            placeholder="New Category description"
            onChangeText={val =>
              this.changeTextValueHandler(val, 'categoryDescription')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Create Category</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createCategory: () =>
    dispatch({
      type: CREATE_CATEGORY,
      payload: {
        name: this.state.categoryName,
        description: this.state.categoryDescription,
      },
    }),
});

export default connect(null, mapDispatchToProps)(CreateCategory);
