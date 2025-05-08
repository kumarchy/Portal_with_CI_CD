import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [fieldNames, setFieldNames] = useState([]);
  const [listItem, setListItem] = useState("");

  const getListItem = (list) => {
    fetchList(list);
    setListItem(list);
  };

  const fetchList = async (endpoint) => {
    try {
      const response = await axios.get(`${url}/api/${endpoint}`);
      console.log(response.data);
      const data = response.data.data;

      if (data) {
        setList(data);
        const keys = Object.keys(data[0]);
        setFieldNames(keys);
      } 
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  const removeListItem =(removeEndPoints,uploadItemId)=>{
    removeUpload(removeEndPoints,uploadItemId)
  }

  const removeUpload=async(removeEndPoints,uploadItemId)=>{
   const response=await axios.post(`${url}/api/${removeEndPoints}/remove`,{id:uploadItemId});
   
   if(response.data.success){
    toast.success(response.data.message);
    await fetchList(listItem);
   }
   else{
    toast.error("Error");
   }
  }

  useEffect(()=>{
    getListItem("book/list");
  },[])

  return (
    <div className="list add flex-col">
      <div className="list-details">
        <p className="heading">All Uploaded Details</p>

        <div className="fetch-all-data-list">
          <button
            className="fetchList-btn"
            onClick={() => getListItem("book/list")}
          >
            Books List
          </button>
          <button
            className="fetchList-btn"
            onClick={() => getListItem("lecture/list")}
          >
            Lectures List
          </button>
          <button
            className="fetchList-btn"
            onClick={() => getListItem("marks/list")}
          >
            Marks List
          </button>
          <button
            className="fetchList-btn"
            onClick={() => getListItem("achievement/list")}
          >
            Achievements List
          </button>
        </div>

        <div className="list-table">
          <div className="list-table-format">
            {fieldNames
              .filter((fieldName) => fieldName !== "_id" && fieldName !== "__v")
              .map((fieldName, index) => (
                <b key={index}>{fieldName}</b>
              ))}
          </div>

          {list.map((item, index) => {
            return (
              <div className="list-table-format" key={index}>
                {listItem === "book/list" && (
                  <>
                    <p>{item.class}</p>
                    <p>{item.subject}</p>
                    <div className="cursor-cross">
                      <img
                        className="minimize-size"
                        src={`${url}/lectures/${item.book}`}
                        alt=""
                      />
                      <p
                        className="cursor"
                        onClick={() => removeListItem("book",item._id)}
                      >
                        X
                      </p>
                    </div>
                  </>
                )}

                {listItem === "lecture/list" && (
                  <>
                    <p>{item.class}</p>
                    <p>{item.subject}</p>
                    <p>{item.unitName}</p>
                    <p>{item.topicName}</p>
                    <video
                      className="minimize-size"
                      width="250"
                      height="200"
                      controls
                    >
                      <source
                        src={`${url}/lectures/${encodeURIComponent(
                          item.lectureVideo
                        )}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className="cursor-cross">
                      <p>
                        <iframe
                          className="minimize-size"
                          src={`${url}/lectures/${encodeURIComponent(
                            item.lectureNote
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download PDF
                        </iframe>
                      </p>
                      <p
                        className="cursor"
                        onClick={() => removeListItem("lecture",item._id)}
                      >
                        X
                      </p>
                    </div>
                  </>
                )}

                {listItem === "marks/list" && (
                  <>
                    <p>{item.class}</p>
                    <p>{item.full_marks}</p>
                    <p>{item.obtained_marks}</p>
                    <p>{item.pass_marks}</p>
                    <p>{item.remarks}</p>
                    <p>{item.roll_number}</p>
                    <div className="cursor-cross">
                      <p>{item.subject}</p>
                      <p
                        className="cursor"
                        onClick={() => removeListItem("marks",item._id)}
                      >
                        X
                      </p>
                    </div>
                  </>
                )}

                {listItem === "achievement/list" && (
                  <>
                    <p>{item.student_name}</p>
                    <p>{item.roll_number}</p>
                    <p>{item.class}</p>
                    <div className="cursor-cross">
                    <img
                      className="minimize-size"
                      src={`${url}/lectures/${item.achievementImage}`}
                      alt=""
                    />
                    <p
                      className="cursor"
                      onClick={() => removeListItem("achievement",item._id)}
                    >
                      X
                    </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
