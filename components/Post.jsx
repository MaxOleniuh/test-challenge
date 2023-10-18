import React from "react";
import Member from "./Member";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import Link from "next/link";

const Post = ({ reply }) => {
  return (
    <>
      <div className="post-wrapper">
        <Member
          imageUrl="/images/avatar-post.jpg"
          title="Marina Valentine"
          subtitle=""
          member="true"
        />
        <span className="pro-member">Pro Member</span>
        {reply ? (
          <span className="topic-reply">replied to the topic</span>
        ) : (
          <span className="topic-reply">posted an update</span>
        )}
        {reply && <span className="topic-title">Welcome to</span>}
        <br />
        {reply ? (
          <div>
            <span className="topic-title">the Cosplayers Group Forum!</span>
            <span className="forum-src">In the forum</span>
            <span className="forum-title">Cosplayers Group Forum</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="posted-wrapper">
        <div className="title-wrapper">
          {reply ? (
            <p className="posted-title">1 year ago</p>
          ) : (
            <p className="posted-title">2 years ago</p>
          )}
        </div>
        {reply && <p className="post-msg">Hello everyone!</p>}
        {!reply && (
          <Link href="https://www.twitch.tv/blizzard" className="post-link">
            https://www.twitch.tv/blizzard
          </Link>
        )}
      </div>
      <div className="post-content">
         {!reply && <img src="/images/post-img.jpg" alt="post-image" />}
      </div>
      <div className="line"></div>
      <div className="post-footer">
        <div className="post-icon-wrapper">
          <BsFillEmojiLaughingFill className="post-icon" />
          <span className="reaction-count">1</span>
        </div>
        <div className="post-stats">
          <p className="comments-count">0 comments</p>
          <p className="shares-count">0 shares</p>
        </div>
      </div>
    </>
  );
};

export default Post;
