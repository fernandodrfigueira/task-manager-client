import './App.css';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from './scenes/LoginPage/LoginPage';
import HomePage from './scenes/HomePage/HomePage';

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
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
