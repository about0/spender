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
    pickerValue: '',
    transactionAmount: 0,
    transactionNote: '',
  };

  _transactionAmountChangeHandler = (val) => {
    this.setState({
      transactionAmount: val,
    });
  };

  changeValueHandler = (val, field) => {
    this.setState({ [field]: val });
  };

  _createTransactionHandler = () => {
    this.props.createTransaction({
      note: this.state.transactionNote,
      amount: this.state.transactionAmount,
    });
  };

  render() {
    return (
      <View style={styles.modal}>
        {this.props.isModalOpen && (
          <Modal onRequestClose={this.props.closeModal}>
            <View>
              <Text>Choose Category</Text>
              <Picker
                selectedValue={this.state.pickerValue}
                onValueChange={val =>
                  this._pickerValueChangeHandler(val, 'pickerValue')
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
                keyboardType="numeric"
                onChange={val => this._transactionAmountChangeHandler(val)}
              />
            </View>
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
});

export default connect(null, mapDispatchToProps)(CreateTransaction);
