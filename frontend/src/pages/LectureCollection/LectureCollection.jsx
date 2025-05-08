import React, { useContext, useEffect, useState } from 'react';
import './LectureCollection.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LectureCollection = ({ lectureView }) => {

  const { url, selectedClass, errorMessage, setErrorMessage, book, setBook,handleClassChange} = useContext(StoreContext);
  // const [selectedClass, setSelectedClass] = useState("Eleven"); 
  // const [errorMessage, setErrorMessage] = useState("");
  // const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.get(`${url}/api/book/get/Eleven`);
        if (response.data.success) {
          setBook(response.data.data);
          setErrorMessage("");
        } else {
          setErrorMessage("No data found for class Eleven");
        }
      } catch (error) {
        setErrorMessage("Error fetching data for class Eleven");
      }
    };
    fetchInitialData();
  }, [url]);

  const fetchClassData = async () => {
    try {
      if (!selectedClass) {
        setErrorMessage("Please select a class");
        return;
      }
      const response = await axios.get(`${url}/api/book/get/${selectedClass}`);
      if (response.data.success) {
        setBook(response.data.data);
        setErrorMessage("");
      } else {
        setErrorMessage(`No data found for class ${selectedClass}`);
      }
    } catch (error) {
      setErrorMessage("Error fetching data");
    }
  };

  // const handleClassChange = (event) => {
  //   setSelectedClass(event.target.value);
  // };

  const onHandleSubmit = () => {
    fetchClassData(); 
  };

  return (
    <div className='lectureCollectionDetails'>
      <div className='lectureCollection'>
        <div className='lectureCollection-banner'>
          <h1>Welcome</h1>
          <div className='lectureCollectionClassSelect'>
            <select className='lectureCollectionSelect' required onChange={handleClassChange} value={selectedClass}>
              <option value="">Enter the ClassName</option>
              <option value="Eleven">Eleven</option>
              <option value="Twelve">Twelve</option>
            </select>
            <button className='lectureView-btn' onClick={onHandleSubmit}>Enter</button>
          </div>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </div>

        <div className='lectureCollectionUnits'>
          {book.length > 0 && (
            book.map((item, index) => (
              <div className='lectureUnits' key={index}>
                <img src={url + "/lectures/" + item.book} alt="" />
                <a href="#" onClick={() => { lectureView(item.subject) }}><h3>{item.subject}</h3></a>
                <button className='lectureView-btn' onClick={() => { lectureView(item.subject) }}>View</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default LectureCollection;
