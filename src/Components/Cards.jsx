import React from "react";

const getGradientBarStyle = (from, to) => ({
  background: `linear-gradient(to right, ${from}, ${to})`,
});

const Card = ({ name, animal, founder, gradientFrom, gradientTo }) => {
  const gradientBarStyle = getGradientBarStyle(gradientFrom, gradientTo);

  return (
    <div className="w-[60vw] h-36 mt-10 border border-gray-300 shadow-md rounded-lg p-4 mx-auto">
      {/* Heading */}
      <div className="flex justify-between mx-5 mt-1">
        <h2 className="font-bold text-2xl text-left">{name}</h2>
        <p className="text-right">{animal}</p>
      </div>

      {/* Gradient bar */}
      <div className="w-90 h-5 rounded-md mx-5 my-3" style={gradientBarStyle}></div>
      
      {/* founder */}
      <p className="text-start ml-5">
        Founder: <strong>{founder}</strong>
      </p>
    </div>
  );
};

export default Card;
