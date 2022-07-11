import React from 'react';
import ExerciseCard from './ExerciseCard';

const SimilarEquipment = ({equipmentExercises}) => {
  return (
    <div className='tile is-child'>
    <div className='m-3 title is-4 is-link tag'>Some Exercises with &nbsp; <span style={{"color":"orange"}} className="has-text-weight-bold is-capitalized is-family-secondary">Same Equipment</span>.</div>
    <div className='tile p-3 m-3'>
        {
         equipmentExercises?.slice(0,4).map(
         (item , index) => (
          <ExerciseCard key={index} ex={item}/>
         )
         )   
        }
    </div>
    </div>
  )
}

export default SimilarEquipment;