import React, { useState, useEffect } from 'react';
import Card from './Cards';

function HouseList() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://wizard-world-api.herokuapp.com/houses');
        const data = await response.json();
        setHouses(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  return (
    <div>
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div>
          {houses.map((house) => (
            <Card
              key={house.id}
              name={house.name}
              animal={house.animal}
              founder={house.founder}
              gradientFrom={getColorFromHouseColours(house.houseColours, 'from')}
              gradientTo={getColorFromHouseColours(house.houseColours, 'to')}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Colors 
const colors = {
  red: "#ff0000",
  yellow: "#ffff00",
  blue: "#0000ff",
  orange: "#ffa500",
  white: "#ffffff",
  scarlet: "#ff2400",
  gold: "#ffd700",
  bronze: "#cd7f32",
  black: "#000000",
  grey: "#808080",
  silver: "#c0c0c0",
  green: "#008000",
};

// Utility function to extract colors from houseColours
const getColorFromHouseColours = (houseColours, type) => {
  const colorsArray = houseColours.split(' and ');
  const colorFrom = colors[colorsArray[0].toLowerCase()] || colors.white; // Default to white
  const colorTo = colors[colorsArray[1].toLowerCase()] || colors.black;  // Default to black

  return type === 'from' ? colorFrom : colorTo;
};

export default HouseList;
