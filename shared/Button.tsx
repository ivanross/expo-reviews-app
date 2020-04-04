import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'

interface Props {
  text: string
  onPress: () => void
}

export const FlatButton: React.FunctionComponent<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
})
