import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Home } from '../screens/Home'
import { ReviewDetails } from '../screens/ReviewDetails'
import { Header } from '../shared/Header'
import { NavigationRouteConfigMap } from 'react-navigation'
import {
  StackNavigationOptions,
  StackNavigationProp,
} from 'react-navigation-stack/lib/typescript/src/vendor/types'

const screens: NavigationRouteConfigMap<StackNavigationOptions, StackNavigationProp> = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => <Header navigation={navigation} title="GameZone" />,
    }),
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    },
  },
}

export const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
    },
  },
})
