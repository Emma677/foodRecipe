import axios from "axios"


 export const getRecipesList = async (tags = null,size) =>{

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {from: '0', size: size || '20', tags },
  headers: {
    'X-RapidAPI-Key': '8eb9dbd05fmshbf3cc67d95c74bfp104ea5jsnde8379023b9f',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};
   return await axios.request(options) 
}