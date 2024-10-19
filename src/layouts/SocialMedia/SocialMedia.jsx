import React from "react";

import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { RiKickLine } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="social-media">
      <a href="https://facebook.com/ramazan3ren" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://instagram.com/ramazan3ren" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://x.com/ramazan3ren" target="_blank">
        <RiTwitterXFill />
      </a>
      <a href="https://youtube.com/@ramazan3ren" target="_blank">
        <BsYoutube />
      </a>
      <a href="https://github.com/ramazan3ren" target="_blank">
        <BsGithub />
      </a>
      <a href="https://linkedin.com/in/ramazan3ren" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://kick.com/ramazan3ren" target="_blank">
        <RiKickLine />
      </a>
      <a href="https://behance.net/ramazan3ren" target="_blank">
        <BsBehance />
      </a>
    </div>
  );
}

export default SocialMedia;
