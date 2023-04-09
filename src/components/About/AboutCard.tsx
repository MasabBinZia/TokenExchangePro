import React from 'react';
import "./About.css";

type AboutCardProps = {
  icon: React.ReactNode;
  heading: string;
  text :string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, heading,text }) => {
  return (
    <>
      <div className='icon-container'>
        {icon}
      </div>
      <h3>{heading}</h3>
      <p>{text}</p>
    </>
  );
};

export default AboutCard;
