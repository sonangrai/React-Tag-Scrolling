import React from "react";
import ReactDOM from "react-dom";
import TagSlider from "./TagSlider.js";
import datas from "./fruits.json";

ReactDOM.render(<TagSlider data={datas} />, document.getElementById("app"));
