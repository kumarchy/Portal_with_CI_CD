import React from 'react'
import './Home.css';

// import { MdOutlineLocationOn } from "react-icons/md";
// import { CgMailOpen } from "react-icons/cg";

const Home = () => {
  return (
    <div className='school'>
    <div className='school-pic'>
    <div className="container">
          <h1 className="schoolName">
            BALMIKI INTERNATIONAL
            <br className="plus2" />
            SCHOOL +2 DIVISION
          </h1>
          <h1 className="heading">Enlightenment Through Education</h1>
          <h4 className="qualityMessage">
            A quality-driven institution in Dhangadhi, Kailali, Nepal,
            <br /> offering holistic education for student success. With a{" "}
            <br /> focus on values and modern facilities, we prepare our <br />{" "}
            students for a rapidly changing world.
          </h4>
          <h4 className="coreValues">Core Values</h4>
          <li className="values">
            <p>Integrity</p>
            <p>Collaboration</p>
            <p>Empathy</p>
          </li>
          <li className="values">
            <p>Inclusivity</p>
            <p>Creativity</p>
            <p>Responsibility</p>
          </li>
          <p className="contact">
          <i className="fa-solid fa-location-dot"></i>
            <label>Hasanpur, Dhangadi-5, Kailali, Nepal </label>
            <br />
            <label >balmikiintlschool@gmail.com</label>
          </p>
        </div>
    </div>
    </div>
  )
}

export default Home;
