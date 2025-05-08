import React, { useEffect, useState } from 'react'
import './FeeUpload.css';

const FeeUpload = () => {
  const [data,setData]=useState({
    date:"",
    class:"",
    roll_number:"",
    student_name:"",
    parent_name:"",
    phone_number:"",
    total_monthly_fee:"",
    pending_fee:"",
    payment_status:""
  })

  useEffect(()=>{
    console.log(data)
  },[data]);

  const onChangeHandler=(e)=>{
  const name=e.target.name;
  const value=e.target.value;

  setData(data=>({...data,[name]:value}));
  }

  return (
    <div className='fee-details'>
      <form >
     <div className='upload-fee-input'>
      <label htmlFor="">
      <p>Date: </p>
      <input type="date" placeholder='Enter Date' onChange={onChangeHandler} value={data.date} name='date' required/>
      </label>
      <label htmlFor="">
        <p>Class: </p>
        <select required onChange={onChangeHandler} name='class'>
              <option value="">Select Class</option>
              <option value="Eleven">Eleven</option>
              <option value="Twelve">Twelve</option>
            </select>
      </label>
     </div>

     <div className='upload-fee-input'>
      <label htmlFor="">
        <p>Roll Number: </p>
      <input type="text" placeholder='Enter Roll Number' onChange={onChangeHandler} value={data.roll_number} name='roll_number' required/>
      </label>
      <label htmlFor="">
        <p>Student Name: </p>
      <input type="text" placeholder='Enter Student Name' onChange={onChangeHandler} value={data.student_name} name='student_name' required/>
      </label>
     </div>
    
     <div className='upload-fee-input'>
      <label htmlFor="">
        <p>Parent Name: </p>
      <input type="text" placeholder='Enter Parent Name' onChange={onChangeHandler} value={data.parent_name} name='parent_name' required/>
      </label>
      <label htmlFor="">
        <p>Phone Number: </p>
      <input type="text" placeholder='Enter Phone Number' onChange={onChangeHandler} value={data.phone_number} name='phone_number' required/>
      </label>
     </div>

     <div className='upload-fee-input'>
      <label htmlFor="">
      <p>Total Monthly Fee: </p>
      <input type="text" placeholder='Enter Total Monthly Fee' onChange={onChangeHandler} value={data.total_monthly_fee} name='total_monthly_fee' required/>
      </label>
      <label htmlFor="">
        <p>Pending Fee: </p>
      <input type="text" placeholder='Enter Pending Fee' onChange={onChangeHandler} value={data.pending_fee} name='pending_fee' required/>
      </label>
     </div>

     <div className='upload-fee-input'>
      <label htmlFor="">
        <p>Payment Status: </p>
      <input type="text" placeholder='Enter Payment Status' onChange={onChangeHandler} value={data.payment_status} name='payment_status' required/>
      </label>
     </div>

     <div className='submit-fee'>
      <button className='submit-btn-fee'>Submit</button>
     </div>
     </form>
    </div>
  )
}

export default FeeUpload;