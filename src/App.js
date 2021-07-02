import { useState } from 'react';
import { useEffect } from 'react';
import { loadCoverAnimations } from './hooks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AppProvider } from './context';
import './App.css';
import Cover from './components/Cover';
import ReadingArea from './components/ReadingArea';

function App() {
  const [coverLoaded, setCoverLoaded] = useState(false)
  gsap.registerPlugin(ScrollTrigger);

  useEffect(
    () => {
      loadCoverAnimations(setCoverLoaded);
    },
    [],
  );

  return (
    <AppProvider>
      <main className="app-container">
        <Cover />
        { coverLoaded && <ReadingArea /> }
      </main>
    </AppProvider>
  );
}

export default App;
