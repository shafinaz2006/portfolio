import Header from './Components/Header';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Education from './Components/Education';
import { useEffect } from 'react';
import { addAnalytics } from './data/gaHelper';
import './App.css';

function App() {
  useEffect(() =>{
    addAnalytics();
  }, []);
  
  return (
    <div className="App" id="App">
      <Header />
      <Intro />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
