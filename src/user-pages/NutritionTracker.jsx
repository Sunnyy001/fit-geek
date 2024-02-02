import React, { useState } from 'react';
import "../user-pages/nutritionTrackerStyling.css";
import { map } from 'zod';

const NutritionTracker = () => {
    console.log("Component rendered");
    const [apiData, setApiData] = useState(null);
    const [search, setSearch] = useState("");
    const [getFoodInfo, setgetFoodInfo] = useState("");

    const searchedQuery = (e) => {
        let newValue = e.target.value;
        setSearch(newValue);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clicked');
        const apiKey = 'l282OtJUfRyHbkAyMwJG16W80hSPhfw6cUodPCuc';

        try {
          const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${search}`);
          if (response.ok) {
              const data = await response.json();
              console.log(data);
              setApiData(data);
              // console.log(data.foods);
              let trackedFood = data.foods;
              setgetFoodInfo(trackedFood)
              console.log(getFoodInfo);
          } else {
              console.log("Error from fetching API data");
              setgetFoodInfo([]);
          }
      } catch (error) {
          console.log(`Error in API: ${error.message}`);
      }
  };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search Here</label>
                <input type="text" placeholder='Search here' name='search' value={search} onChange={searchedQuery} />
                <button type="submit">Submit</button>
            </form>

            <section>
            {getFoodInfo.map((item) => (
                <li key={item.fdcId}>
                  {item.description}: {item.dataType}
                </li>
              ))}
            </section>
        </>
    );
};

export default NutritionTracker;
