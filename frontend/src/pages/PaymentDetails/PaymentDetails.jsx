import React from 'react';
import './PaymentDetails.css';

const PaymentDetails = ({ setPending }) => {
  return (
    <div className='paymentDetails'>
      <div className='paymentContainer'>
        <div className='paymentSelectOpton'>
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
        <button className='paymentEnter-btn'>Enter</button>
        <div className='paymentTable'>
          <table className='payment-status-table'>
            <thead>
              <tr>
                <th>Roll No.</th>
                <th>Student Name</th>
                <th>Parent Name</th>
                <th>Payment Status</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Chandra Chaudhary</td>
                <td>Kiran Chaudhary</td>
                <td>Pending</td>
                <td>9848351256</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <button className='pendingLink' onClick={() => setPending('pendingStatus')}>
          Pending Status
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
