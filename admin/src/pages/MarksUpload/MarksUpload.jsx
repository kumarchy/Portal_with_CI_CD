import React, { useEffect, useState } from 'react'
import './MarksUpload.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const MarksUpload = () => {
  const url="http://localhost:4000";

  const [data,setData]=useState({
    class:"",
    roll_number:"",
    subject:"",
    full_marks:"",
    pass_marks:"",
    obtained_marks:"",
    remarks:""
  })

  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    setData(data=>({...data,[name]:value}));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    const response = await axios.post(`${url}/api/marks/add`, data);
    
    if (response.data.success) {
      setData({
        class: "",
        roll_number: "",
        subject: "",
        full_marks: "",
        pass_marks: "",
        obtained_marks: "",
        remarks: ""
      });
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  
  return (
    <div className='marks-detail'>
    <form onSubmit={onSubmitHandler}>
    <div className='marks-input'>
    <label htmlFor="">
        <p>Class: </p>
        <select required onChange={onChangeHandler} name='class' value={data.class}>
              <option value="">Select Class</option>
              <option value="Eleven">Eleven</option>
              <option value="Twelve">Twelve</option>
        </select>
      </label>
     <label htmlFor="">
       <p>Roll Number: </p>
     <input type="number" placeholder='Enter Roll Number' onChange={onChangeHandler} value={data.roll_number} name='roll_number' required />
     </label>
    </div>

    <div className='marks-input'>
     <label htmlFor="">
       <p>Subject: </p>
     <input type="text" placeholder='Enter Subject'
     onChange={onChangeHandler} value={data.subject} name='subject' required/>
     </label>
     <label htmlFor="">
       <p>Full Marks: </p>
     <input type="number" placeholder='Enter Full Marks' onChange={onChangeHandler} value={data.full_marks} name='full_marks' required/>
     </label>
    </div>
   
    <div className='marks-input'>
     <label htmlFor="">
       <p>Pass Marks: </p>
     <input type="number" placeholder='Enter Pass Marks' onChange={onChangeHandler} value={data.pass_marks} name='pass_marks' required/>
     </label>
     <label htmlFor="">
       <p>Obtained Marks: </p>
     <input type="number" placeholder='Enter Obtained Marks' onChange={onChangeHandler} value={data.obtained_marks} name='obtained_marks' required/>
     </label>
    </div>

    <div className='marks-input'>
     <label htmlFor="">
       <p>Remarks: </p>
     <input type="text" placeholder='Enter Remarks' onChange={onChangeHandler} value={data.remarks} name='remarks' required/>
     </label>
    </div>

    <div className='marks-submit'>
      <button className='marks-submit-btn'>Submit</button>
    </div>
    </form>
   </div>
  )
}

export default MarksUpload;