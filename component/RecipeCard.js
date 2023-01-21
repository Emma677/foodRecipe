import { View, Text, StyleSheet,Image, Dimensions } from 'react-native'
import React from 'react'
import Rating from './Rating'
import { TouchableOpacity } from 'react-native'


const { width } = Dimensions.get('window')
const RecipeCard = ({title,style, image , author , rating, duration,onPress }) => {
  return (
   <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
        <View style={styles.row}>
            <View style={{flex: 1}}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Rating rating={rating}/>
            </View>
            <Image style={styles.image} source={{uri: image}}/>
        </View>


        <View style={ styles.footer}>
            { author ? (
                    <View style={styles.row}>
                    <Image style={styles.authorImage} source={{uri: author?.image}}/>
                    <Text style={styles.footerText}>By {author ?.name}</Text>
                </View>
                ) : <View/>
                    // <Image style={styles.authorImage} source={{uri: author?.image}}/>
                    // <Text style={styles.footerText}>By Lorem Ipsum</Text>
                    // </View>
            }
           

            {duration ? (
            <View style={styles.row}>
                <Image style={styles.timerIcon} source={require('../assets/timer2.jpg')}/>
                <Text style={styles.footerText}>{duration}</Text>
            </View> 
                ) : <View/>}


        </View>

        
   </TouchableOpacity>
  )
}


export default React.memo(RecipeCard)

const styles = StyleSheet.create({
    container:{
        borderRadius: 10,
        backgroundColor:'white',
        padding: 10,
        width: width * 0.5,
        marginBottom: 32,
        marginTop:46,
        marginRight:16,

        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation:9
    },
    title:{
        fontSize: 14,
        color:'#484848',
        fontWeight: 'bold',
        flex:1
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop:8
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    authorImage:{
       width: 25,
       height:25,
       borderRadius: 20,
       marginRight: 8,
       backgroundColor: '#D9D9D9'
    },
    footerText:{
        color: '#A9A9A9',
        fontSize:11,
    },
    timerIcon:{
        width: 17,
        height:17,
        marginRight: 8
    },
    image:{
        width: 80,
        height:80,
        borderRadius: 50,
        marginTop:-40
    }
})