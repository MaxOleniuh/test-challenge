import React from 'react';
import "../app/sidebar.css";
import { RiComputerLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { GoPeople } from 'react-icons/go';
import { LiaMedalSolid } from 'react-icons/lia';
import { FaRegStar } from 'react-icons/fa';
import { PiStack } from 'react-icons/pi';
import { SlDiamond } from 'react-icons/sl';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { BsChatSquareText } from 'react-icons/bs';
import { BsBasket3 } from 'react-icons/bs';
import { GiCardRandom } from 'react-icons/gi';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-set">
        <div className="sidebar-item active">
          <RiComputerLine className='active-icon'/>
        </div>
        <div className="sidebar-item">
            <BsPerson className='sidebar-icon'/>
        </div>
        <div className="sidebar-item">
          <GoPeople className='sidebar-icon'/>
        </div>
        <div className="sidebar-item">
          <LiaMedalSolid className='sidebar-icon'/>
        </div>
        <div className="sidebar-item">
          <FaRegStar className='sidebar-icon'/>
        </div>
        <div className="sidebar-item">
          <PiStack className='sidebar-icon' />
          </div>
        <div className="sidebar-item">
          <SlDiamond className='sidebar-icon' />
        </div>
        <div className="sidebar-item">
          <HiOutlineNewspaper className='sidebar-icon' />
        </div>
        <div className="sidebar-item">
          <BsChatSquareText className='sidebar-icon' />
        </div>
        <div className="sidebar-item">
          <BsBasket3 className='sidebar-icon' />
        </div>
        <div className="sidebar-item">
          <GiCardRandom className='sidebar-icon' />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;