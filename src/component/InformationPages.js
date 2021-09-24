/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import mainLogo from './images/type-logo-light.svg';

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
  width: 70%;
  min-height: 100vh;
  margin: 0 auto;

  .flexParents {
    width: 100%;
    display: flex;
    justify-content: space-around;

    div {
      flex-basis: 40rem;
      border-bottom: 5px solid blue;

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
`;

export default function InformationPages() {
  return (
    <div css={informationPagesStyle}>
      <div className="flexParents">
        <div>
          <h2>One-click WordPress site creation</h2>
          <p>
            Launch WordPress sites, including multisites, with a single click!
            Every DevKinsta site is powered by a modern hosting stack plus the
            latest version of WordPress Core. You’ll also get access to powerful
            tools like a built-in database manager, SMTP server, WP_DEBUG
            toggle, and more.
          </p>
          <button>
            Learn more <span>&#62;</span>
          </button>
        </div>
        <div>
          <h1>PICTURES PLACEHOLDER</h1>
        </div>
      </div>

      <div className="flexParents">
        <div>
          <h2>PICTURE PLACEHOLDER</h2>
        </div>
        <div>
          <h2>PHP 7.x and 8.x support</h2>
          <p>
            Use DevKinsta to test your site with the latest version of PHP in a
            safe environment. DevKinsta supports PHP 7.2-8.0, and you can switch
            versions with just a few clicks. If your project is tied to a
            specific PHP version, DevKinsta lets you choose a version for your
            site.
          </p>
          <button>
            Learn more <span>&#62;</span>
          </button>
        </div>
      </div>

      <div className="flexParents">
        <div>
          <h2>Local email management</h2>
          <p>
            DevKinsta ships with a powerful SMTP server and email testing tool.
            Catch and inspect outgoing emails to debug contact forms, marketing
            automations, site notifications, and more!
          </p>
          <button>
            Learn more <span>&#62;</span>
          </button>
        </div>
        <div>
          <h2>PICTURE PLACEHOLDER</h2>
        </div>
      </div>

      <div className="flexParents">
        <div>
          <h2>PICTURE PLACEHOLDER</h2>
        </div>
        <div>
          <h2>Built-in database manager</h2>
          <p>
            DevKinsta includes Adminer, a lightweight database management tool.
            Use Adminer to edit WordPress database tables, execute SQL queries,
            and more.
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
        <div>
          <h2>PICTURE PLACEHOLDER</h2>
        </div>
      </div>

      <div className="flexParents">
        <div>
          <h2>PLACEHOLDER FOR A CARD</h2>
          <h2>PLACEHOLDER FOR THE SECOND CARD</h2>
        </div>
        <div>
          <h2>A community of WordPress experts</h2>
          <p>
            As a tool built for website, plugin, and theme developers, DevKinsta
            is built for a robust community of WordPress users worldwide. Join
            our community forum to exchange with others, provide feedback, and
            contribute to shaping the future of DevKinsta.
          </p>
        </div>
      </div>

      <div className="flexParents">
        <div>
          <h2>Powered by Docker</h2>
          <p>
            DevKinsta leverages the power of Docker to create a secure and fast
            local WordPress development experience. With Docker, your local
            site’s hosting stack is automatically containerized and optimized
            for security and near-native performance no matter what host OS
            you’re running.
          </p>
        </div>
        <div>
          <h2>IMAGE PLACEHOLDER</h2>
        </div>
      </div>

      <div className="flexParents">
        <div>
          <h2>PICTURE PLACEHOLDER</h2>
        </div>

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
  );
}
