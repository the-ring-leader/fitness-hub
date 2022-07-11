import './App.css';
import {Route , Routes} from 'react-router-dom';

import Home from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseDetails from './pages/ExerciseDetails';


function App() {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path='/'  element={<Home/>}/>
         <Route path='/exercise/:id'  element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
