import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const ExerciseCard = ({ex , index}) => {

  const [style,setStyle] = useState(null);

  const handleMouse = () => {
    const mystyle = {
      borderTop: "4px solid grey",
      borderRadius: "5px" 
    }
    setStyle(mystyle);

  }

  const handleLeaveMouse = () => {
    setStyle(null);
  }


  return (
    <Link to={`/exercise/${ex.id}`} onMouseOver={handleMouse} style={style} onMouseLeave={handleLeaveMouse}>
       <img src={ex.gifUrl} alt={ex.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        <div className="tag is-danger">{ex.bodyPart}</div>
      </Button>
      <Button sx={{ ml: '21px', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        <div className="is-warning tag">{ex.target}</div>
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '15px', xs: '10px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {ex.name}
    </Typography>
    </Link>
  )
}

export default ExerciseCard