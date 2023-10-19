
import './App.scss';
import {Routes,Route,useLocation} from 'react-router-dom';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';

import Contact from './containers/contact';
import NavBar from './components/navBar';
import particlesConfig from './helpers/particlesConfig';
import Theme from './components/theme';

function App() {
  const particlesInit=async(main)=>{
    await loadFull(main)
  }
  const location=useLocation();
  const renderParticuleJsIfCurrentPageIsHomePage=location.pathname === '/';
  return (
    <div className="App">
    {/*particles */}
    {
      renderParticuleJsIfCurrentPageIsHomePage &&
      <Particles id='particles' options={particlesConfig} init={particlesInit}  />
    }
    
     {/*navbar */}
     <div className='App__navbar-wrapper'>
     <NavBar/>
     </div>
     <div className='App__main-content-wrapper'>
      <Theme/>
     <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/skills'  element={<Skills/>}/>
        <Route path='/portfolio'  element={<Portfolio/>}/>
       
        <Route path='/contact'  element={<Contact/>}/>
      </Routes>
     </div>
      {/*main page */}
     
    </div>
  );
}

export default App;
