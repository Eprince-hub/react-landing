/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import facebook from './images/facebook.png';
import footerglobe from './images/footer-globe.png';
import footerLogo from './images/footer-logo.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';
import wordpress from './images/wordpress.png';
import youtube from './images/youtube.png';

// Some variables for repeated values!
// const logoSize = '180px';

const footerStyle = css`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .footerInfo {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 5rem;

    h3 {
      font-size: 23px;
      line-height: 34px;
      color: #ffffff;
      font-weight: 700;
    }

    p {
      font-size: 18px;
      line-height: 27px;
      color: #ffffff;

      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;

      :hover {
        text-decoration: underline;
        text-decoration-thickness: 0.2rem;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .footerLastItems {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    img {
      width: 100px;
    }

    button {
      background: #07011c;
      width: 150px;
      height: 50px;
      cursor: pointer;
      color: white;
      align-self: flex-end;
      border: none;
      border-radius: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        width: 20px;
      }
    }
  }

  .socialMediaIcons {
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    margin-bottom: 5rem;

    img {
      width: 30px;
    }
  }
`;

export default function Footer() {
  return (
    <div css={footerStyle}>
      <div className="footerInfo">
        <div>
          <h3>DevKinsta</h3>
          <p>Homepage</p>
          <p>Features</p>
          <p>Download</p>
        </div>
        <div>
          <h3>Get Support</h3>
          <p>Support Forum</p>
          <p>Documentation</p>
          <p>FAQ</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>Free Ebooks</p>
          <p>Learn WordPress</p>
          <p>Kinsta Blog</p>
        </div>
        <div>
          <h3>Kinsta</h3>
          <p>Hosting Plans</p>
          <p>Features</p>
          <p>About Kinsta</p>
        </div>
      </div>
      <div className="footerLastItems">
        <div>
          <img src={footerLogo} alt="Footer logo" />

          <p>© 2021 Kinsta Inc. All rights reserved.</p>
          <p>Legal information</p>
          <p>Kinsta® and WordPress® are registered trademarks.</p>
        </div>
        <button>
          <img src={footerglobe} alt="footer globe icon" />
          English
        </button>
      </div>

      <div className="socialMediaIcons">
        <img src={wordpress} alt="footer social media icon" />
        <img src={facebook} alt="footer social media icon" />
        <img src={twitter} alt="footer social media icon" />
        <img src={instagram} alt="footer social media icon" />
        <img src={youtube} alt="footer social media icon" />
      </div>
    </div>
  );
}

/* https://kinsta.com/devkinsta/ */
