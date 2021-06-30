import { useEffect } from 'react';
import { coverAnimations } from './hooks';
import './App.css';
import Cover from './components/Cover';

function App() {
  useEffect(
    coverAnimations,
    [],
  );

  return (
    <div>
      <Cover />
      
    </div>
  );
}

export default App;
