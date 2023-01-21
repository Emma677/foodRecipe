import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({text, style}) => {
  return (
   <Text style={[styles.title]}>{text}</Text>
  )
}

Title.defaultProps = {
  text: 'title'
}

export default React.memo(Title)

const styles = StyleSheet.create({
    title:{
        fontSize: 32,
        color:'#4681A3',
        fontWeight: 'bold'
    }
})