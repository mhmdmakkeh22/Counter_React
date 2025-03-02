import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import "../style.css"
const Meals = () => {
    const [meals , setMeals] = useState([])
    useEffect(()=>{

         axios
         .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
         .then((res)=>{
            //console.log(res.data.meals)
            setMeals(res.data.meals)
         })
    },[])
    const itemslist = meals.map(({ strMeal, strMealThumb, idMeal }) => {
      return (
        <section className="card">
          <img src={strMealThumb} />
          <section className="content">
            <p>{strMeal}</p>
            <p>#{idMeal}</p>
          </section>
        </section>
      );
    });
  return (
    <div className="items-container">{itemslist}</div>
  )
}

export default Meals