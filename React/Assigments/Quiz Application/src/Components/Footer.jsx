import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <h3>QUIZ APPLICATION</h3>

          <p>Build with React JS</p>
          <p>Made with ❤️ by Shahmeer Rizwan</p>
          <ul className="socials">
            <li>
              <a href="https://www.facebook.com/muhammadshahmeerrizwan">
                <i className="fa fa-facebook"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/_i_am_shahmeer/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="https://mshah-portfolio.web.app/">
                <i className="fa fa-google"></i>
              </a>
            </li>

            <li>
              <a href="https://github.com/shahmeerrizwan">
                <i className="fa fa-github"></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/muhammadshahmeerrizwan/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>© Copyright 2024, All rights reserved </p>
        </div>
      </footer>
    </>
  );
}
