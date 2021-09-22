/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import mainLogo from './images/type-logo-light.svg';

// Some variables for repeated values!
const logoSize = '180px';

const headerStyle = css`
  width: 100vw;
  height: 6rem;
  position: relative;
  z-index: 100;

  div:first-child {
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    font-size: 1rem;
    font-weight: bold;

    button:empty {
      background-image: url('${mainLogo}');
      background-position: left;
      background-size: ${logoSize};
      background-repeat: no-repeat;
      cursor: pointer;
      display: inline;
      padding: 0;
      width: ${logoSize};
      height: 40px;
      border: none;
      background-color: transparent;
    }

    nav ul {
      display: flex;
      grid-gap: 50px;

      li {
        list-style: none;
        cursor: pointer;

        :hover {
          text-decoration-line: underline;
        }
      }
    }

    button:last-child {
      background-color: rgb(44, 212, 217);
      background-size: 300% 100%;
      font-size: 1rem;
      color: #0c022f;
      padding: 0.85rem 2rem;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;

      :hover {
        background-position: 80% 0;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        background-image: linear-gradient(
          120deg,
          rgb(44, 212, 217) 0px,
          rgb(44, 212, 217) 50%,
          rgb(83, 51, 237) 100%
        );
        box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
        color: #ffffff;
      }
    }
  }
`;

export default function Footer() {
  return (
    <div>
      <div>
        <h2>Try DevKinsta today</h2>
        <p>
          Streamline your development workflow with DevKinsta by making local
          site creation a one-click task.
        </p>
        <button>Download DevKinsta</button>
      </div>

      <div>
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
        <div>
          <h3>FOOTER LOGO HERE</h3>

          <h2>OTHER FOOTER ITEMS LIKE COPY RIGHT AND OTHERS</h2>
          <button>English</button>
        </div>
      </div>

      <div>SOCIAL MEDIA HERE</div>
    </div>
  );
}
