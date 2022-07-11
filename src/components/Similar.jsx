import React from 'react'
import ExerciseCard from './ExerciseCard'

const Similar = ({targetMuscleExercises}) => {
  return (
    <div className='tile is-child'>
    <div className='m-3 title is-4 is-success tag'> Some &nbsp; <span style={{"color":"black"}} className="has-text-weight-bold is-capitalized is-family-secondary">Similar</span> &nbsp;Exercises</div>
    <div className='tile p-3 m-3'>
        {
         targetMuscleExercises?.slice(0,4).map(
         (item , index) => (
          <ExerciseCard key={index} ex={item}/>
         )
         )   
        }
    </div>
    </div>
  )
}

export default Similar