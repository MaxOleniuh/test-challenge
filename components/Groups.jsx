import React from 'react';
import Group from './Group';

import avatar6 from "../public/images/avatar-6.jpg";
import avatar7 from "../public/images/avatar-7.jpg";
import avatar8 from "../public/images/avatar-8.jpg";
import avatar9 from "../public/images/avatar-9.jpg";
import avatar10 from "../public/images/avatar-10.jpg";

const groupData = [
  {
    imageUrl: avatar6,
    title: "Street Artists",
    memberCount: "4",
    isPublic: true,
  },
  {
    imageUrl: avatar7,
    title: "Cosplayers of the World",
    memberCount: "3",
    isPublic: true,
  },
  {
    imageUrl: avatar8,
    title: "Stream Designers",
    memberCount: "3",
    isPublic: true,
  },
  {
    imageUrl: avatar9,
    title: "Gaming Watchtower",
    memberCount: "3",
    isPublic: false,
  },
  {
    imageUrl: avatar10,
    title: "Living in Japan",
    memberCount: "2",
    isPublic: true,
  },
];

const Groups = () => {
  return (
    <div className='members-container'>
      <h1 className='members-title'>Popular Groups</h1>
      {groupData.map((group, index) => (
        <Group
          key={index}
          imageUrl={group.imageUrl}
          title={group.title}
          memberCount={group.memberCount}
          isPublic={group.isPublic}
        />
      ))}
    </div>
  );
}

export default Groups;
