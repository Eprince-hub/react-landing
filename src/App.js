import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AboutPage from './component/AboutPage';
import HeroPage from './component/HeroPage';
import Navigation from './component/Navigation';
import TestingPage from './component/TestingPage';

// import logo from './logo.svg';

const appStyle = css`
  min-height: 100vh;
  background-color: #0c022f;
  color: white;
`;

function App() {
  return (
    <div css={appStyle}>
      <Navigation />
      <HeroPage />
      <AboutPage />
      <TestingPage />
    </div>
  );
}

export default App;
