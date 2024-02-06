import React, { useState } from 'react';
import "../user-pages/nutritionTrackerStyling.css";

const NutritionTracker = () => {
    console.log("Component rendered");
    const [apiData, setApiData] = useState(null);
    const [search, setSearch] = useState("");
    // const [getFoodInfo, setgetFoodInfo] = useState("");

    const searchedQuery = (e) => {
        let newValue = e.target.value;
        setSearch(newValue);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clicked');

        try {
        const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-app-id': '240b598c',
                'x-app-key': '246464e848f6edcfd6c3ea1578876791'
            },
            body: JSON.stringify({
                "query": "muesli" // Use search directly
            })
        });

        if (response.ok) {
            const data = await response.json();
            setApiData(data);
            console.log(data); // Log the resolved data, not the state variable
        } else {
            console.log("Error from fetching API data");
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

            </section>
        </>
    );
};

export default NutritionTracker;
