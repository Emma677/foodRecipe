import { View, Text,SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import InputBut from '../component/InputBut'
import { RecipesContext } from '../App'
import { FlatList } from 'react-native'
import Card from '../component/Card'

const Search = () => {
  const { recipes } = useContext(RecipesContext)
  const [filtered, setFiltered] = useState(recipes)
  const [keyWord, setKeyWord] = useState('')

  console.log('keyword',keyWord)

useEffect(() =>{
  if(keyWord?.length >= 2){
    const filteredItems = recipes?.filter(rec => rec?.name?.toLowerCase().includes(keyWord?.toLowerCase()))
    console.log('filtered items', filteredItems)
    setFiltered(filteredItems) 
  } else{
    setFiltered([])
  }
}, [keyWord])

  return (
    <SafeAreaView>
      <InputBut autoFocus onChangeText ={setKeyWord} value={keyWord}/>

      <FlatList
       data={filtered}
       numColumns={2}
       keyExtractor ={item =>String(item?.id) }
       renderItem={({item}) =>
       <Card
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

export default Search