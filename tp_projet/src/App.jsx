//import { useState } from 'react'
import Hello from "./componentes/hello/Hello";
import StudentRoutes from "./componentes/studentRoutes.jsx/StudentRoutes";

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
import TeacherRoutes from "./componentes/teacherRoutes/TeacherRoutes";
import Login from "./pages/login/Login";
import { useEffect } from "react";
import { useState } from "react";
import { me } from "./services/tasks3.service";
import { createContext } from "react";
export const UserContext = createContext();

function App() {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const user = await me();
        setUser(user);
        console.log("user: ", user);
      } catch (e) {}
    };
    if (token) {
      fetchMe();
    }
  }, []); // yemchy le return wba3ed yerja3  use effect

  if (token && user.role == "admin") {
    return (
      <UserContext.Provider value={user}>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/teachers" />} />
              <Route path="/teachers" element={<TeacherRoutes />}>
                <Route path="" element={<Navigate to="tasks" />} />
                <Route path="tasks" element={<TaskPages />} />
                <Route path="tasks/id" element={TaskDetails}></Route>
              </Route>
            </Routes>
          </Router>
        </div>
      </UserContext.Provider>
    );
  }

  if (token && user.role == "user") {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/students/*" element={<StudentRoutes />} />
          </Routes>
        </Router>
      </div>
    );
  }
  if (!token) {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }

  return <div>loading .. </div>;
}

export default App;
