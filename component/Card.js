import { View, Text, StyleSheet,Image, Dimensions } from 'react-native'
import React from 'react'
import Rating from './Rating'
import { TouchableOpacity } from 'react-native'


const { width } = Dimensions.get('window')
const Card = ({title, image ,style, servings,onPress}) => {
  return (
   <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Image style={styles.image} source={{uri : image}}/>
            <Text numberOfLines={3} style={styles.title}>{title}</Text>

            {servings ? (
                <>
                <Text style={styles.value}>{servings}</Text>
                <Text style={styles.label}>servings</Text>
                </>
            ): null
            }
    
   </TouchableOpacity>
  )
}


export default React.memo(Card)

const styles = StyleSheet.create({
    container:{
        borderRadius: 12,
        backgroundColor:'rgba(217,217,217,0.5)',
        padding: 10,
        width: width * 0.4,
        marginTop: 60,
        marginVertical: 32,
        marginTop: 80,
        marginRight:16,
    },
    title:{
        fontSize: 14,
        color:'#484848',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    label:{
        color: '#A9A9A9',
        fontSize:11,
        marginTop:8,
        marginBottom:4
    },
    value:{
        color: '#484848',
        fontSize:11,
        fontWeight: 'bold'
    },

    image:{
        width: 100,
        height:100,
        borderRadius: 50,
        marginTop:-60,
        alignSelf:'center'
        
    }
})