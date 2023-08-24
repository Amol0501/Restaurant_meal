import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// import { db } from "../../firebase.config";
// import { async } from "@firebase/util";

// import { collection, getDoc, onSnapshot } from "firebase/firestore";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorHandle, setErrorHandle] = useState(false);
  useEffect(() => {
    const fetchMeals = async () => {
      const respose = await fetch("https://reactmeal-9ad94-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");

      if(!respose.ok){
        throw new Error("Something went wrong");
      }
      // console.log("Askld");

      const responseData = await respose.json();
      console.log(respose)

      const loadedMeals = [];

      for(const key in responseData){
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description : responseData[key].description,
          price: responseData[key].price
        })
      }
    
      setMeals(loadedMeals);

      setLoading(false);

    };

    
    fetchMeals().catch((error) => {
      setLoading(false);
      setErrorHandle(true);
    })
    
  }, []);
  
  // useEffect(() => {
  //   const loadedMeals = [];
  //   const fetchData = async() => {
  //     const colref = collection(db, 'Meal');
  //     await onSnapshot(colref, (snapshot) => {
  //       snapshot.docs.forEach((docs) => {
  //         loadedMeals.push({
  //           id: docs.id,
  //           name: docs.data().name,
  //         description : docs.data().description,
  //         price: docs.data().price
  //         })
  //         // console.log(loadedMeals)
  //       })
  //     })

  //     setMeals(loadedMeals);
  //     setLoading(false);
  //   }

  //   fetchData().catch((err) => {
  //     setLoading(false);
  //     setErrorHandle(true);
      
  //   });

  // }, []);

  // console.log(meals);


  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id = {meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  console.log(mealsList);



  return (
    <section className={classes.meals}>
      <Card>
        {errorHandle && <div className={classes.meal_load}>Something went wrong</div>}
        {loading && <div className={classes.meal_load}>Loading Meals ...</div>}
        {!loading && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
