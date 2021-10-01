import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AboutPage from './component/AboutPage';
import Footer from './component/Footer';
import HeroPage from './component/HeroPage';
import InformationPages from './component/InformationPages';
import Navigation from './component/Navigation';
import Testimonials from './component/Testimonials';

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
      <Testimonials />
      <InformationPages />
      <Footer />
    </div>
  );
}

export default App;
