import React from 'react';
import Group from './Group';

const groupData = [
  {
    imageUrl: "/images/avatar-6.jpg",
    title: "Street Artists",
    memberCount: "4",
    isPublic: true,
  },
  {
    imageUrl: "/images/avatar-7.jpg",
    title: "Cosplayers of the World",
    memberCount: "3",
    isPublic: true,
  },
  {
    imageUrl: "/images/avatar-8.jpg",
    title: "Stream Designers",
    memberCount: "3",
    isPublic: true,
  },
  {
    imageUrl: "/images/avatar-9.jpg",
    title: "Gaming Watchtower",
    memberCount: "3",
    isPublic: false,
  },
  {
    imageUrl: "/images/avatar-10.jpg",
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
