import React, { useState, useEffect } from "react";

function Button() {
  const [taskList, setTaskList] = useState(false);

  function addText() {
    let ol = document.getElementById("taskList");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskList));
    ol.appendChild(li);
  }

  useEffect(() => {
    setTaskList(document.getElementById("inputText").value);
  }, []);

  return (
    <div>
      <button onClick={addText}>Add</button>
    </div>
  );
}

export default Button;
