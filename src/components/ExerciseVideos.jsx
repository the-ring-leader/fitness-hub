import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ExerciseVideos = ({exerciseVideos , name}) => {

  if(!exerciseVideos.length) return (
    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
  );
 
  return (
    <div className='tile is-child'>
      <div className='m-3 title is-4 is-primary tag' style= {{width: "97.5%",borderRadius: "5px" }}> Watch &nbsp; <span style={{"color":"orange"}} className="has-text-weight-bold is-capitalized is-family-secondary">{name}</span> &nbsp;exercise video</div>

      <div className="tile is-parent mr-3" style={{"overflow":"auto" , "display":"flex"}}>
        {exerciseVideos?.slice(0 , 3).map(
          (item ,index) => (
            <div className="column p-2" key={index} style={{"height":"auto" , "width" : "auto"}}>
            <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{"borderRadius":"5px"}}/>
              <div className=''>{item.video.title}</div>
            </a>
            </div>

          )
        )}
        </div>
    </div>
  )
}

export default ExerciseVideos