// import React, { useState } from 'react'; 
// import './Add.css';
// import LectureUploads from '../LectureUploads/LectureUploads';
// import FeeUpload from '../FeeUpload/FeeUpload';
// import MarksUpload from '../MarksUpload/MarksUpload';
// import AchievementUpload from '../AchievementUpload/AchievementUpload';
// import AttendanceUpload from '../AttendanceUpload/AttendanceUpload';

// const Add = () => {

//   const[upload,setUpload]=useState("");
//   console.log(upload);
 
//   return (
//     <div className='add'>
//       <div className='upload'>
//       <div className='upload-section'>
//         <button className='upload-btn' onClick={()=>setUpload("upload-lecture")}>Upload Lectures</button>
//         <button className='upload-btn' onClick={()=>setUpload("upload-fee-details")}>Upload Fee Details</button>
//         <button className='upload-btn' onClick={()=>setUpload("upload-marks")}>Upload Marks</button>
//       </div>
//       <div className='upload-section'>
//       <button className='upload-btn' onClick={()=>setUpload("achievements")}>Achievements</button>
//       <button className='upload-btn' onClick={()=>setUpload("attendance")}>Attendance</button>
//       </div>
//       </div>
//       <div>
//       {upload === "upload-lecture" ? (
//           <LectureUploads />
//         ) : upload === "upload-fee-details" ? (
//           <FeeUpload />
//         ) : upload === "upload-marks" ? (
//           <MarksUpload />
//         ) : upload === "achievements" ?(
//           <AchievementUpload/>
//         ) : upload === "attendance" ?(
//           <AttendanceUpload/>
//         ) : null
//         }
//       </div>
//     </div>
//   );
// };

// export default Add;
