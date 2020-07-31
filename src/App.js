import React,{useEffect, useState} from 'react';

import './App.css';



 const App=()=>{

  const APP_KEY="1e926760"
const APP_ID="8b1c3771b036ff52a3487ffd494755f2"
 const url=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


   const [query, setQuery]=useState("");
   const [recipes, setRecipes]=useState([])

   useEffect(()=>{
    getRecipes();
   },[])

  const getRecipes=async()=>{
    const response=await fetch(url);
    const data= await response.json();
    console.log(data)
    setRecipes(data.hits)
  }
  const onClick=(e)=>{
    e.preventDefault();
    
  }
  
  const onChange=e=>{
    setQuery(e.target.value)
  }
  return (
    <div className="App">
     <h1>Food Search</h1>
     <form>
       <input type="text" onChange={onChange}/>
       <input type="submit" onClick={onClick}/>
     </form>
    </div>
  );
}

export default App;
