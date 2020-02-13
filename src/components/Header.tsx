import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ImageBackground } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/headerbg.jpeg')}
        style={styles.headerBg}>
          <View style={styles.headerContainer}>
            <View style={styles.profilePicContainer}>
              <Image 
                source={require('../images/selfie.jpg')}
                style={styles.profilePic} />
            </View>
            <Text style={styles.name}>Chandrakant</Text>
            <Text style={styles.status}>Frontend developer</Text>
          </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  headerBg: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    minHeight: 300,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  profilePicContainer: {
    width: 160,
    height: 160,
  },
  profilePic: {
    flex: 1,
    width: null,
    borderWidth: 3,
    borderRadius: 80,
    borderColor: '#fff',
    alignSelf: 'stretch',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  status: {
    color: '#f99',
    fontSize: 16,
  },
})