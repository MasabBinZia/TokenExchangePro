import React from 'react'
import "./About.css"
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard';


const About = () => {
  return (
    <div className='about'>
        <h2>Robust and evolving protocol community</h2>
        <p>By using the Defi protocol system, developers, liquidity providers, and traders can participate in a financial marketplace that is transparent and open to all.</p>
        <div className="card-container">
            <div className="card">
            <AboutCard icon={<SiHiveBlockchain className='icon' />} heading='Reliable, tamper-proof network' text='Connect any smart contract to highly accurate and available data/APIs using decentralization, trusted nodes, premium data, and cryptographic proofs.' />
            </div>
            <div className="card">
            <AboutCard icon={<SiStrapi className='icon' />} heading='Seamless connection to any API' text='Build on a flexible framework that can integrate with any current or future blockchain, retrieve data from any API, and connect with existing systems.'/>
            </div>
            <div className="card">
            <AboutCard icon={<SiFsecure className='icon' />} heading='Proven, ready-made solutions' text='Integrate market-leading decentralized applications pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value.' />
            </div>
            <div className="card">
            <AboutCard icon={<VscServerProcess className='icon' />} heading='Secure off-chain computation' text='Automate contracts using a decentralized network of DeFi Keeper nodes, mitigating the risk of manual interventions and centralized servers.' />
            </div>  
        </div>
        <a href="/" className="btn">Use TEP</a>
    </div>
  )
}

export default About