import React, { useState, useEffect } from 'react';
import Card from './Card';

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
        <div>Loading...</div>
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

// Utility function to extract colors from houseColours
const getColorFromHouseColours = (houseColours, type) => {
  const colors = houseColours.split(' and ');
  return type === 'from' ? colors[0] : colors[1];
};

export default HouseList;
