import CSS from "csstype";
import { useState } from "react";

export default function CalcGrade() {
  const [total, setTotal] = useState("");
  const [points, setPoints] = useState("");

  return (
    <div style={calculatorStyle}>
      <h3>Grade calculator</h3>
      <details>
        <summary>Expand to see on what statements the grading is based</summary>
        <ul>
          <li>Lowest grade is 2 - collected 0 points</li>
          <li>Highest grade is 10 - collected all the points</li>
          <li>
            All other points are contributing to the grade in the direct
            proportional manner
          </li>
        </ul>
      </details>

      <p>If I collected</p>
      <input
        placeholder="enter the number"
        onChange={(e) => setPoints(e.target.value)}
      ></input>
      <p>points out of</p>
      <input
        placeholder="enter the number"
        onChange={(e) => setTotal(e.target.value)}
      ></input>
      <p>I'm gonna get a</p>
      {Math.round((8 * Number(points)) / Number(total) + 2)}
    </div>
  );
}

const calculatorStyle: CSS.Properties = {
  border: "1px solid",
  padding: "10px",
};
