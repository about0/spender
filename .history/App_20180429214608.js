import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage,
  Text,
} from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import RootNavigation from './src/navigation/RootNavigation';

import { store, persistor } from './src/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    store,
  };

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('.src/assets/images/robot-dev.png'),
        require('.src/assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  // _handleFinishLoading = () => {
  //   this.setState({ isLoadingComplete: true });
  // };

  componentDidMount() {
    this._handleAppStart();
  }

  _handleAppStart = () => {
    AsyncStorage.getItem('state');
  };

  _handleStateChange = (state) => {
    AsyncStorage.setItem('state', state);
  };
  render() {
    return (
      <Provider store={this.state.store}>
        <PersistGate persistor={persistor} loading={<Text>Loading...</Text>}>
          <AppLoading
            startAsync={this._handleAppStart}
            onError={this._handleLoadingError}
            onFinish={this.setState({ isLoadingComplete: true })}
          />
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <RootNavigation />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
