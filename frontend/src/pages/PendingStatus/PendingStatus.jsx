import React from 'react'
import './PendingStatus.css';

const PendingStatus = () => {
  return (
    <div className='pendingStatus'>
     <div className='pendingContainer'>
      <div className='pendingDate'>
      <label>Date:
        <select>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
      </label>
      <button className='pending-btn'>Enter</button>
      </div>

      <table className='pendingTable'>
      <thead className='pendingHeading'>
        <tr>
          <th>Year</th>
          <th>Month</th>
          <th>Total Monthly Fee</th>
          <th>Pending Fee</th>
        </tr>
      </thead>
      <tbody className='pendingData'>
        <tr>
          <td>2020</td>
          <td>January</td>
          <td>2000</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>February</td>
          <td>2000</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>March</td>
          <td>2000</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>April</td>
          <td>2000</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>April</td>
          <td>2000</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>April</td>
          <td>2000</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2020</td>
          <td>April</td>
          <td>2000</td>
          <td>0</td>
        </tr>
        
      </tbody>
      </table>
     </div>
    </div>
  )
}

export default PendingStatus;