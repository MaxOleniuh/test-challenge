import React from 'react';
import { FaEarthOceania } from "react-icons/fa6";

const Badges = () => {
  return (
      <div className='badges-container'>
          <h1 className='badges-title'>Quests</h1>
          <div className='badges-wrapper'>
          <FaEarthOceania className='badges-icon' size="3em"/>
          <div className="badges-info">
              <p className='badges-text'>Globe Trotter</p>
              <p className='badges-desc'>Has goined at least 10 different groups</p>
              </div>
              </div>
    </div>
  )
}

export default Badges;