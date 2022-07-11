import React from 'react';
import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';

import {fetchData , options , options2} from '../utils/fetchData';

import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import Similar from '../components/Similar';


const ExerciseDetails = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});

    const [exerciseVideos, setExerciseVideos] = useState([]);

    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

    const [equipmentExercises, setEquipmentExercises] = useState([]);



    const { id } = useParams();

    useEffect(() => {
        const fetchExerciseData = async () => {
            
            const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';

            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}` , options);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise` , options2);
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, options);
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equimentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, options);
            setEquipmentExercises(equimentExercisesData);

        }

        fetchExerciseData();
    }, [id]);

  return (
    <div className='is-white'>
        <Details 
        exerciseDetail={exerciseDetail} 
        exerciseVideos={exerciseVideos}
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
        />
       {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} /> */}
    </div>
  )
}

export default ExerciseDetails