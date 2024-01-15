import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimensions'

const Loading = () => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <Image source={require("../assets/icons/loading.gif")} width={windowWidth*0.6} height={windowHeight*0.5} resizeMode='contain' />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})