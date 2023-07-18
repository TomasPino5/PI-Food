import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { DetailPage, FormPage, HomePage, LandingPage } from './views/index'; 
import Nav from './components/nav/Nav'

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav/>}
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/form' element={<FormPage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
