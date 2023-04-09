import React from 'react';
import MainVid from "../../assets/video.mp4";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={MainVid} type='video/mp4' />
      </video>
      <div className="hero-text">
        <h1>Decentralized</h1>
        <h1><span className='blue'>Exchange </span> Platform</h1>
        <p>Empowering millions of users and top Ethereum applications with reliable, liquid trading options.</p>
        <div className="btn-group">
          <button className='btn'>Use TEP</button>
          <button className='btn btn-outline'>FAQ</button>
        </div>
      </div>
      <div className="bottom-text">
        <h2>Total trading volume protected: $90,201,983,652.27</h2>
      </div>
    </div>
  );
};

export default Hero;
