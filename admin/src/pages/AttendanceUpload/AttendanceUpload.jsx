import React, { useState, useEffect } from 'react';
import './AttendanceUpload.css';

const AttendanceUpload = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(""); // State to track selected period
  const [checked, setChecked] = useState(false); // State to track checkbox status
  const [currentDate, setCurrentDate] = useState(""); // State to hold the current date
  const [currentDay, setCurrentDay] = useState(""); // State to hold the current day

  const classPeriods = ["Period1", "Period2", "Period3", "Period4", "Period5", "Period6", "Period7"];

  useEffect(() => {
    const date = new Date(); // Get the current date
    const options = { weekday: 'long' }; // Options to get the full day name
    const dayName = date.toLocaleDateString('en-US', options); // Get the current day name
    const formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

    setCurrentDate(formattedDate); // Set the current date
    setCurrentDay(dayName); // Set the current day name
  }, []);

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value); 
    setChecked(false); 
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked); 
  };

  const showAttendance = selectedPeriod && checked; 

  return (
    <div className='attendanceDetails'>
      <div className='attendanceInput'>
        <div className='attendanceDate'>
          <label>
            <p>Date: </p>
            <input 
              type="text" 
              placeholder='Today’s Date' 
              value={currentDate} 
              readOnly 
            />
          </label>
          <label>
            <p>Day: </p>
            <input 
              type="text" 
              placeholder='Today’s Day' 
              value={currentDay} 
              readOnly 
            />
          </label>
        </div>
        <div className='attendanceCheckOption'>
          <div className='attendanceCheck'>
            <select value={selectedPeriod} onChange={handlePeriodChange}>
              <option value="">Select a Period</option>
              {classPeriods.map((period) => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
            <input
              type="checkbox"
              className='attendanceCheckbox'
              onChange={handleCheckboxChange}
              checked={checked}
              disabled={!selectedPeriod} 
            />
          </div>
          <hr />
          <div className={`attendanceSheet ${showAttendance ? 'show' : ''}`}>
            <table>
              <thead>
                <tr>
                  <th>Students Name</th>
                  <th>Roll No.</th>
                  <th>Present</th>
                  <th>Absent</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 7 }, (_, i) => (
                  <tr key={i}>
                    <td>Student {i + 1}</td>
                    <td>{i + 1}</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className={`attendanceSubmit-btn ${showAttendance ? 'show-btn' : ''}`}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceUpload;
