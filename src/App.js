import React from "react";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div>
      <Header />
      <InputBar></InputBar>
      <TaskList></TaskList>
    </div>
  );
};

export default App;
