import 'react-native-gesture-handler'
import { Image, Pressable, StyleSheet} from 'react-native';
import Splash from './screens/Splash';
import Home from './screens/Home';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './screens/Search';
import React,{ useState } from 'react';
import { useEffect } from 'react';
import { getRecipesList } from './http';




const Stack = createStackNavigator();
export const RecipesContext = React.createContext();
export const HealthyRecipesContext = React.createContext();


const BackPress =(props) =>{
  console.log('props: >>', props)
  return(
    <Pressable onPress={props.onPress}>
    <Image style={styles.back} source={require('./assets/back.png')}/>
  
   </Pressable>
  )
 
}

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: '#ffffff'
  }
}

export default function App() {
  const [recipes,setRecipes] = useState([]);
  const [healthyrecipes,setHealthyRecipes] = useState([]);

  useEffect(()=>{
    (async () => {
      const rec = await handleRecipesFetch(null, '15')
      setRecipes(rec)
      const HealthyRec= await handleRecipesFetch('healthy', '5')
      setHealthyRecipes(HealthyRec)
    })()
  }, [])


const handleRecipesFetch = async (tags, size) =>{
  try{
      const recipes = await getRecipesList(tags, size)
      return recipes?.data?.results
  }catch(e){
      console.log('error fetching recipies', e)
  } 
}



  return (
<HealthyRecipesContext.Provider value={{healthyrecipes, setHealthyRecipes}}>
  <RecipesContext.Provider value={{recipes,setRecipes}}>
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerShadowVisible: false}}>
         <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>  
          <Stack.Screen name='Home' component={Home} options={{headerLeft: null, gestureEnabled: false}}/>
          <Stack.Screen name='Search' component={Search} options={{headerLeft: (props)=> <BackPress {...props}/>}}/>
      </Stack.Navigator>
    </NavigationContainer>
  </RecipesContext.Provider>
</HealthyRecipesContext.Provider>
    
  );
}

const styles = StyleSheet.create({
  back: {
   width:36,
   height:36,
   margin: 16
  },
});







