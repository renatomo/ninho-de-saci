import { useEffect } from 'react';
import { coverAnimations } from './hooks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css';
import Cover from './components/Cover';
import ReadingArea from './components/ReadingArea';
import { useState } from 'react';

function App() {
  const [coverLoaded, setCoverLoaded] = useState(false)
  gsap.registerPlugin(ScrollTrigger);

  useEffect(
    () => {
      coverAnimations(setCoverLoaded);
    },
    [],
  );

  return (
    <div className="app-container">
      <Cover />
      { coverLoaded && <ReadingArea /> }
    </div>
  );
}

export default App;
