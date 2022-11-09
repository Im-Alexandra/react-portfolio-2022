import React from "react";
import "./Footer.css";

// images
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <a
            href="https://twitter.com/Sashena_Lab"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitterIcon} alt="twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexandra-labusov%C3%A1-5898b3122/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/trolo_lol_ol/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Im-Alexandra"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github" />
          </a>
        </li>
      </ul>
    </div>
  );
}
