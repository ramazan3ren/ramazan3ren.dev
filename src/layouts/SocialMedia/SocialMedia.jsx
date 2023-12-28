import React from "react";

import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
function SocialMedia() {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com/ramazan3ren">
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/ramazan3ren">
        <BsInstagram />
      </a>
      <a href="https://twitter.com/ramazan3ren">
        <RiTwitterXFill />
      </a>
      <a href="https://www.youtube.com/@ramazan3ren">
        <BsYoutube />
      </a>
      <a href="https://github.com/ramazan3ren">
        <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/ramazan3ren/">
        <FaLinkedin />
      </a>
      <a href="https://www.twitch.tv/ramazan3ren/">
        <FaTwitch />
      </a>
    </div>
  );
}

export default SocialMedia;
