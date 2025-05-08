import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import List from './pages/List/List';
import BookUpload from './pages/BookUpload/BookUpload';
import LectureUploads from './pages/LectureUploads/LectureUploads';
import AttendanceUpload from './pages/AttendanceUpload/AttendanceUpload';
import AchievementUpload from './pages/AchievementUpload/AchievementUpload';
import MarksUpload from './pages/MarksUpload/MarksUpload';
import FeeUpload from './pages/FeeUpload/FeeUpload';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";

  const [displaySideBar, setDisplaySideBar] = useState(false);

  const showSideBar = (condition) => {
    setDisplaySideBar(condition);
  };
 

  return (
    <div>
      <ToastContainer/>
      <Navbar showSideBar={showSideBar} />
      <hr />
      <div className='app-content'>
        <Sidebar isVisible={displaySideBar} />
        <Routes>
          <Route path='/list' element={<List url={url}/>} />
          <Route path='/upload-book' element={<BookUpload url={url}/>} />
          <Route path='/upload-lecture' element={<LectureUploads url={url}/>} />
          <Route path='/upload-marks' element={<MarksUpload/>} />
          <Route path='/upload-achievements' element={<AchievementUpload />} />
          <Route path='/upload-attendance' element={<AttendanceUpload />} />
          <Route path='/upload-fee' element={<FeeUpload/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
