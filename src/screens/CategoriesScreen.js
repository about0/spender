import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import CreateCategory from '../components/Category/CreateCategory';
import { removeCategory } from '../store/actions';

import CategoryItem from '../components/Category/CategoryItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories',
  };

  removeCategoryHandler = () => {};

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.categories}
          renderItem={item => (
            <View>
              <CategoryItem
                item={item.item}
                removeCategory={this.props.removeCategory}
              />
            </View>
          )}
        />
        <CreateCategory />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  removeCategory: id => dispatch(removeCategory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);
