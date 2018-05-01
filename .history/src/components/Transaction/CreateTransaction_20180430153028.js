import React from 'react';

import {
  Picker,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    marginTop: 22,
  },
});
export default class CreateTransaction extends React.Component {
  state = {
    pickerValue: '',
  };

  pickerValueChangeHandler = (val) => {
    this.setState({ pickerValue: val });
  };

  render() {
    return (
      <View style={styles.modal}>
        {this.props.isModalOpen && (
          <Modal onRequestClose={this.props.closeModal}>
            <Picker
              selectedValue={this.state.pickerValue}
              onValueChange={val => this.pickerValueChangeHandler(val)}
            >
              {this.props.categories.map(category => (
                <Picker.Item label={category.name} value={category.name} />
              ))}
            </Picker>
          </Modal>
        )}
        <TouchableOpacity onPress={this.props.openModalHandler}>
          <Text>Open Modal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
