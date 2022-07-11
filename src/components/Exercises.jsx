import React from 'react';
import { useEffect , useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box , Stack , Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';

import { fetchData , options } from '../utils/fetchData';

const Exercises = ({ exercises , setExercises , part}) => {

  // console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);
 
  const exercisePerPage = 9;

  const idxOfLastEx = currentPage * exercisePerPage;

  const idxOfFirstEx = idxOfLastEx - exercisePerPage;

  const currentExercises = exercises.slice(idxOfFirstEx , idxOfLastEx);

  const paginate = (e , value) => {
    setCurrentPage(value);
    window.scrollTo({top: 1800 , behavior:'smooth'})
  }


  useEffect(() => {
    const fetchExercisesData = async () => {
     
      let exercisesData = [];
     
      if(part === 'all') {
        exercisesData = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises' , options);
      }

      else {
        exercisesData = await fetchData( `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}` , options);
      }

      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [part]);

  return (
    <Box
      id="exercises"
      marginTop="10px"
      className = "ml-5"
    >
      <Typography variant="h5" mb = "20px">
        results
      </Typography>

      <Stack 
      direction = "row"
      flexWrap = "wrap"
      sx ={{gap : {lg : '110px' , xs : '50px'}}}
      >
      {
        currentExercises.map(
          (ex , index) => (
          <ExerciseCard ex={ex} key = {index} />
          )
        )
      }
      </Stack>

      <Stack mt="30px" alignItems="center">
        {
          exercises.length > 9 && (
            <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count = {Math.ceil(exercises.length / exercisePerPage)}
            page = {currentPage}
            onChange = {paginate}
            size = "medium"
            />
          )
        }
      </Stack>
    </Box>
  )
}

export default Exercises