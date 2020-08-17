import React from "react";
import Graph from "../../../components/Graph/Graph";

export default function BubbleSortUI({ array, setArray, bubbleSort }) {
  return (
    <div style={{flex: 1, flexDirection: "column"}}>
      <Graph array={array} />
      <button onClick={bubbleSort}>Sort</button>
    </div>
  );
}
