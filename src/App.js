import Simpleselect from "./Simpleselect/Simpleselect";

import "./App.css";
import Multiselect from "./Multiselect/Multiselect";

const optionsArr = [
  { label: "Car", value: "car" },
  { label: "Bus", value: "bus" },
  { label: "Bi-cycle", value: "bi-cycle" },
  { label: "Air Plane", value: "air-plane" },
];

const handleChange = (event) => {
  console.log(event.value);
}

function App() {
  return (
    <div className="App">
      <div>
        <Simpleselect name="" value="" onChange="" />
      </div>
      <div>
        <Multiselect name="transport" value={optionsArr[0]} options={optionsArr} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
