import { Stack } from '@mui/material';
import React from 'react';
import plans from '../assets/images/plan.png';


const BodyPart = ({item , part , setPart}) => {
  return (
    <Stack
      type = "button"
      alignItems="center"
      sx = {{
        backgroundColor:'#fff',
        cursor:"pointer",
        border : part === item ? '5px solid mediumslateblue' : '',
        padding:"5px",
        width : '110px',
        height : 'auto',
        paddingTop: "15px",
        borderRadius:"5px"
      }}

      onClick={() => {
        setPart(item);
        // console.log(part);
      }}
    >
      <figure className="image is-64x64">
          <img src={plans}/>
      </figure>

      <span className="tag is-link mt-2">
        {item}
      </span>

    </Stack>
  )
}

export default BodyPart