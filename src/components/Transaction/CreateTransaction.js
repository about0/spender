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
  addTransaction,
  showTransactionCreationModal,
} from '../../store/actions';

import size from '../../constants/Layout';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 100,
    backgroundColor: colors.noticeText,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: colors.tintColor,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  categoryPicker: {
    width: 250,
  },
  footer: {
    alignItems: 'center',
    alignContent: 'flex-end',
    marginHorizontal: 50,
  },
  textInputs: {
    width: 250,
    alignItems: 'center',
    height: 60,
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
            <View>
              <Text>Choose Category</Text>
              <Picker
                style={styles.categoryPicker}
                selectedValue={this.state.pickedCategory}
                onValueChange={val =>
                  this._changeValueHandler(val, 'pickedCategory')
                }
              >
                {this.props.categories.map(category => (
                  <Picker.Item
                    key={category.id}
                    label={category.name}
                    value={category}
                  />
                ))}
              </Picker>
            </View>
            <View>
              <TextInput
                style={styles.textInputs}
                value={this.state.transactionAmount}
                placeholder="Enter Amount"
                keyboardType="numeric"
                onChangeText={val =>
                  this._changeValueHandler(val, 'transactionAmount')
                }
              />
              <TextInput
                style={styles.textInputs}
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
            <View>
              <TouchableOpacity
                onPress={this._createTransactionHandler}
                style={styles.footer}
              >
                <Text>Create Transaction</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.props.closeModalHandler}
                style={styles.footer}
              >
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
  createTransaction: data => dispatch(addTransaction(data)),
  closeTransactionModal: () => dispatch(showTransactionCreationModal(false)),
});

export default connect(null, mapDispatchToProps)(CreateTransaction);
