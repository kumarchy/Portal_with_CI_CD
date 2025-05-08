import React from 'react';
import './MarkDetails.css';

const MarkDetails = () => {
  return (
    <div className='marksDetails'>
      <div className='marksContainer'>
        <div className='marksSelectOpton'>
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
        <button className='marksEnter-btn'>Enter</button>
        <div className='marksTable'>
          <table className='marks-status-table'>
            <thead>
              <tr>
                <th>Subjects</th>
                <th>Full Marks</th>
                <th>Pass Marks</th>
                <th>Obtained Marks</th>
                <th>Remarks</th> 
              </tr>
            </thead>
            <tbody className='marks-table-data'>
              <tr>
                <td>Social Studies</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>Chemistry</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>Physics</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>Math</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>English</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>English</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>English</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>English</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>English</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>English</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>English</td>
                <td>100</td>
                <td>60</td>
                <td>70</td>
                <td>Pass</td>
              </tr>
 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarkDetails;
