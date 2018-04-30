import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';

import { connect } from 'react-redux';

import { MonoText } from '../components/StyledText';
import { ADD_TRANSACTION, REMOVE_TRANSACTION } from '../store/actions';
import CreateTransaction from '../components/Transaction/CreateTransaction';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
class TransactionsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <FlatList
            data={this.props.transactions}
            renderItem={item => (
              <MonoText key={item.item.id}>{item.item.note}</MonoText>
            )}
          />
        </ScrollView>
        <CreateTransaction />
        <TouchableOpacity onPress={this.props.addTransaction}>
          <Text>Add Random Transaction</Text>
        </TouchableOpacity>
        <View style={styles.getStartedContainer}>
          <Text>Transactions Screen</Text>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTransaction: () =>
    dispatch({
      type: ADD_TRANSACTION,
      payload: { id: Date.now(), note: 'Test', amount: 100 },
    }),
});

const mapStateToProps = state => ({
  transactions: state.transactionsReducer.transactions,
  categories: state.categoriesReducer.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsScreen);
