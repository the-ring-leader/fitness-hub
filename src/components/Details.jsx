import React from 'react';
import ExerciseVideos from './ExerciseVideos';
import Similar from './Similar';
import SimilarEquipment from './SimilarEquipment';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Details = ({exerciseDetail , exerciseVideos , targetMuscleExercises , equipmentExercises}) => {

  if(!exerciseVideos.length && !exerciseDetail.length) return (
    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
  );

  const {bodyPart , gifUrl , name , target , equipment } = exerciseDetail;

  return (
    <div className='tile is-ancestor mt-5'>
        <div className=" tile is-parent vertical">
          <div className="tile is-child ">
            <div className="tile notification is-white"><img src={gifUrl} alt={name}  loading="lazy" style={{"boxShadow" : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" , borderRadius:"15px"}}/></div>
            {/* <div className='tile'>{bodyPart}</div>
            <div className="tile">{equipment}</div> */}
            <div className="tile  is-capitalized p-2 has-text-weight-bold has-text-centered is-size-4" style={{"borderRadius": "15px"}}><span className='tag m-3 is-dark is-size-4'>{name}</span> <span className='tag m-3 is-link is-size-4'>{target}</span> </div>
         </div>
        </div>

        <div className="tile is-parent is-vertical">
          
          <div className="tile is-child "><ExerciseVideos exerciseVideos={exerciseVideos} name={name}/></div>

          <div className="tile is-child "><Similar targetMuscleExercises={targetMuscleExercises} /></div>

          <div className="tile is-child "><SimilarEquipment equipmentExercises={equipmentExercises} /></div>

        </div>
    </div>
  )
}

export default Details