/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import tryBackground from './images/bg-decline.png';
import devkinstaImage from './images/devkinsta-create-site.png';
import devkinstaDatabase from './images/devkinsta-database-manager.jpg';
import devKinstaMail from './images/devkinsta-email.png';
import devkinstaMultilingual from './images/devkinsta-multilingual.svg';
import devkinstaPhPVersion from './images/devkinsta-php-versions.svg';
import devKinstaIntegration from './images/devkinsta-push-to-staging.png';
import devkinstaDocker from './images/docker.svg';
import devkinstaPhPImage from './images/php-versions.svg';
import devkinstacross from './images/plus.svg';
import devkinstaBg from './images/site-creation.svg';

// Some variables for repeated values!
// const logoSize = '180px';

// const headerStyle = css`
//   width: 100vw;
//   height: 6rem;
//   position: relative;
//   z-index: 100;

//   div:first-child {
//     width: 60%;
//     margin: 0 auto;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     height: 100%;
//     font-size: 1rem;
//     font-weight: bold;

//     button:empty {
//       background-image: url('${mainLogo}');
//       background-position: left;
//       background-size: ${logoSize};
//       background-repeat: no-repeat;
//       cursor: pointer;
//       display: inline;
//       padding: 0;
//       width: ${logoSize};
//       height: 40px;
//       border: none;
//       background-color: transparent;
//     }

//     nav ul {
//       display: flex;
//       grid-gap: 50px;

//       li {
//         list-style: none;
//         cursor: pointer;

//         :hover {
//           text-decoration-line: underline;
//         }
//       }
//     }

//     button:last-child {
//       background-color: rgb(44, 212, 217);
//       background-size: 300% 100%;
//       font-size: 1rem;
//       color: #0c022f;
//       padding: 0.85rem 2rem;
//       border: none;
//       border-radius: 30px;
//       cursor: pointer;
//       -o-transition: all 0.4s ease-in-out;
//       -webkit-transition: all 0.4s ease-in-out;
//       transition: all 0.4s ease-in-out;

//       :hover {
//         background-position: 80% 0;
//         -o-transition: all 0.4s ease-in-out;
//         -webkit-transition: all 0.4s ease-in-out;
//         transition: all 0.4s ease-in-out;
//         background-image: linear-gradient(
//           120deg,
//           rgb(44, 212, 217) 0px,
//           rgb(44, 212, 217) 50%,
//           rgb(83, 51, 237) 100%
//         );
//         box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
//         color: #ffffff;
//       }
//     }
//   }
// `;

const informationPagesStyle = css`
  width: 75%;
  min-height: 100vh;
  margin: 0 auto;

  .flexParents {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20rem;
    gap: 70px;

    div {
      flex-basis: 40rem;

      h2 {
        font-size: 3.9rem;
        line-height: 4.3rem;
        color: #fafafa;
      }

      p {
        font-size: 1.4rem;
        line-height: 2.1rem;
        color: #c9c1f3;
      }

      button {
        font-size: 1.1rem;
        line-height: 1.1rem;
        color: rgb(44, 212, 217);
        border: none;
        background: transparent;
        cursor: pointer;
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;

        :hover {
          color: #5333ed;
          -o-transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
        }

        span {
          font-size: 1.3rem;
          -o-transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
          :hover {
            padding-left: 1rem;
            -o-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
          }
        }
      }
    }
  }

  .oneClickWordpressPicture {
    background-image: url(${devkinstaPhPImage});
    background-size: 180%;
    background-position: center;
    background-repeat: no-repeat;

    .middleImage {
      background: red;
      width: 25rem;
      display: inline-block;
      margin: 0 auto;
      position: relative;
      left: 5em;
    }

    img:first-of-type,
    img:last-of-type {
      width: 40px;
      position: relative;
      bottom: 21.5rem;
      left: 7rem;
      animation-name: rotateCross;
      animation-duration: 8s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    img:last-of-type {
      top: 0rem;
      left: 7rem;
      animation-name: rotateCross2;
      animation-duration: 10s;
    }
  }

  @keyframes rotateCross {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes rotateCross2 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  .phpVersionImage {
    background-image: url(${devkinstaBg});
    background-repeat: no-repeat;

    img {
      display: inline-bock;
      position: relative;
      left: -5rem;
      bottom: 7rem;
      border-radius: 5px;
    }
  }

  .localEmail {
    padding: 0 2rem;
  }

  .devkinstaMail {
    background-image: url(${devkinstaPhPImage});
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: center;

    img {
      position: relative;
      right: 3rem;
      bottom: 2rem;
      border-radius: 5px;
    }
  }

  .devkinstaDataBase {
    background-image: url(${devkinstaPhPImage});
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: center;

    img {
      height: 250px;
      position: relative;
      right: 4rem;
      bottom: 1rem;
      border-radius: 5px;
    }
  }

  .seamlessIntegration {
    background-image: url(${devkinstaPhPImage});
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: center;

    img {
      width: 500px;
      position: relative;
      left: 5rem;
      bottom: 6rem;
      border-radius: 5px;
    }
  }

  .poweredByDocker {
    background-image: url(${devkinstaDocker});
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: right;
  }

  .multilingual {
    background: url(${devkinstaMultilingual});
    background-repeat: no-repeat;
  }
`;

