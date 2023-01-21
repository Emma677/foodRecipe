import { SafeAreaView, StyleSheet, Image} from 'react-native'
import React from 'react'
import Title from '../component/Title'

const RecipeDetails = ({ route }) => {
    const { item } = route?.params || {};

  return (
    <SafeAreaView style={styles.container}>
        <Image  style={styles.image} source={{uri: item?.thumbnail_url}} />
        <Title text={item?.name}/>
    </SafeAreaView>
  )
}

export default RecipeDetails

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 24,
    flex:1
  },
  image:{
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 12
  }
})