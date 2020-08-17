import React, { useState } from "react";
import BubbleSortUI from "./BubbleSortUI";

export default function BubbleSort(props) {
  const [array, setArray] = useState([20, 40, 10, 30, 60, 50]);
  function bubbleSort() {
    let arr = array.slice();
    let graphBars = document.getElementsByClassName("graph-bar");
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          setTimeout(() => {
            // const ar = [...arr.slice()];
            graphBars[i].style.backgroundColor = "blue";
            graphBars[i].style.height = `${arr[i]}px`;
            graphBars[j].style.backgroundColor = "blue";
            graphBars[j].style.height = `${arr[j]}px`;
            // setArray(ar);
          }, i * 1000);
        } else {
          // setTimeout(() => {
          //   for (let elem of graphBars) {
          //     elem.style.backgroundColor = "red";
          //   }
          // }, i * 1000);
        }
      }
    }
    // for (let elem of graphBars) {
    //   elem.style.backgroundColor = "red";
    // }
  }
  return <BubbleSortUI {...{ ...props, array, setArray, bubbleSort }} />;
}
