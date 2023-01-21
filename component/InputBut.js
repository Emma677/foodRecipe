import React from 'react'
import { View, Text, TextInput, Image, Pressable,StyleSheet } from 'react-native'


const InputBut = ({showSearchIcon, pressable, onPress,style, ...props}) => {

    const renderInput = () =>(
        <View style={[styles.container, style]}>
        {showSearchIcon ? (
            <Image style={styles.icon} source={require('../assets/SEARCH.png')} />
        ): null}
        <TextInput {...props} editable={!pressable} placeholderTextColor={'#D9D9D9'} style={styles.input} />
   </View>
    )
    if(pressable){
        return(
            <Pressable onPress={onPress}>
                {renderInput()}
            </Pressable>
        )
    }
  return renderInput()
}


InputBut.defaultProps ={
    placeholder: 'search for recipe',
    showSearchIcon: true
}

export default React.memo(InputBut)

const styles = StyleSheet.create({
container:{
    flexDirection: 'row',
    alignItems:'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    padding:10,
    marginVertical: 16
},
input:{
    color:'black',
    fontSize: 14,
    flex:1
},
icon:{
    width:16,
    height: 16,
    marginRight: 16
}
})