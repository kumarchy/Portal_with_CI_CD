import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Welcome from "../pages/Welcome/Welcome";
import PaymentDetails from "../pages/PaymentDetails/PaymentDetails";
import MarkDetails from "../pages/MarkDetails/MarkDetails";
import Achievement from "../pages/Achievement/Achievement";
import Attendance from "../pages/Attendance/Attendance";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [loginType, setLoginType] = useState("");
  const [showBar, setShowBar] = useState(false);
  const [activeComponent, setActiveComponent] = useState('welcome');
  const [selectedTopic, setSelectedTopic] = useState(""); 

  //http url
  const url="http://localhost:4000"
  const [token,setToken]=useState("");

  const handleShowLogin = (type) => {
    setShowLogin(true);
    setLoginType(type);
  };

  const lectureView = (subject) => {
    if (subject) {
      navigate('/lectureDashboard');
    }
  };

  const checkNotes = (lectureNote) => {
    if (lectureNote) {
      navigate('/visitPdf');
    }
  };

  const loginNavigatePage = (type) => {
    if (type === "parent") {
      navigate('/dashboard');
    } else {
      navigate('/lectureCollection');
    }
  };

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    if (window.innerWidth <= 900) {
      setShowBar(false);
    }
  };

  const handleLessonClick = (topicName) => {
    setSelectedTopic(topicName); 
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'welcome':
        return <Welcome />;
      case 'paymentDetails':
        return <PaymentDetails setPending={setActiveComponent} />;
      case 'markDetails':
        return <MarkDetails />;
      case 'pendingStatus':
        return <PendingStatus />;
      case 'achievement':
        return <Achievement />;
      case 'attendance':
        return <Attendance />;
      default:
        return <Welcome />;
    }
  };

useEffect(()=>{
  if(localStorage.getItem("token")){
    setToken(localStorage.getItem("token"))
  }
},[])

//<--- lectureDashboard--->
const [showLectures, setShowLectures] = useState(false);
const [showNotes, setShowNotes] = useState(false);
const [searchInput, setSearchInput] = useState("");

// Toggle the visibility of lecture units
const toggleLectureUnits = () => {
  setShowLectures(!showLectures);
};


// Toggle the visibility of note units
const toggleNoteUnits = () => {
  setShowNotes(!showNotes);
};

// Handle input change for search field
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

// <---lecture collection --->
const [selectedClass, setSelectedClass] = useState("Eleven"); 
const [errorMessage, setErrorMessage] = useState("");
const [book, setBook] = useState([]);

const handleClassChange = (event) => {
  setSelectedClass(event.target.value);
};

  const contextValue = {
    showLogin,
    setShowLogin,
    loginType,
    setLoginType,
    handleShowLogin,
    // navigateToCollections,
    loginNavigatePage,
    lectureView,
    checkNotes,
    handleButtonClick,
    renderActiveComponent,
    showBar,   
    setShowBar,
    activeComponent,
    url,
    token,
    setToken,
    selectedTopic,
    handleLessonClick,

    // <---lectureDashboard--->
    toggleLectureUnits,
    toggleNoteUnits,
    handleSearchInput,
    searchInput,
    showLectures,
    showNotes,

    // <--- lectureCollection--->
    selectedClass,
    errorMessage,
    setErrorMessage,
    book,
    setBook,
    handleClassChange
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
