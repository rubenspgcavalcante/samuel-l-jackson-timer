import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export default ({ children }) => (
  <div className="hero is-fullheight">
    <div className="hero-head">
      <div className="navbar">
        <div className="navbar-brand">
          <a
            href="https://github.com/rubenspgcavalcante/samuel-l-jackson-timer"
            target="_blank"
            className="navbar-item"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
        </div>
      </div>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">{children}</div>
    </div>
  </div>
);
