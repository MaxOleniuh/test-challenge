import React from "react";
import Member from "./Member";
const membersData = [
  {
    imageUrl: "./images/avatar-1.avif",
    title: "Sandra Strange",
    subtitle: "@sanstrange",
    isMember: true,
  },
  {
    imageUrl: "./images/avatar-2.jpg",
    title: "Rosie Sakura",
    subtitle: "@sakuraro", 
    isMember: false,
  },
  {
    imageUrl: "./images/avatar-3.jpg",
    title: "Damian Greyson",
    subtitle: "@dgreyson",
    isMember: false,
  },
  {
    imageUrl: "./images/avatar-4.jpg",
    title: "The Green Goo",
    subtitle: "@greengoo",
    isMember: false,
  },
  {
    imageUrl: "./images/avatar-5.jpg",
    title: "Bearded Wonder",
    subtitle: "@brdwonder",
    isMember: false,
  },
];
const Members = () => {
  return (
    <div className="members-container">
      <h1 className="members-title">Newest members</h1>
      {membersData.map((member, index) => (
        <Member
          key={index}
          imageUrl={member.imageUrl}
          title={member.title}
          subtitle={member.subtitle}
          member={member.isMember}
        />
        ))}
    </div>
  );
};

export default Members;
