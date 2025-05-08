import React from 'react';
import './Attendance.css';

const Attendance = () => {
  return (
    <div className='attendanceDetails'>
      <div className='attendanceContainer'>
        <div className='attendanceSelectOption'>
          <select>
            <option value="Class">Select Class Name</option>
            <option value="Eleven">Eleven</option>
            <option value="Twelve">Twelve</option>
          </select>

          <select>
            <option value="RollNumber">Select RollNumber</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button className='attendanceEnter-btn'>Enter</button>

        <div className='attendanceTableContainer'>
          <table className='attendanceTable'>
            <thead>
              <tr>
                <th><p>Date</p></th>
                <th><p>Day</p></th>
                <th><p>Class 1</p></th>
                <th><p>Class 2</p></th>
                <th><p>Class 3</p></th>
                <th><p>Class 4</p></th>
                <th><p>Class 5</p></th>
                <th><p>Class 6</p></th>
                <th><p>Class 7</p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11/9/2024</td>
                <td>Sun</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Mon</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Tue</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Wed</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Thu</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Fri</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Sat</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Sun</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Mon</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Tue</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Wed</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Thu</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Fri</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
              <tr>
                <td>11/9/2024</td>
                <td>Sat</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
                <td>P</td>
              </tr>
            </tbody>
          </table>
          <div className='attendance-percentage'>
          <p>Present % : 55%</p>
          <p>Absent % : 45%</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
