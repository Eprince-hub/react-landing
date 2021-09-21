/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import aboutPagebgImage from './images/about-page-background.svg';
import videoPlaceholder from './images/devkinsta-landing-video-thumbnail.png';

// Regular Css for the Hero page!

// Variables!

const aboutPageStyle = css`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-image: url(${aboutPagebgImage});
  background-size: auto cover;
  background-position: bottom right;
  background-repeat: no-repeat;
  margin-top: 20rem;

  div:first-child {
    max-width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 22rem;
    margin-top: -10rem;
    overflow: hidden;

    div:first-child {
      margin-bottom: 1rem;
      height: 18rem;
      background-image: url(${videoPlaceholder});
      align-self: flex-end;
    }

    div:last-child {
      text-align: left;
      padding: 0 1rem;
      align-self: flex-end;

      h2 {
        font-size: 2.2rem;
        line-height: 2.5rem;
        font-weight: 700;
        color: #fafafa;
      }

      p {
        font-size: 1.4rem;
        line-height: 2rem;
        font-weight: 300;
        color: #c9c1f3;
      }
    }
  }

  .infoBoxDiv {
    width: 50%;
    margin: 0 auto;
    text-align: center;

    h2 {
      font-size: 3rem;
      line-height: 3.4rem;
      margin-top: 10rem;
    }

    div:first-of-type {
      width: 100%;
      display: flex;
      justify-content: space-around;

      button {
        display: inline-block;
        padding: 1.2rem 1.6rem;
        font-size: 1.2rem;
        line-height: 1.7rem;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        background-color: #5333ed;
        background-color: #1b046d;
        color: #fafafa;
        cursor: pointer;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;

        :focus {
          background-color: #5333ed;
          -o-transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
        }

        :hover {
          background-color: #5333ed;
          -o-transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
        }
      }
    }

    div:last-of-type > p {
      font-size: 1.4rem;
      line-height: 2.1rem;
      font-weight: 300;
      color: #c9c1f3;
      margin-top: 2rem;
    }
  }
`;

// Component starts

const infoBoxTexts = [
  `For developers, DevKinsta offers a local environment for developing WordPress themes, plugins, and more. DevKinsta is powered by Docker, which means your local WordPress sites are isolated and secured through containerization. Compared to VirtualBox, a virtualization technology used by other local development apps, Docker has a lower resource footprint and near-native performance.`,
  `For agencies, DevKinsta lets you test plugin and theme updates for your clients locally to avoid site-breaking changes in production. Clone client sites and work on them locally. When you’re done, push changes to Kinsta with a single click.`,
  `For designers, DevKinsta offers a local, secure, and fast environment for designing your sites, templates, themes. Debug HTML, CSS, and JavaScript through your local browser.`,
  `For freelancers, DevKinsta lets you create, edit and duplicate WordPress local installs quickly and intuitively. Troubleshoot client sites offline and then push your work directly to a Kinsta staging environment.`,
];

export default function AboutPage() {
  const [buttonColor, setButtonColor] = useState('#5333ed');
  const [displayText, setDisplayTest] = useState(infoBoxTexts[0]);

  function handleClick0() {
    setDisplayTest(infoBoxTexts[0]);
  }
  function handleClick1() {
    setDisplayTest(infoBoxTexts[1]);
    setButtonColor('');
  }
  function handleClick2() {
    setDisplayTest(infoBoxTexts[2]);
    setButtonColor('');
  }
  function handleClick3() {
    setDisplayTest(infoBoxTexts[3]);
    setButtonColor('');
  }

  return (
    <section css={aboutPageStyle}>
      <div>
        <div>
          <h1>Video should come here</h1>
        </div>

        <div>
          <h2>What does DevKinsta do?</h2>
          <p>
            DevKinsta makes local site creation and development quick and easy.
            Spin up a single or Multisite WordPress site with Nginx, MariaDB,
            and more with a single click. Take advantage of local database and
            email management tools to develop themes, plugins, and custom sites,
            all on your local machine. When you’re ready to go live, push your
            site directly to Kinsta.
          </p>
        </div>
      </div>

      <div className="infoBoxDiv">
        <h2>Local WordPress development for everyone</h2>

        <div>
          <button
            onClick={handleClick0}
            style={{ backgroundColor: buttonColor }}
          >
            For Developers
          </button>
          <button onClick={handleClick1}>For Agencies</button>
          <button onClick={handleClick2}>For Designers</button>
          <button onClick={handleClick3}>For Freelancers</button>
        </div>
        <div>
          <p>{displayText}</p>
        </div>
      </div>
    </section>
  );
}
