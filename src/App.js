import "./App.css";
import { MainMenu } from "./front/MainMenu";
import { TeacherPage } from "./front/TeachersPage";
import * as ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { EditUsers } from "./front/EditUsers";
import { TopicsPage } from "./front/topics/TopicsPage";
import { SideNav } from "./front/SideNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainMenu />} />
        <Route path="/teacherPage" element={<TeacherPage />} />
        <Route path="/editUsers" element={<EditUsers />} />
        <Route path="/topicsPage/:pageId" element={<TopicsPage />} />
        <Route path="/topicOne" element={"topicOne"} />
        <Route path="/testTopicOne" element={"testTopicOne"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
