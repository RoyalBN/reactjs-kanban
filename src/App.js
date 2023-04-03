import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">React Kanban</div>
      <div className="container">
        <div className="add-task">
          <input type="text" placeholder="New task name" />
          <button>Create task</button>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
