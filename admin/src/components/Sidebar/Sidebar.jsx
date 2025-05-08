import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook,faVideo,faReceipt,faAward,faClipboardUser,faMoneyBill1,faRectangleList} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isVisible }) => {
  console.log("sidebar is",isVisible)
  return (
    <div className={`sidebar ${isVisible ? 'show' : ''}`}>
      <div className='sidebar-options'>
        <NavLink to='/upload-book' className='sidebar-option'>
        <FontAwesomeIcon icon={faBook} className='upload_icon'/>
          <p>Add Book</p>
        </NavLink>

        <NavLink to='/upload-lecture' className='sidebar-option'>
        <FontAwesomeIcon icon={faVideo} className='upload_icon'/>
          <p>Add Lecture</p>
        </NavLink>

        <NavLink to='/upload-marks' className='sidebar-option'>
        <FontAwesomeIcon icon={faReceipt} className='upload_icon'/>
          <p>Add Marks</p>
        </NavLink>
        
        <NavLink to='/upload-achievements' className='sidebar-option'>
        <FontAwesomeIcon icon={faAward} className='upload_icon'/>
          <p>Add achievement</p>
        </NavLink>
        
        <NavLink to='/upload-attendance' className='sidebar-option'>
        <FontAwesomeIcon icon={faClipboardUser} className='upload_icon'/>
          <p>Add Attendance</p>
        </NavLink>
       
        <NavLink to='/upload-fee' className='sidebar-option'>
        <FontAwesomeIcon icon={faMoneyBill1} className='upload_icon'/>
          <p>Add Payment</p>
        </NavLink>

        <NavLink to='/list' className='sidebar-option'>
        <FontAwesomeIcon icon={faRectangleList} className='upload_icon'/>
          <p>Data List</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
