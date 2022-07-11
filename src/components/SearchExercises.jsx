import React from 'react';
import { useState , useEffect } from 'react';
import { fetchData , options } from '../utils/fetchData';
import ScrollBar from './ScrollBar';

const SearchExercises = ({setExercises , part , setPart}) => {

  const [search, setSearch] = useState("");


  const [BodyParts, setBodyParts] = useState([]);

  useEffect(() => {

    const fetchExercisesData = async () => {
        
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' , options);

        setBodyParts(['all' , ...bodyPartsData]);
      
      }

      fetchExercisesData();

  }, []);

  const handleSearch = async () => {
    if(search) {
      const exercisesData =  await fetchData( 'https://exercisedb.p.rapidapi.com/exercises' , options);
     
     // console.log(exercisesData);

     const searchedExercises = exercisesData.filter(
      (item) => item.name.toLowerCase().includes(search)
      || item.target.toLowerCase().includes(search)
      || item.equipment.toLowerCase().includes(search)
      || item.bodyPart.toLowerCase().includes(search),
     );

     setSearch('');

     setExercises(searchedExercises);
    }
  }

  return (
    <div className="p-2">

      <div className="field is-expanded m-3">
        <label className="label is-large">Explore Exercises</label>
        <div className="control has-icons-left has-icons-right">
        <input className="input is-large" type="email" placeholder="Enter Here...." onChange={(e)=> {setSearch(e.target.value.toLowerCase())}} />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope fa-xs" />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check fa-xs" />
        </span>
        </div>
       </div>
       <div className="field m-3">
        <p className="control">
        <button className="button is-success" onClick={handleSearch}>Search</button>
        </p>
      </div>

      <div>

      </div>
        <ScrollBar data = {BodyParts} part = {part} setPart={setPart}/>
    </div>
  )
}

export default SearchExercises