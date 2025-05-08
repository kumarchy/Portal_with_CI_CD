import React from 'react';
import './Achievement.css';
import { GrAchievement } from "react-icons/gr";
import { assets } from '../../assets/assets';

const Achievement = () => {
  const achievements=[
    assets.winning_prize,
    assets.winning_prize,
    assets.winning_prize,
    assets.winning_prize,
    assets.winning_prize,
  ]

  return (
    <div className='achievementDetails'>
       <GrAchievement className='achievement_logo_icon'/>
    <div className='achievementContainer'>
      <div className='achievementSelectOption'>
      <select>
            <option value="Class">Select Class Name</option>
            <option value="Eleven">Eleven</option>
            <option value="Twelve">Twelve</option>
          </select>

          <select>
            <option value="RollNumber">Select RollNumber</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
      </div>
      <button className='achievementEnter-btn'>Enter</button>
      <div className='achievementCollection'>
      {achievements.map((src,index)=>(
       <div key={index} className='achievement_img'>
       <div className='achievementPrize'>
        <img src={src} alt="" />
       </div>
       <p>First prize in football</p>
       </div>
      ))}
      </div>
    </div>
    </div>
  )
}

export default Achievement;