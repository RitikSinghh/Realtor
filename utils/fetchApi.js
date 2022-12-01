 import axios from 'axios';
 export const baseUrl='https://bayut.p.rapidapi.com'
 export const fetchApi=async(url)=>{
    const {data}=await axios.get((url),{
        headers:{
            'X-RapidAPI-Key': '756bee0cf8mshdd36a861925d94bp1b5318jsnf439a08c835f',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        
        }
        
    })
    return data;
 }

 