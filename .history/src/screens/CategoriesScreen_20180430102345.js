import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { MonoText } from '../components/StyledText';

import CreateCategory from '../components/Category/CreateCategory';

class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories',
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.categories}
          renderItem={item => (
            <View>
              <MonoText>{item.item.name}</MonoText>
              <MonoText>{item.item.description}</MonoText>
              <TouchableOpacity>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <CreateCategory />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesReducer.categories,
});

export default connect(mapStateToProps)(CategoriesScreen);
