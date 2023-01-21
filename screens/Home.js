import { View, Text, SafeAreaView ,StyleSheet, FlatList} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import InputBut from '../component/InputBut'
import RecipeCard from '../component/RecipeCard'
import Categories from '../component/Categories'
import Title from '../component/Title'
import Card from '../component/Card'
import { HealthyRecipesContext, RecipesContext } from '../App'



const Home = ({navigation}) => {
  const [tags, setTags]= useState([])
  const [selectedTags, setSelectedtags]= useState()
  const { healthyrecipes } = useContext(HealthyRecipesContext)
  const { recipes } = useContext(RecipesContext) 

    useEffect(()=>{
      const tagsList = [];
      
      recipes?.forEach(recipe => {
        recipe?.tags.forEach(tag =>{
          if(!tagsList ?.includes(tag?.name)){
            tagsList.push(tag?.name)
          }
        })
      });
      setTags(tagsList)
    }, [recipes])

  return (
    <SafeAreaView style={styles.background}>
        <InputBut pressable onPress = {() => navigation.navigate('Search')}/>

        <Title text='featured recipe' />

        <FlatList 
          horizontal
          data={healthyrecipes}
          style={{ marginHorizontal: -24 }}
          keyExtractor={item => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) =>
            <RecipeCard
            style ={index === 0 ? {marginLeft: 24}: {}}
          title={item?.name}
          duration={item?.cook_time_minutes}
          image={item?.thumbnail_url}
          rating={item?.user_ratings?.score}
          author={item?.credits?.length ? {name:item?.credits[0]?.name, image:item?.credits[0]?.image_url} : null}
        />
        
        }
        />

 <Categories categories = {tags} selectedCategory = {selectedTags} onCategoryPress = {() => {setSelectedtags}}/>

        <FlatList 
          horizontal
          data={recipes}
          style={{marginHorizontal: -24}}
          keyExtractor={item => String(item?.id)}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) =>
          <Card
          style ={index === 0 ? {marginLeft: 24}: {}}
        title={item?.name}
        servings={item?.num_servings}
        image={item?.thumbnail_url}
        rating={item?.user_ratings?.score}
        author={item?.credits?.length ? {name:item?.credits[0]?.name, image:item?.credits[0]?.image_url} : null}
      />
      
      }
        />

        
       
    </SafeAreaView>
  )
}

export default Home

const styles= StyleSheet.create({
  background:{
     paddingHorizontal: 24
  }
})