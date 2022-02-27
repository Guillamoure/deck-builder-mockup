import React from "react";

const hpBar = (currentHP, maxHP) => {
  let color = "green";
  let percentageHP = (currentHP / maxHP) * 100;
  color = percentageHP <= 50 && percentageHP > 25 ? "yellow" : color;
  color = percentageHP <= 25 ? "red" : color;

  return (
    <div className="health-box">
      <span
        className="green-health-bar"
        style={{
          background: `linear-gradient(to right, ${color} ${percentageHP}%, #0892D0 ${percentageHP}%, #0892D0 ${percentageHP}%, white ${percentageHP}%)`,
        }}
      />
    </div>
  );
};

export default hpBar;
