import React from "react";
import { SlLock } from "react-icons/sl";
import { IoEarthSharp } from "react-icons/io5";
import Image from "next/image";

const Group = ({ imageUrl, title, memberCount, isPublic }) => {
  return (
    <div className="member">
      <Image
        src={imageUrl}
        alt={title}
        className="avatar"
        width={40}
        height={40}
      />
      <div className="member-info">
        <div className="title-wrapper">
          <h2 className="member-title">{title}</h2>
        </div>
        <p className="member-subtitle">{memberCount} members</p>
          </div>
          <div className="icon-wrapper">
            {isPublic ? (
              <IoEarthSharp className="earth-icon" />
            ) : (
              <SlLock className="lock-icon" />
            )}
          </div>
    </div>
  );
};

export default Group;
