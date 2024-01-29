import "./App.css";
import { MainMenu } from "./front/MainMenu";
import { TeacherPage } from "./front/TeachersPage";
import * as ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainMenu />} />
        <Route path="/teacherPage" element={<TeacherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
