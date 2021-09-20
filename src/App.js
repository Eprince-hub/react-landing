import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Navigation } from './component/Navigation';

// import logo from './logo.svg';

const appStyle = css`
min-height: 100vh;
background-color: black;
color: white;
`

function App() {
  return (
    <div css={appStyle}>
      <Navigation />
    </div>
  );
}

export default App;
