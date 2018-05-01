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
import DatePicker from 'react-native-datepicker';

import {
  ADD_TRANSACTION,
  SHOW_TRANSACTION_CREATION_MODAL,
} from '../../store/actions';

import size from '../../constants/Layout';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  modal: {
    marginTop: 22,
    alignItems: 'center',
    backgroundColor: colors.tintColor,
  },
  container: {
    marginTop: 50,
    marginBottom: 100,
    backgroundColor: colors.noticeText,
    flex: 1,
    borderRadius: 16,
    borderColor: colors.tintColor,
    borderStyle: 'solid',
    borderWidth: 2,
  },
  categoryPicker: {
    alignItems: 'center',
    width: size.window.width / 2,
  },
  footer: {
    alignItems: 'center',
    alignContent: 'flex-end',
    display: 'flex',
  },
});
class CreateTransaction extends React.Component {
  state = {
    pickedCategory: '',
    transactionAmount: '',
    transactionNote: '',
    date: new Date(),
  };

  componentDidMount() {
    this.setState({
      pickedCategory: this.props.categories[0],
    });
  }

  // _transactionAmountChangeHandler = (val) => {
  //   this.setState({
  //     transactionAmount: val,
  //   });
  // };

  _changeValueHandler = (val, field) => {
    this.setState({ [field]: val });
  };

  _createTransactionHandler = () => {
    this.props.createTransaction({
      note: this.state.transactionNote,
      amount: this.state.transactionAmount,
      category: this.state.pickedCategory,
      date: this.state.date,
    });
    this.setState({
      transactionNote: '',
      transactionAmount: '',
      date: new Date(),
    });
    this.props.closeTransactionModal();
  };

  _dateChangeHandler = (val) => {
    this.setState({
      date: val,
    });
  };

  render() {
    return (
      <View>
        <Modal
          visible={this.props.isModalOpen}
          onRequestClose={this.props.closeTransactionModal}
        >
          <View style={styles.container}>
            <View style={styles.categoryPicker}>
              <Text>Choose Category</Text>
              <Picker
                selectedValue={this.props.categories[0]}
                onValueChange={val =>
                  this._changeValueHandler(val, 'pickedCategory')
                }
              >
                {this.props.categories.map(category => (
                  <Picker.Item label={category.name} value={category} />
                ))}
              </Picker>
            </View>
            <View>
              <TextInput
                value={this.state.transactionAmount}
                placeholder="Enter Amount"
                keyboardType="numeric"
                onChangeText={val =>
                  this._changeValueHandler(val, 'transactionAmount')
                }
              />
              <TextInput
                value={this.state.transactionNote}
                placeholder="Enter Note"
                keyboardType="numeric"
                onChangeText={val =>
                  this._changeValueHandler(val, 'transactionNote')
                }
              />
              <DatePicker
                date={this.state.date}
                onDateChange={this._dateChangeHandler}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2018-04-22"
                maxDate="2019-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
              />
            </View>
            <View style={styles.footer}>
              <TouchableOpacity onPress={this._createTransactionHandler}>
                <Text>Create Transaction</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.props.closeModalHandler}>
                <Text>Close window</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={this.props.openModalHandler}>
          <Text>Add Transaction</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createTransaction: data => dispatch({ type: ADD_TRANSACTION, payload: data }),
  closeTransactionModal: () =>
    dispatch({
      type: SHOW_TRANSACTION_CREATION_MODAL,
      payload: { visible: false },
    }),
});

export default connect(null, mapDispatchToProps)(CreateTransaction);
