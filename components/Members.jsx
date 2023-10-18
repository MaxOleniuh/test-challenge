import React from "react";
import Member from "./Member";

import avatar1 from "../public/images/avatar-1.jpg";
import avatar2 from "../public/images/avatar-2.jpg";
import avatar3 from "../public/images/avatar-3.jpg";
import avatar4 from "../public/images/avatar-4.jpg";
import avatar5 from "../public/images/avatar-5.jpg";

const membersData = [
  {
    imageUrl: avatar1,
    title: "Sandra Strange",
    subtitle: "@sanstrange",
    isMember: true,
  },
  {
    imageUrl: avatar2,
    title: "Rosie Sakura",
    subtitle: "@sakuraro", 
    isMember: false,
  },
  {
    imageUrl: avatar3,
    title: "Damian Greyson",
    subtitle: "@dgreyson",
    isMember: false,
  },
  {
    imageUrl: avatar4,
    title: "The Green Goo",
    subtitle: "@greengoo",
    isMember: false,
  },
  {
    imageUrl: avatar5,
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
