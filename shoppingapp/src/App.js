import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Store from './pages/Store';
import Sucess from './pages/Sucess';
import Cancel from './pages/Cancel';

import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <Container>
      <NavbarComponent />


      <BrowserRouter>

      <Routes>

        <Route index element={<Store/>}/>
        <Route path='/sucess' element={<Sucess/>} />
        <Route path='/cancel' element={<Cancel />} />
      </Routes>
      
      </BrowserRouter>
    </Container>
    
  );
}

export default App;
