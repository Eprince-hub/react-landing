/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import message from './Data.js';

// import aboutPagebgImage from './images/about-page-background.svg';
// import videoPlaceholder from './images/devkinsta-landing-video-thumbnail.png';

// \public\texts

export default function Testimonials() {
  return (
    <div>
      <h1>Hello from testimony</h1>

      <div>
        <h2>What are users saying about DevKinsta?</h2>
      </div>

      <div style={{ backgroundColor: 'red' }}>
        messages here
        {message.map((text) => {
          return (
            <div key={text.id}>
              <h3> {text.name}</h3>
              <p>{text.source !== 'none' ? text.source : false}</p>
              <p>{text.message}</p>
            </div>
          );
        })}
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
