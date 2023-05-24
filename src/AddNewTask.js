import React from "react";

const AddNewTask = () => {
  let inputValue = document.getElementById("inputText").value;
  console.log(inputValue);
};

const AddTask = () => {
  return (
    <div>
      <input type="text" id="inputText"></input>
      <button id="addButton" onClick={AddNewTask}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
