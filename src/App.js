import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import HeroPage from './component/HeroPage';
import Navigation from './component/Navigation';
import TestingPage from './component/TestingPage';

// import logo from './logo.svg';

const appStyle = css`
min-height: 100vh;
background-color: #0C022F;
color: white;
`

function App() {
  return (
    <div css={appStyle}>
      <Navigation />
      <HeroPage />
      <TestingPage />
    </div>
  );
}

export default App;
