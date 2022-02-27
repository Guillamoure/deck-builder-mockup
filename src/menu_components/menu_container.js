import "./menu.scss";

import React from "react";
import { changeLocationAction } from "../utils/action_creators/game_states";

const MenuContainer = () => {
  return (
    <h1 id="menu" onClick={() => changeLocationAction("characterSelect")}>
      Start
    </h1>
  );
};

export default MenuContainer;
