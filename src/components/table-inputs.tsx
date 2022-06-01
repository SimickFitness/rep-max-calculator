import * as React from "react";

interface TableInputsInterface {
  reps: number;
  weight: number;
  setReps: (e: any) => void;
  setWeight: (e: any) => void;
}

export const TableInputs = (props: TableInputsInterface) => {
  const handleInputChange = (e: any) => {
    if (e.currentTarget.name === "inReps") {
      props.setReps(e.currentTarget.value);
    } else {
      props.setWeight(e.currentTarget.value);
    }
  };

  return (
    <div className="table-inputs">
      <fieldset>
        <label htmlFor="inWeight">Weight lifted:</label>
        <input
          name="inWeight"
          id="inWeight"
          type="number"
          defaultValue={props.weight.toString()}
          onChange={(e) => handleInputChange(e)}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="inReps">Number of reps:</label>
        <input
          name="inReps"
          id="inReps"
          type="number"
          defaultValue={props.reps.toString()}
          onChange={(e) => handleInputChange(e)}
        />
      </fieldset>
    </div>
  );
};
