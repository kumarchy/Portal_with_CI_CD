import React, { useState, useEffect } from "react";
import "./LectureUploads.css";
import { assets } from "../../assets/assets";
import axios from 'axios';
import { toast } from "react-toastify";

const LectureUploads = ({url}) => {
  
  const [lectureVideo, setLectureVideo] = useState(null);
  const [lectureNote, setLectureNote] = useState(null);
  const [data, setData] = useState({
    class: "",
    subject: "",
    unitName: "",
    topicName:""
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler=async (event)=>{
    event.preventDefault();
    const formData=new FormData();
    formData.append("class",data.class);
    formData.append("subject",data.subject);
    formData.append("unitName",data.unitName);
    formData.append("topicName",data.topicName);
    formData.append("lectureVideo",lectureVideo);
    formData.append("lectureNote",lectureNote);

    const response = await axios.post(`${url}/api/lecture/add`,formData)
    if(response.data.success){
     setData({
      class: "",
      subject: "",
      unitName:"",
      topicName:""
     });
     setLectureVideo(null);
     setLectureNote(null);
     toast.success(response.data.message)
    }
    else{
    toast.error(response.data.message);
    }
  }

  return (
    <form className="lectureDetails" onSubmit={onSubmitHandler}>
      <div className="lectureInput">
        <div className="lecture-input">
        <label htmlFor="class">
          <p>Class:</p>
          <select onChange={onChangeHandler} name="class" required>
            <option value="">Select Class</option>
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
            placeholder="Enter Subject"
            required
          />
        </label>
        </div>
        
        <div className="lecture-input secondary">
        <label htmlFor="unitName">
          <p>Unit Name:</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.unitName}
            name="unitName"
            placeholder="Enter Unit Name"
            required
          />
        </label>

        <label htmlFor="topicName">
          <p>Topic Name:</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.topicName}
            name="topicName"
            placeholder="Enter Topic Name"
            required
          />
        </label>
        </div>
        
        <div className="video-input">
        <label htmlFor="video-upload">
          <p>Upload Video:</p>
          {lectureVideo ? (
            <video width="100" height="100" controls>
              <source src={URL.createObjectURL(lectureVideo)} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={assets.upload_area} alt="Upload video icon" className="upload_icon"/>
          )}
        </label>
        <input
          onChange={(e) => setLectureVideo(e.target.files[0])}
          type="file"
          id="video-upload"
          accept="video/*"
          hidden
          required
        />

       <label htmlFor="pdf-upload">
            <p>Upload Notes:</p>
            {lectureNote ? (
              <iframe
                src={URL.createObjectURL(lectureNote)}
                title="PDF Preview"
                width="100"
                height="100"
              >
                This browser does not support PDFs. Please download the PDF to
                view it.
              </iframe>
            ) : (
              <img src={assets.upload_area} alt="Upload notes icon" className="upload_icon" />
            )}
          </label>
          <input
            onChange={(e) => setLectureNote(e.target.files[0])}
            type="file"
            id="pdf-upload"
            accept="application/pdf"
            hidden
            required
          />
      </div>
      </div>
      <div className="submit-lecture">
        <button className="lecture-submit-btn">Submit</button>
      </div>
    </form>
  );
};

export default LectureUploads;
