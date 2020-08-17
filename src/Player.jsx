import React from 'react';
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Player.css';

const Player = () => {
    return (
        <div className="player">
            <div className="player__body">
            <Sidebar/>
            <Body/>
            </div>
            <Footer/>
        </div>
    )
}

export default Player
