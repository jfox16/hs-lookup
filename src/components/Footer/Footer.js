import React from "react";
import "./Footer.css";

import { VERSION_NUMBER } from "globalConstants";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="Footer">

      <p>Copyright © {new Date().getFullYear()} Jonathan Fox </p>
      <p>
        Hearthstone is a trademark or registered trademark of Blizzard
        Entertainment, Inc., in the U.S. and/or other countries.
      </p>

      <div style={{ height: "8px" }} />

      <p>HSLookup v{VERSION_NUMBER}</p>

      <p>Updated 2021/04/19 </p>

      <div style={{ height: "8px" }} />

      <p>
        If you have any suggestions or questions, email me at:{" "}
        <a href="mailto:FoxJonathanP@gmail.com">FoxJonathanP@gmail.com</a>
      </p>

      <div style={{ height: "8px" }} />

      <div className="icons">
        <p>
          <a href="https://github.com/jfox16/hs-lookup">
            <FaGithubSquare />
          </a>
        </p>
      </div>

      <div style={{ height: "8px" }} />
    </div>
  );
}
