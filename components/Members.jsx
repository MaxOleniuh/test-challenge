import React from "react";
import Member from "./Member";

const Members = () => {
  return (
    <div className="members-container">
      <h1 className="members-title">Newest members</h1>
      <Member
        imageUrl="/images/avatar-1.avif"
        title="Sandra Strange"
              subtitle="@sanstrange"
              member="true"
      />
      <Member
        imageUrl="/images/avatar-2.jpg"
        title="Rosie Sakura"
        subtitle="@sakuraro"
      />
      <Member
        imageUrl="/images/avatar-3.jpg"
        title="Damian Greyson"
        subtitle="@dgreyson"
      />
      <Member
        imageUrl="/images/avatar-4.jpg"
        title="The Green Goo"
        subtitle="@greengoo"
      />
      <Member
        imageUrl="/images/avatar-5.jpg"
        title="Bearded Wonder"
        subtitle="@brdwonder"
      />
    </div>
  );
};

export default Members;
