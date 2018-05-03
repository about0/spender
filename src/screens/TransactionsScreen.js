import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { showTransactionCreationModal } from '../store/actions';
import CreateTransaction from '../components/Transaction/CreateTransaction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});
class TransactionsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _modalCloseHandler = () => {
    this.props.toggleModal(false);
  };

  _modalOpenHandler = () => {
    this.props.toggleModal(true);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <FlatList
            data={this.props.transactions}
            _keyExtractor={(item, index) => index.toString()}
            renderItem={item => (
              <Text>
                Note: {item.item.note}, $ {item.item.amount}
              </Text>
            )}
          />
        </ScrollView>

        <View style={styles.getStartedContainer}>
          <CreateTransaction
            categories={this.props.categories}
            closeModalHandler={this._modalCloseHandler}
            openModalHandler={this._modalOpenHandler}
            isModalOpen={this.props.isModalOpen}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: visible => dispatch(showTransactionCreationModal(visible)),
});

const mapStateToProps = state => ({
  transactions: state.transactions,
  categories: state.categories,
  isModalOpen: state.showTransactionCreationModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
