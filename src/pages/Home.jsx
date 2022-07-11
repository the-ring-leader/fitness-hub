import React from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

import { useState , useEffect } from 'react';
import BodyPart from '../components/BodyPart';


const Home = () => {

  const [exercises, setExercises] = useState([]);

  const [part, setPart] = useState('all');

  console.log(part);

  return (
    <div className='has-navbar-fixed-top'>
      <div>
        <HeroBanner/>
      </div>

      <div>
        <SearchExercises setExercises={setExercises} part={part} setPart={setPart} />
      </div>

      <div>
        <Exercises exercises={exercises} setExercises={setExercises} part={part} />
      </div>

    </div>
  )
}

export default Home;