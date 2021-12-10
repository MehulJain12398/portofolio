import './App.css';
import Header from './Header';
import { BrowserRouter as Router , Switch , Route} from "react-router-dom"
import Nav from './Nav';
import Body from './Body';
import About from './About';
import Contact from './Contact';
import HeaderGrad from './HeaderGrad';

function App() {
  return (

    <div className="App">
  
    <Nav />

      <Header />
      {/* <HeaderGrad /> */}
      <About />
      <Body />
      <Contact />
    

    </div>
    
  );
}

export default App;
