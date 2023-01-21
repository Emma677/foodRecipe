import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'



const Button = ({onPress, children}) => {
  return (
   <TouchableOpacity onPress={onPress} style={styles.btn}>
    <Text style={styles.text}>{children}</Text>
   </TouchableOpacity>
  )
}

export default Button


const styles = StyleSheet.create({
btn:{
backgroundColor: 'green',
flexDirection:'column',
width:'80%',
alignItems:'center',
justifyContent:'center',
alignSelf:'center',
borderRadius:10,
padding:15
},
text:{
    color:'white',
    fontSize:16,
    fontWeight: '500'
}
})