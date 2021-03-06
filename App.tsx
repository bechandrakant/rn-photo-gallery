import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import Mid from './src/components/Mid'
import Body from './src/components/Body'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Mid />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
