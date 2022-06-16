import Experience from './components/Experience';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <NavigationBar />
        <Intro />
         <Skills />
         <Works />
         <Experience />
      <Footer />
    </div>
  );
}

export default App;
