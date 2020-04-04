import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { About } from '../screens/About'
import { Header } from '../shared/Header'
import {
  StackNavigationProp,
  StackNavigationOptions,
} from 'react-navigation-stack/lib/typescript/src/vendor/types'
import { NavigationRouteConfigMap } from 'react-navigation'

const screens: NavigationRouteConfigMap<StackNavigationOptions, StackNavigationProp> = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      headerTitle: () => <Header navigation={navigation} title="About GameZone" />,
    }),
  },
}

export const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
    },
  },
})
