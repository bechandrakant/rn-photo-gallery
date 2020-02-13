import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'

export default class Body extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img1.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img2.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img3.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img4.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img5.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img6.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img1.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img2.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img3.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img4.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img5.jpeg')} />
          </View>
          <View style={styles.imageContainer}>
            <Image 
              style={styles.images}
              source={require('../images/img6.jpeg')} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    height: 100,
    width: (Dimensions.get('window').width / 2),
  },
  images: {
    margin: 2,
    width: null,
    flex: 1,
    alignSelf: 'stretch',
  },
})