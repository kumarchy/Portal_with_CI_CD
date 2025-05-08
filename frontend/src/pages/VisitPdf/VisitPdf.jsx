import React from 'react';
import './VisitPdf.css';
import { assets } from '../../assets/assets';

const pdfFiles = [
  assets.vehicle_detection
];

const VisitPdf = () => {
  return (
    <div className="lectureNotesDetails">
      <div className='lectureNotes'>
      {pdfFiles.map((src, index) => (
        <iframe 
          key={index} 
          className="lecture-Pdf" 
          src={src} 
          title={`PDF Viewer ${index + 1}`}
        />
      ))}
      </div>
    </div>
  );
};

export default VisitPdf;
