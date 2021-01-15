import './App.css';
import Header from './Header'
import Timeline from './Timeline'
import Projects from './Projects'
import Skills from './Skills'
import Contacts from './Contacts'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Header />
      <Timeline />
      <Projects />
      <Skills />
      <Contacts />
      
    </div>
  );
}

export default App;
