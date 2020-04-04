import React, { useState } from 'react'
import { View, Text, Modal, StyleSheet, TextInput, Button } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { FlatButton } from '../shared/Button'

const reviewSchema = Yup.object({
  title: Yup.string()
    .required()
    .min(4),
  body: Yup.string()
    .required()
    .min(8),
  rating: Yup.string()
    .required()
    .test(
      'is-num-1-5',
      'Rating must be a number 1 - 5',
      rating => parseInt(rating) < 6 && parseInt(rating) > 0
    ),
})

interface Props {
  onSubmit: (review: any) => void
}

export const ReviewForm: React.FunctionComponent<Props> = ({ onSubmit }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={values => {
          console.log(values)
          onSubmit(values)
        }}
      >
        {formikProps => (
          <View>
            <TextInput
              placeholderTextColor="#ccc"
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>

            <TextInput
              multiline
              placeholderTextColor="#ccc"
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>

            <TextInput
              placeholderTextColor="#ccc"
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              onBlur={formikProps.handleBlur('rating')}
              keyboardType="numeric"
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>

            <FlatButton text="Submit" onPress={formikProps.handleSubmit as any} />
          </View>
        )}
      </Formik>
    </View>
  )
}
