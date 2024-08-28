import React from "react";
import Button from "./Button/Button";

export default function App() {
  let arr = ["allo", "loki", "tamatar"];

  return (
    <>
      <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Button title="Login" />
    </>
  );
}
