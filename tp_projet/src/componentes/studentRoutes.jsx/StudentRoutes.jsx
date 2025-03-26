import Hello from "../hello/Hello";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "../menu/Menu";
function StudentRoutes() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="" element={<Navigate to="hello" />} />
        <Route path="hello" element={<Hello />} />
      </Routes>
    </div>
  );
}

export default StudentRoutes;
