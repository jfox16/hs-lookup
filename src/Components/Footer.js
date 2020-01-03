import React from 'react';
import './Footer.css';

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
  return(
    <div className="Footer">
      <p>Copyright © {new Date().getFullYear()} Jonathan Paul Fox </p>
      <a href="mailto:FoxJonathanP@gmail.com">FoxJonathanP@gmail.com</a>
      <div className="icons">
        <p>
          <a href="https://github.com/FishWash"><FaGithubSquare /></a>
          <a href="https://www.linkedin.com/in/jonathan-fox-cs/"><FaLinkedin /></a>
          <a href="https://twitter.com/jfox6cs"><FaTwitterSquare /></a>
        </p>
      </div>
    </div>
  );
}