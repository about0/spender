import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
        <Text>Categories Screen</Text>
        <FlatList />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categoriesReducer.categories,
});

export default connect(mapStateToProps)(CategoriesScreen);
