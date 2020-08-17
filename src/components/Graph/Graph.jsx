import React from "react";
import "./Graph.scss";
export default function Graph({ array }) {
  return (
    <div className="graph-wrapper">
      <div className="graph">
        {array.map((item, index) => {
          return (
            <div
              key={index}
              className="graph-bar"
              style={{ height: `${item}px` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
