import React from 'react';
import { BsExclamationCircle } from "react-icons/bs";
const Quests = () => {
  return (
      <div className='quests-container'>
          <h1 className='quests-title'>Quests</h1>
          <div className='quests-wrapper'>
          <BsExclamationCircle className='quests-icon' size="3em"/>
          <div className="quests-info">
              <p className='quests-text'>Posting Machine</p>
              <p className='quests-desc'>Posted more than 20 profile activities a day</p>
              </div>
              </div>
    </div>
  )
}

export default Quests;