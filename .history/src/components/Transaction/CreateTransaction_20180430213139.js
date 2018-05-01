import React from 'react';

import {
  Picker,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';

import ADD_TRANSACTION from '../../store/actions';

const styles = StyleSheet.create({
  modal: {
    marginTop: 22,
  },
});
class CreateTransaction extends React.Component {
  state = {
    pickedCategory: '',
    transactionAmount: '',
    transactionNote: '',
  };

  _transactionAmountChangeHandler = (val) => {
    this.setState({
      transactionAmount: val,
    });
  };

  _changeValueHandler = (val, field) => {
    this.setState({ [field]: val });
  };

  _createTransactionHandler = () => {
    this.props.createTransaction({
      note: this.state.transactionNote,
      amount: this.state.transactionAmount,
      category: this.state.
    });
    this.setState({
      note: '',
      amount: 0,
    })
  };

  render() {
    return (
      <View style={styles.modal}>
        {this.props.isModalOpen && (
          <Modal onRequestClose={this.props.closeModal}>
            <View>
              <Text>Choose Category</Text>
              <Picker
                selectedValue={this.state.pickedCategory}
                onValueChange={val =>
                  this._changeValueHandler(val, 'pickedCategory')
                }
              >
                {this.props.categories.map(category => (
                  <Picker.Item label={category.name} value={category.name} />
                ))}
              </Picker>
            </View>
            <View>
              <TextInput
                value={this.state.transactionAmount}
                placeholder="Enter Amount"
                keyboardType="numeric"
                onChange={val =>
                  this._changeValueHandler(val, 'transactionAmount')
                }
              />
              <TextInput
                value={this.state.transactionNote}
                placeholder="Enter Note"
                keyboardType="numeric"
                onChange={val =>
                  this._changeValueHandler(val, 'transactionNote')
                }
              />
            </View>
            <TouchableOpacity onPress={this.}>
            <Text>Create Transaction</Text>
            </TouchableOpacity>
          </Modal>
        )}
        <TouchableOpacity onPress={this.props.openModalHandler}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createTransaction: data => dispatch({ type: ADD_TRANSACTION, payload: data }),
  closeTransactionModal: () => dispatch({type: CLOSE_TRANSACTION_MODAL})
});

export default connect(null, mapDispatchToProps)(CreateTransaction);
