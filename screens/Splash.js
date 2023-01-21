import { View, Text,StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react';
import Button from './Button';



const Splash = ({navigation}) => {


  return (

        <ImageBackground  style={styles.background} source={require('../assets/fb.jpg')}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/chef logo.jpg')}/>
                <Text style={styles.title}>The Best Recipe</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.bigTitle}>Get </Text>
                <Text style={styles.bigTitle}>Cooking </Text>
                <Text style={styles.subTitle}>Simple way to find tasty recipe</Text>
                <Button onPress={()=>navigation.navigate('Home')}>Start Cooking</Button>
            </View>
            
        </ImageBackground>
   
   
  )
}

export default Splash


const styles = StyleSheet.create({
container:{
    paddingHorizontal: 15,
    paddingVertical: 40
},
title:{
    color:'white',
    fontSize:28,
    fontWeight: 'bold',
    textAlign: 'center'
},
logo:{
    width:80,
    height:80,
    alignSelf:'center',
    marginBottom:14
},
bigTitle:{
    fontSize:50,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'white',
    paddingHorizontal:30
},
subTitle:{
    fontSize:16,
    color:'white',
    textAlign:'center',
    marginBottom:64,
    marginTop:20
},
background:{
    width:'100',
    height:'100',
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center'
}
})