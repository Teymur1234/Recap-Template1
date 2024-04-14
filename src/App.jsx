import './App.css';
import Footer from './layout/footer/Footer';
import Navbar from './layout/header/Navbar';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
