import React from 'react';
const troll = require('../images/troll-face.png');

export default function Header() {
  return (
    <header>
        <img src={troll} alt="" className="header--image" />
        <span className="header--title">Meme Generator</span>
        <span className="header--project">React Course - Project 3</span>
    </header>
  );
}
