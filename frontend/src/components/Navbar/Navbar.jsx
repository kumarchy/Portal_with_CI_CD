import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket, faGear, faL } from '@fortawesome/free-solid-svg-icons';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import Avatar from 'react-avatar-edit';

const Navbar = ({profileImage,setProfileImage, setShowLogin}) => {
  const [dropdown, setDropdown] = useState(false);

  const { token, setToken} = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleDropdownToggle = () => {
    setDropdown(prevState => !prevState);
  };

  const clickListener = type => {
    setDropdown(false);
    setShowLogin(type);
  };

  // profile upload

  const [dialogs, setDialogs] = useState(false);
  const [imageCrop, setImageCrop] = useState(null);

  const onCrop = (view) => {
      setImageCrop(view);
  }
  
  const onClose = () => {
      setImageCrop(null);
  }

  const saveCropedImage=()=>{
      setProfileImage(imageCrop);
      setDialogs(false);
  }

  return (
    <>
      <div className='navbar'>
        <Link to='/'>
          <img src={assets.balmiki_logo} alt="Logo" className='logo' />
        </Link>
        <div className="dropdown-container">
          {!token ? (
            <button className="signin-button" onClick={handleDropdownToggle}>Sign in</button>
          ) : (
            <div className='navbar-profile'>
              <img src={profileImage || assets.profile_icon} className='navbar-Profile-Image' alt="Profile" />
              <ul className='nav-profile-dropdown'>
                <li onClick={logout}>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <p>Logout</p>
                </li>
                <hr />
                <li onClick={() => setDialogs(true)} >
                  <FontAwesomeIcon icon={faUser} />
                  <p>Profile</p>
                </li>
              </ul>
            </div>
          )}
          {dropdown && (
            <ul className='login-dropdown'>
              <li onClick={() => clickListener("parent")}><p>Parent</p></li>
              <hr />
              <li onClick={() => clickListener("student")}><p>Student</p></li>
            </ul>
          )}
        </div>
      </div>

      {/* profile upload section */}

      <div className={`profile-upload`}>
      <div className="profile-upload-container">
            <div className="profile-upload-content">

                <Dialog 
                    visible={dialogs} 
                    header={<p className="dialog-header">Update Profile</p>}
                    onHide={() => setDialogs(false)}
                >
                    <div className='dialog-content'>
                        <div className='button-container'>
                            <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
                            <Button onClick={saveCropedImage} className='profile-edit-btn' label='Save' icon="pi pi-check" />
                        </div>
                    </div>
                </Dialog>
            </div>
            <button  className='profile-save-btn'>Save</button>
        </div>
        </div>
    </>
  );
};

export default Navbar;
