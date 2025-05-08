import React, { useContext, useState } from 'react';
import './LectureDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars, FaTimes } from "react-icons/fa";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LectureVideos from '../LectureVideos/LectureVideos';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

// Utility function to capitalize the first letter of each word
const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, char => char.toUpperCase());
};

// Utility function to group lessons by unit
const groupByUnit = (units) => {
  return units.reduce((acc, item) => {
    const unitName = capitalizeWords(item.unitName);
    if (!acc[unitName]) {
      acc[unitName] = [];
    }
    acc[unitName].push(item);
    return acc;
  }, {});
};

const LectureDashboard = ({ checkNotes }) => {
  const [showBar, setShowBar] = useState(false);
  const [searchUnit, setSearchUnit] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { url, selectedTopic, handleLessonClick, searchInput, toggleLectureUnits, toggleNoteUnits, handleSearchInput, showLectures, showNotes} = useContext(StoreContext);

  // Handle the search for lessons/units
  const onSearchUnits = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${url}/api/lecture/search/${searchInput}`);
      if (response.data.success) {
        setSearchUnit(response.data.data);
        setErrorMessage("");
      }
    } catch (error) {
      setErrorMessage("There is no data found");
      setSearchUnit([]);
    }
  };

  // Group lessons by unit name
  const groupedUnits = groupByUnit(searchUnit);

  return (
    <div className='lectureDashboardDetails'>
      <div className='formArea'>
      {/* Sidebar for search and navigation */}
      <FaBars className='lecturebar' onClick={() => setShowBar(true)} />
      <form className={`lectureDashboard ${showBar ? 'show' : ''}`} onSubmit={onSearchUnits}>
        <label>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='lectureSearch_icon' />
          <input type="text" placeholder='Search Lessons' onChange={handleSearchInput} />
          <FaTimes onClick={() => setShowBar(false)} className='lectureCrossbar' />
        </label>

        <div className='lectureDashboard-buttons'>
          <button type="button" className='lectureDashboard-btn' onClick={toggleLectureUnits}>
            Lessons
          </button>

          {errorMessage && <p>{errorMessage}</p>}

          {showLectures && Object.keys(groupedUnits).length > 0 && (
            <div className='lectureUnitsName'>
              {Object.keys(groupedUnits).map((unitName, index) => (
                <div key={index}>
                  <p className='unitsHeading'>{unitName}</p>
                  <details>
                    <summary>Learn</summary>
                    {groupedUnits[unitName].map((item, lessonIndex) => (
                      <button 
                        onClick={() => handleLessonClick(item.lectureVideo)} 
                        key={lessonIndex}>
                        {capitalizeWords(item.topicName)}
                      </button>
                    ))}
                  </details>
                </div>
              ))}
            </div>
          )}

          {/* Notes section */}
          <button type="button" className='lectureDashboard-btn' onClick={toggleNoteUnits}>
            Notes
          </button>

          {showNotes && Object.keys(groupedUnits).length > 0 && (
            <div className='lectureUnitsName'>
              {Object.keys(groupedUnits).map((unitName, index) => (
                <div key={index}>
                  <p className='unitsHeading'>{unitName}</p>
                  {groupedUnits[unitName].map((item, noteIndex) => (
                    <button key={noteIndex} onClick={() => checkNotes(item.lectureNote)}>
                      {capitalizeWords(item.lectureNote)}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
      </div>
      {/* Video player */}
      {selectedTopic && (
        <div>
          <LectureVideos videoUrl={selectedTopic} />
        </div>
      )}
    
    </div>
  );
};

export default LectureDashboard;
