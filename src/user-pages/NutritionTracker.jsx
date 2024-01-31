import React, { useEffect, useState } from 'react';
import "../user-pages/nutritionTrackerStyling.css";

const NutritionTracker = () => {
    console.log("Component rendered");
    const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchNutritionixAPI = async () => {
      try {
        const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-app-id': '240b598c',
            'x-app-key': '246464e848f6edcfd6c3ea1578876791'
          },
          body: JSON.stringify({
            "query": "grape"
          })
        });

        if (response.ok) {
          const data = await response.json();
          setApiData(data);
          console.log(apiData);
        } else {
          console.log("Error from fetching API data");
        }
      } catch (error) {
        console.log(`Error in API: ${error.message}`);
      }
    };

    fetchNutritionixAPI(); // eslint-disable-next-line
  }, []); 

  return (
    <h1>hello</h1>
  );
};

export default NutritionTracker;
