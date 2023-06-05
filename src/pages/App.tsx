import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CoursePage from "pages/CoursePage";
import Home from "pages/Home";
import Methodology from "pages/Methodology";
import Sidebar from "Sidebar";
import AddCourse from "pages/AddCourse";
import LoginPage from "./LoginPage";

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="app__body">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/courses/add" element={<AddCourse />} />
            <Route path="/methodology" element={<Methodology />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
