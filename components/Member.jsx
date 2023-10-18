import Image from 'next/image';
import React from 'react';
import { BsCheckCircleFill } from "react-icons/bs";
const Member = ({ imageUrl, title, subtitle, member }) => {
    return (
        <div className="member">
                    <Image src={imageUrl} alt={title}
                    className="avatar" width={40} height={40} />
            <div className="member-info">
                <div className='title-wrapper'>
                    <h2 className="member-title">{title}</h2>
                    {member && <BsCheckCircleFill className='tick-icon' />}
                    </div>
                <p className="member-subtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default Member;