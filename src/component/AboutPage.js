/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// import cables from './images/cables.svg';
// import computers from './images/computer.svg';
// import handLeftRepeat from './images/hand-left-repeat.svg';
// import handLeft from './images/hand-left.svg';
// import handRightRepeat from './images/hand-right-repeat.svg';
// import handRight from './images/hand-right.svg';
// import heroPageImage from './images/hero-background-svg.svg';

// Regular Css for the Hero page!

// Variables!

const videoSource = 'https://kinsta.wistia.com/medias/c5v27grjl1';

const aboutPageStyle = css`
  background-color: red;
  max-width: 100vw;
  height: 200vh;
`;

export default function AboutPage() {
  return (
    <section css={aboutPageStyle}>
      <h1>This is a message from the about page!</h1>
      <div>
        <div>
          <h1>this is the left box</h1>
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

      <div>
        <div>
          <h2>Local WordPress development for everyone</h2>
        </div>
        <div>
          <button>For Developers</button>
          <button>For Agencies</button>
          <button>For Designers</button>
          <button>For Freelancers</button>
        </div>
        <div>
          <p>
            For developers, DevKinsta offers a local environment for developing
            WordPress themes, plugins, and more. DevKinsta is powered by Docker,
            which means your local WordPress sites are isolated and secured
            through containerization. Compared to VirtualBox, a virtualization
            technology used by other local development apps, Docker has a lower
            resource footprint and near-native performance.
          </p>
        </div>
      </div>
    </section>
  );
}
