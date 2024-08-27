import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './scenes/LoginPage/LoginPage';
import TaskPage from './scenes/TaskPage/TaskPage';
import AllTasks from './scenes/AllTasks/AllTasks';
import HomePage from './scenes/HomePage/HomePage';
import NewTaskPage from './scenes/NewTaskPage/NewTaskPage';
import logo from './TaskManagerLogo.png'




function App() {
  return (
    <div className="app">

      <header className='App-header'>
          <img className="logo" src={logo} alt="Logo" />
      </header>,

      <BrowserRouter>
        <Routes>
          <Route
              path="/"
              element={<LoginPage/>}
          />
          <Route
              path="/home"
              element={<HomePage/>}
          />
          <Route
              path="/all"
              element={<AllTasks/>}
          />
          <Route
              path="/tasks/:taskId"
              element={<TaskPage/>}
          />
          <Route
              path="/new"
              element={<NewTaskPage/>}
          />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
