import "./App.css";
import Header from "./Header";
import AddTask from "./AddNewTask";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
