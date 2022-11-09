import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [stateOne, setStateOne] =
    useState(0);
  const [stateTwo, setStateTwo] =
    useState(0);

  const handleAddOneToCounter = () => {
    setStateOne(stateOne + 1);
  };

  const handleSubtractOneFromCounter = () => {
    setStateOne(stateOne - 1);
  };

  const handleStoreCurrentCount = () => {
    setStateTwo(stateOne);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>Your stored number: {stateTwo}</p>
      <p>Counter: {stateOne}</p>
      <button onClick={handleSubtractOneFromCounter}>-1</button>
      <button onClick={handleAddOneToCounter}>+1</button>
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
