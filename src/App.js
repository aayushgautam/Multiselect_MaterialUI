import Simpleselect from "./Simpleselect/Simpleselect";
import Multiselectautocomplete from "./Multiselectautocomplete/Multiselectautocomplete";
import Multiselect from "./Multiselect/Multiselect";

import "./App.scss";
import { useState } from "react";

const optionsArr = [
  { label: "Car", value: "car" },
  { label: "Bus", value: "bus" },
  { label: "Bi-cycle", value: "bi-cycle" },
  { label: "Air Plane", value: "air-plane" },
];

function App() {
  const [dataState, setDataState] = useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    // debugger;
    setDataState(event.target.value);
  };

  return (
    <div className="App">
      <div className="simple-select">
        <Simpleselect name="" value="" onChange="" />
      </div>
      <div className="multi-select-autocomplete">
        <Multiselectautocomplete
          name="transport"
          value={optionsArr[0]}
          options={optionsArr}
          // onChange={handleChange}
        />
      </div>
      <div className="multi-select-checked">
        <Multiselect
          name="tansport"
          value={dataState}
          options={optionsArr}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
