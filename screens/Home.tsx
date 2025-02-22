import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../styles/global'
import { Card } from '../shared/Card'
import { ReviewForm } from './ReviewForm'

type Review = {
  title: string
  rating: number
  body: string
  key: string
}

export function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState<Review[]>([
    { title: 'Zelda, Breadth of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ])

  const addReview = (review: Omit<Review, 'key'>) => {
    setReviews(prevReviews => {
      const key = String(Math.max(...prevReviews.map(({ key }) => Number(key))) + 1)
      return [{ ...review, key }, ...prevReviews]
    })
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />

            <ReviewForm onSubmit={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent: { padding: 20, flex: 1 },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: { marginTop: 40, marginBottom: 0 },
})
