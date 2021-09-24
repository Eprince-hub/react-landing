/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import message from './Data.js';
import triangle from './images/PolygonTriangle.svg';

// import videoPlaceholder from './images/devkinsta-landing-video-thumbnail.png';

const testimonialStyle = css`
  min-width: 100vw;
  min-height: 100vh;
  position: relative;

  .testimonialDescription {
    width: 40%;
    margin: 0 auto;
    padding-top: 5rem;

    h2 {
      text-align: center;
      font-weight: 700;
      line-height: 3.4rem;
      font-size: 3.1rem;
      color: #fafafa;
    }
  }

  .testimonialCarousel {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow: auto;
    grid-gap: 40px;
    padding: 0 2rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-top: 6rem;

    ::-webkit-scrollbar {
      display: none;
    }

    div {
      width: 30rem;
      height: 50%;
      flex: 0 0 auto;

      h3 {
        color: #fafafa;
        font-size: 1.1.rem;
        line-height: 22px;
        padding: 0;
        margin: 0;
        display: inline-block;
      }

      h6 {
        color: #fafafa;
        font-size: 13px;
        line-height: 15px;
        padding: 0;
        margin: 0;
        font-weight: lighter;
      }

      p {
        font-size: 1rem;
        line-height: 24px;
        color: #c9c1f3;
        background-color: #1b046d;
        border-radius: 5px;
        padding: 2rem 1rem;
        margin-top: 0;
      }

      :after {
        content: ${triangle};
        background: red;
        position: relative;
        width: 50rem;
        height: 50rem;
      }
    }
  }

  .sliderButton {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    position: absolute;
    bottom: 13rem;
    background: transparent;

    button {
      background: rgb(12, 2, 47);
      color: white;
      font-size: 5rem;
      font-weight: bold;
      box-shadow: 10px 5px 10px 10px #0c022f;
      border: none;
      cursor: pointer;
    }

    button + button {
      padding-right: 1.5rem;
      box-shadow: -10px 5px 10px 10px #0c022f;
    }
  }
`;

export default function Testimonials() {
  return (
    <div css={testimonialStyle}>
      <div className="testimonialDescription">
        <h2>What are users saying about DevKinsta?</h2>
      </div>

      <div className="testimonialCarousel">
        {message.map((text) => {
          return (
            <div key={text.id}>
              <h3> {text.name}</h3>
              <h6>{text.source !== 'none' ? text.source : false}</h6>
              <p>{text.message}</p>
            </div>
          );
        })}
      </div>

      <div className="sliderButton">
        <button>
          <span>&#60;</span>
        </button>
        <button>
          <span>&#62;</span>
        </button>
      </div>
    </div>
  );
}

/* <select onChange={handleChange}>
          {bulkImageArray.map((item) => (
            <option value={item.id} key={item.id}>
              {/* {item.id} *
              {item.name}
            </option>
          ))}
        </select> */
