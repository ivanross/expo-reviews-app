import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { Home } from './screens/Home'
import { RootDrawerNavigation } from './routes/Drawer'

const getFonts = () =>
  Font.loadAsync({
    'jbm-regular': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
    'jbm-bold': require('./assets/fonts/JetBrainsMono-Bold.ttf'),
  })

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (fontLoaded) return <RootDrawerNavigation />
  else
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={error => console.log('ERROR', error)}
      />
    )
}
