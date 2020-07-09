import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { title: "lancer le lave vaisselle", status: false },
    { title: "sortir le chien", status: false },
    { title: "laver la voiture", status: true },
  ]);

  const [newTaskInput, setTaskInput] = useState("");

  return (
    <div className="content">
      <h1>Todo list</h1>

      {tasks.map((task, index) => {
        return (
          <div>
            <input
              checked={task.status}
              type="checkbox"
              onClick={() => {
                const newTasks = [...tasks];
                newTasks[index].status = !newTasks[index].status;
                setTasks(newTasks);
              }}
            />
            <span key={index} className={task.status === true ? "checked" : ""}>
              {task.title}
            </span>
            <button
              onClick={() => {
                const newTasks = [...tasks];
                newTasks.splice(index, 1);
                setTasks(newTasks);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTasks = [...tasks];
          newTasks.push({ title: newTaskInput, status: false });
          setTasks(newTasks);
          setTaskInput("");
        }}
      >
        <input
          placeholder="ecrire une tache"
          type="text"
          value={newTaskInput}
          onChange={(event) => {
            setTaskInput(event.target.value);
          }}
        />
        <button type="submit">AJOUTER</button>
      </form>
      {setTaskInput}
    </div>
  );
}

export default App;
