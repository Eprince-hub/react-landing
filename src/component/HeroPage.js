/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import cables from './images/cables.svg';
import computers from './images/computer.svg';
import handLeftRepeat from './images/hand-left-repeat.svg';
import handLeft from './images/hand-left.svg';
import handRightRepeat from './images/hand-right-repeat.svg';
import handRight from './images/hand-right.svg';
import heroPageImage from './images/hero-background-svg.svg';

// Regular Css for the Hero page!

// Variables for repeated values!
const sideBoxSizes = '20rem';

const heroPageStyle = css`
  max-width: 100vw;
  height: 100vh;
  background-image: url('${heroPageImage}');
  background-position: top;
  background-size: cover;
  overflow: hidden;
  /* background-repeat: no-repeat; */
  padding-top: 5rem;

  main {
    position: relative;
    height: 100%;
    width: 95%;
    margin: 0 auto;
    display: flex;
    color: #fafafa;
    z-index: 1;

    div:first-child {
      flex: 0 1 ${sideBoxSizes};
    }

    div:first-child + div {
      flex: 1 0 2rem;
      min-width: 40%;
      text-align: center;

      h1 {
        font-weight: 700;
        font-size: 3.8rem;
        line-height: 4.3rem;
      }

      p {
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2.1 rem;
        color: rgb(201, 193, 243);
        padding: 0 1.5rem;
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

    div:last-child {
      flex: 0 1 ${sideBoxSizes};
    }
  }

  &:after {
    content: '';
    width: 100vw;
    height: 180%;
    position: absolute;
    background-image: url(${handLeft}), url(${handLeftRepeat}),
      url(${handRight}), url(${handRightRepeat}), url(${computers}),
      url(${cables});
    background-position: 40%, 0 0, 50%, 100% 0, 50%, 0;
    background-repeat: no-repeat;
    background-size: auto 100%, 0 100%, auto 100%, calc(50vw - 1000px) 100%,
      auto 100%, 50vw 100%;
    display: block;
    /* left: 50%; */
    /* margin-left: -50vw; */
    /* right: 0.5rem; */
    top: -2.5rem;
  }
`;

export default function HeroPage() {
  return (
    <section css={heroPageStyle}>
      <main>
        <div></div>
        <div>
          <h1>Your Free Local WordPress Development Suite</h1>

          <p>
            Design, develop, and deploy WordPress sites from the comfort of your
            local machine. DevKinsta is free forever, and available for macOS,
            Windows, and Ubuntu. Used by more than 12,000 developers, web
            designers, and freelancers.
          </p>

          <button>Download DevKinsta</button>
        </div>
        <div></div>
      </main>
    </section>
  );
}
