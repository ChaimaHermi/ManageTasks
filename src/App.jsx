//import { useState } from 'react'
import Hello from "./componentes/hello/Hello";
import "./App.css";
import TaskPages from "./pages/taskPages/TaskPages";
import Menu from "./componentes/menu/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TaskDetails from "./pages/taskPages/taskDetails/TaskDetails";
function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskPages />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/tasks/id" element={TaskDetails}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
