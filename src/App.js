import "./App.css";
import { MainMenu } from "./front/MainMenu";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { TopicsPage } from "./front/topics/TopicsPage";
import { TeacherPage } from "./front/teachersPage/TeachersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainMenu />} />
        <Route path="/teacherPage" element={<TeacherPage />} />
        <Route path="/topicsPage/:pageId" element={<TopicsPage />} />
        <Route path="/topicOne" element={"topicOne"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
