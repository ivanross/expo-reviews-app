import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  navigation: any
  title: string
}

export const Header: React.FunctionComponent<Props> = ({ navigation, title }) => {
  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
      <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openMenu} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
})
