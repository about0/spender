import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import Transactions from '../screens/TransactionsScreen';
import Overview from '../screens/OverviewScreen';
import Budget from '../screens/BudgetScreen';
import Categories from '../screens/CategoriesScreen'

export default TabNavigator(
  {
    Transactions: {
      screen: Transactions,
    },
    Overview: {
      screen: Overview,
    },
    Budget: {
      screen: Budget,
    },
    Categories: {
      screen:
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Transactions':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Overview':
            iconName =
              Platform.OS === 'ios'
                ? `ios-link${focused ? '' : '-outline'}`
                : 'md-link';
            break;
          case 'Budget':
            iconName =
              Platform.OS === 'ios'
                ? `ios-options${focused ? '' : '-outline'}`
                : 'md-options';
            break;
          default:
            return iconName;
        }

        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  },
);
