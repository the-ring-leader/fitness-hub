export const options = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'f748a2f8edmshb8861c953744609p1ca5b1jsn2434550f4137',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const options2 = {
  method: 'GET',
 // url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',

  headers: {
    'X-RapidAPI-Key': 'f748a2f8edmshb8861c953744609p1ca5b1jsn2434550f4137',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url , options) => {
    
    const response = await fetch(url , options);

    const data = await response.json();

    return data;
}