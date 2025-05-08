import React, { useState } from 'react';
import './AchievementUpload.css';
import { assets } from '../../assets/assets'; 
import axios from 'axios';
import { toast } from 'react-toastify';

const AchievementUpload = () => {
  const url="http://localhost:4000";

  const [image, setImage] = useState(null);
  const [data,setData]=useState({
    student_name:"",
    roll_number:"",
    class:""
  });

  const onChangeHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
  
    setData(data=>({...data,[name]:value}));
    }
  
    const onSubmitHandler = async (event) => {
      event.preventDefault();
      
      const formData = new FormData();
      formData.append('student_name', data.student_name);
      formData.append('roll_number', data.roll_number);
      formData.append('class', data.class);
      formData.append('achievementImage', image); 
    
      try {
        const response = await axios.post(`${url}/api/achievement/add`,formData);
    
        if (response.data.success) {
          setData({
            student_name: "",
            roll_number: "",
            class: ""
          });
          setImage(null);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error("There was an error uploading the achievement!", error);
      }
    };
    

  return (
    <form className='achievementDetails' onSubmit={onSubmitHandler}>
      <div className='achievementInput'>
        <label htmlFor="">
          <p>Student Name :</p>
          <input type="text" placeholder='Enter Student Name' name='student_name' onChange={onChangeHandler} value={data.student_name}  required />
        </label>
        <label htmlFor="">
          <p>Student Roll Number:</p>
          <input type="number" placeholder='Enter Roll Number' name='roll_number' onChange={onChangeHandler} value={data.roll_number} required />
        </label>
        <label htmlFor="">
          <p>Student Class :</p>
          <select name='class' onChange={onChangeHandler} value={data.class} required>
            <option value="">Select Class</option>
            <option value="Eleven">Eleven</option>
            <option value="Twelve">Twelve</option>
          </select>
          {/* <input type="text" placeholder='Enter Class Name' name='class' onChange={onChangeHandler} value={data.class} required /> */}
        </label>
        <p>Upload Achievement :</p>
        <label htmlFor="image">
          <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Uploaded Achievement"/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' name="achievementImage" hidden required/>
      </div>
      <div className='submit-achievement'>
        <button className='achievement-submit-btn'>Submit</button>
      </div>
    </form>
  );
};

export default AchievementUpload;
