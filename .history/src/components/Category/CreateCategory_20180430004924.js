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
        <TouchableOpacity
          onPress={() =>
            this.props.createCategory(
              this.state.categoryName,
              this.state.categoryDescription,
            )
          }
        >
          <Text>Create Category</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createCategory: (name, description) =>
    dispatch({
      type: CREATE_CATEGORY,
      payload: {
        name,
        description,
      },
    }),
});

export default connect(null, mapDispatchToProps)(CreateCategory);
