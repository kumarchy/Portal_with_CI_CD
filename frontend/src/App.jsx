import React, { useState, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import LectureCollection from "./pages/LectureCollection/LectureCollection";
import LectureDashboard from "./pages/LectureDashboard/LectureDashboard";
import LectureVideos from "./pages/LectureVideos/LectureVideos";
import Dashboard from "./pages/Dashboard/Dashboard";
import PaymentDetails from "./pages/PaymentDetails/PaymentDetails";
import MarkDetails from "./pages/MarkDetails/MarkDetails";
import VisitPdf from "./pages/VisitPdf/VisitPdf";
import { StoreContext } from "./context/StoreContext";
import PendingStatus from "./pages/PendingStatus/PendingStatus";
import Achievement from "./pages/Achievement/Achievement";
import Attendance from "./pages/Attendance/Attendance";

const App = () => {
  const [profileImage, setProfileImage] = useState('');

  const {
    showLogin,
    setShowLogin,
    loginType,
    setLoginType,
    handleShowLogin,
    loginNavigatePage,
    lectureView,
    checkNotes
  } = useContext(StoreContext);

  return (
    <>
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          type={loginType}
          loginNavigate={loginNavigatePage}
        />
      )}

      <div className="app">
        <Navbar profileImage={profileImage} setProfileImage={setProfileImage} setShowLogin={handleShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login loginNavigate={loginNavigatePage}/>} />
          <Route path='lectureCollection' element={<LectureCollection lectureView={lectureView}/>} />
          <Route path='/lectureDashboard' element={<LectureDashboard checkNotes={checkNotes}/>} />
          <Route path='/lectureVideos' element={<LectureVideos/>} />
          <Route path='/visitPdf' element={<VisitPdf/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/paymentDetails' element={<PaymentDetails />} />
          <Route path='/markDetails' element={<MarkDetails />} />
          <Route path='/pendingStatus' element={<PendingStatus />} />
          <Route path='achievement' element={<Achievement/>} />
          <Route path="attendance" element={<Attendance/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
