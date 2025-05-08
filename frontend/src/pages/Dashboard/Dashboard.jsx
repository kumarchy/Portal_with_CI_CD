import React, { useContext } from 'react';
import './Dashboard.css';
import { MdDashboard } from "react-icons/md";
import { SiWelcometothejungle } from "react-icons/si";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrScorecard, GrAchievement } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';
import { StoreContext } from '../../context/StoreContext';

const Dashboard = () => {
  const {
    handleButtonClick,
    renderActiveComponent,
    showBar,  
    setShowBar,
  } = useContext(StoreContext);

  return (
    <>
      <div className='complete-dashboard'>
        {showBar ? (
          <FaTimes className='bar' onClick={() => setShowBar(false)} />
        ) : (
          <FaBars className='bar' onClick={() => setShowBar(true)} />
        )}

        <div className={`dashboard-container ${showBar ? 'show' : ''}`}>
          <div className='dashboard-details'>
            <div className='dashboard-logo'>
              <MdDashboard className='dashboard_logo_icon' />
              <h1>Dashboard</h1>
            </div>
            <hr />
            <div className='dashboard-buttons'>
              <button
                onClick={() => handleButtonClick('welcome')}
                className='dashboard-btn'
              >
                <SiWelcometothejungle className='logo_icon' />
                <p>Welcome</p>
              </button>
              <button
                onClick={() => handleButtonClick('paymentDetails')}
                className='dashboard-btn'
              >
                <RiSecurePaymentLine className='logo_icon' />
                <p>Payment Due</p>
              </button>
              <button
                onClick={() => handleButtonClick('markDetails')}
                className='dashboard-btn'
              >
                <GrScorecard className='logo_icon' />
                <p>Student Marks </p>
              </button>
              <button
                onClick={() => handleButtonClick('achievement')}
                className='dashboard-btn'
              >
                <GrAchievement className='logo_icon' />
                <p>Achievements </p>
              </button>
              <button
                onClick={() => handleButtonClick('attendance')}
                className='dashboard-btn'
              >
                <FontAwesomeIcon icon={faClipboardUser} className='logo_icon'/>
                <p>Attendance </p>
              </button>
            </div>
          </div>
        </div>

        <div className='dashboard-content'>
          {renderActiveComponent()}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
