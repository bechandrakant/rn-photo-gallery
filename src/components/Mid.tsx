import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

export default class Mid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.number}>50 +</Text>
          <Text style={styles.text}>Repositories</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.number}>100 +</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    backgroundColor: '#f66',
    borderTopWidth: 8,
    borderTopColor: 8,
  }, 
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
  number: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
  },
})