import * as React from "react";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./styles/styles.css";

import { TableInputs } from "./components/table-inputs";
import { TableResults } from "./components/table-results";

function App() {
  const [weight, setWeight] = React.useState(0);
  const [reps, setReps] = React.useState(0);

  return (
    <div className="App">
      <p>
        Please note, this is not 100% accurate and is only a projection using
        calculations.
      </p>
      <TableInputs
        weight={weight}
        setWeight={setWeight}
        reps={reps}
        setReps={setReps}
      />

      <TableResults reps={reps} weight={weight} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

setInterval(() => {
  reportWebVitals(console.log);
}, 10000);
