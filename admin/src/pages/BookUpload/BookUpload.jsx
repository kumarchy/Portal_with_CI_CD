import React, { useState, useEffect } from "react";
import "./BookUpload.css";
import { assets } from "../../assets/assets";
import axios from 'axios';
import { toast } from "react-toastify";

const BookUpload = ({url}) => {

  const [book, setBook] = useState(null);
  const [data, setData] = useState({
    class: "",
    subject: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  // console.log(data);

  const onSubmitHandler=async (event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append("class",data.class);
    formData.append("subject",data.subject);
    formData.append("book",book);
    
    const response = await axios.post(`${url}/api/book/add`,formData)
    if(response.data.success){
     setData({
      class: "",
      subject: ""
     });
     setBook(null);
     toast.success(response.data.message)
    }
    else{
    toast.error(response.data.message);
    }
    
  }

  return (
    <form className="bookDetails" onSubmit={onSubmitHandler}>
      <div className="bookInput">
        <label htmlFor="class">
          <p>Class:</p>
          <select onChange={onChangeHandler} name="class" required>
            <option value="">Select ClassName</option>
            <option value="Eleven">Eleven</option>
            <option value="Twelve">Twelve</option>
          </select>
        </label>

        <label htmlFor="subject">
          <p>Subject:</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.subject}
            name="subject"
            placeholder="Enter Subject Name"
            required
          />
        </label>

        <label htmlFor="book-upload">
          <p>Upload Book:</p>
          <img src={book ? URL.createObjectURL(book) : assets.upload_area} alt="Uploaded Book"/>
          <input onChange={(e)=>setBook(e.target.files[0])} type="file" id='book-upload' name="bookImage" hidden required/>
        </label>
      </div>
      <div className="submit-book">
        <button className="book-submit-btn">Submit</button>
      </div>
    </form>
  )
}

export default BookUpload