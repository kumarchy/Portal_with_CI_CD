import React, { useContext, useEffect, useState } from 'react';
import './LectureVideos.css';
import { StoreContext } from '../../context/StoreContext';

const LectureVideos = ({videoUrl}) => {
  const{url}=useContext(StoreContext);

  return (
    <div className='lectureVideosDetails'>
      <div className="lectureVideosContainer">
        <iframe 
         src={url+"/lectures/"+videoUrl}
          frameBorder="0"
          title="Lecture Video"
        ></iframe>
      </div>
    </div>
  );
};

export default LectureVideos;
