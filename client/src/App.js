import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from './scenes/LoginPage/LoginPage';
import AllTasks from './scenes/AllTasks/AllTasks';
import NewTaskPage from './scenes/NewTaskPage/NewTaskPage';



function App() {
  return (
    <div className="app">
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
              path="/new"
              element={<NewTaskPage/>}
          />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