const tryDevkinstaStyle = css`
  width: 100vw;
  margin-top: -8rem;
  .tryDevkinsta {
    width: inherit;
    background-image: url(${tryBackground});
    height: 70vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 60%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 63px;
        line-height: 70px;
        color: #fafafa;
        width: 80%;
        text-align: center;
      }

      p {
        line-height: 34px;
        font-size: 23px;
        color: #fafafa;
        width: 80%;
        text-align: center;
        margin: 0rem 0;
      }
    }

    button {
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 1.1rem;
      padding: 1.1rem 2.2rem;
      margin: 30px 0 18px;
      border: none;
      border-radius: 30px;
      background-color: rgb(44, 212, 217);
      background-size: 300% 100%;
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

export default function InformationPages() {
  return (
    <>
      <div css={informationPagesStyle}>
        <div className="flexParents oneClickWordpress">
          <div>
            <h2>One-click WordPress site creation</h2>
            <p>
              Launch WordPress sites, including multisites, with a single click!
              Every DevKinsta site is powered by a modern hosting stack plus the
              latest version of WordPress Core. You’ll also get access to
              powerful tools like a built-in database manager, SMTP server,
              WP_DEBUG toggle, and more.
            </p>
            <button>
              Learn more <span>&#62;</span>
            </button>
          </div>
          <div className="oneClickWordpressPicture">
            <img src={devkinstacross} alt="One click top cross" />
            <img
              src={devkinstaImage}
              alt="One click wordpress"
              className="middleImage"
            />
            <img src={devkinstacross} alt="One click bottom cross" />
          </div>
        </div>

        <div className="flexParents">
          <div className="phpVersionImage">
            <img src={devkinstaPhPVersion} alt="php version" />
          </div>
          <div>
            <h2>PHP 7.x and 8.x support</h2>
            <p>
              Use DevKinsta to test your site with the latest version of PHP in
              a safe environment. DevKinsta supports PHP 7.2-8.0, and you can
              switch versions with just a few clicks. If your project is tied to
              a specific PHP version, DevKinsta lets you choose a version for
              your site.
            </p>
            <button>
              Learn more <span>&#62;</span>
            </button>
          </div>
        </div>

        <div className="flexParents">
          <div className="localEmail">
            <h2>Local email management</h2>
            <p>
              DevKinsta ships with a powerful SMTP server and email testing
              tool. Catch and inspect outgoing emails to debug contact forms,
              marketing automations, site notifications, and more!
            </p>
            <button>
              Learn more <span>&#62;</span>
            </button>
          </div>
          <div className="devkinstaMail">
            <img src={devKinstaMail} alt="local mail management" />
          </div>
        </div>

        <div className="flexParents">
          <div className="devkinstaDataBase">
            <img src={devkinstaDatabase} alt="Data base management" />
          </div>
          <div>
            <h2>Built-in database manager</h2>
            <p>
              DevKinsta includes Adminer, a lightweight database management
              tool. Use Adminer to edit WordPress database tables, execute SQL
              queries, and more.
            </p>
            <button>
              Learn more <span>&#62;</span>
            </button>
          </div>
        </div>

        <div className="flexParents">
          <div>
            <h2>Seamless integration with MyKinsta</h2>
            <p>
              Download your live site, work on it offline, and push it back to
              your Kinsta staging environment. Full integration with MyKinsta
              means you can easily merge DevKinsta into your current workflow.
              Learn more Jessie Hey, Is there anyone who tried to push a site to
              live before staging?
            </p>
            <button>
              Learn more <span>&#62;</span>
            </button>
          </div>
          <div className="seamlessIntegration">
            <img src={devKinstaIntegration} alt="seamless integration " />
          </div>
        </div>

        <div className="flexParents">
          <div>
            <h2>Powered by Docker</h2>
            <p>
              DevKinsta leverages the power of Docker to create a secure and
              fast local WordPress development experience. With Docker, your
              local site’s hosting stack is automatically containerized and
              optimized for security and near-native performance no matter what
              host OS you’re running.
            </p>
          </div>
          <div className="poweredByDocker" />
        </div>

        <div className="flexParents">
          <div className="multilingual" />

          <div>
            <h2>Available for macOS, Windows, and Linux in 10 languages</h2>
            <p>
              DevKinsta is available as a free download for macOS, Windows, and
              Linux/Ubuntu. In addition to English, DevKinsta also supports
              French, Spanish, Portuguese, Dutch, German, Italian, Japanese,
              Swedish, and Danish.
            </p>
            <button>
              Learn more <span>&#62;</span>
            </button>
          </div>
        </div>
      </div>
      <div css={tryDevkinstaStyle}>
        <div className="tryDevkinsta">
          <div>
            <h1>Try DevKinsta today</h1>
            <p>
              Streamline your development workflow with DevKinsta by making
              local site creation a one-click task.
            </p>
            <button>Download Devkinsta</button>
          </div>
        </div>
      </div>
    </>
  );
}
