import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import { HomeStack } from './HomeStack'
import { AboutStack } from './AboutStack'

export const RootDrawerNavigation = createAppContainer(
  createDrawerNavigator({
    Home: { screen: HomeStack },
    About: { screen: AboutStack },
  })
)
