import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

//f4651921 : api key
const API_URL = 'https://www.omdbapi.com?apikey=f4651921';
function App() {
    //state movie
    const [movies, setMovies] = useState([]);
    // state search
    const [searchTerm,setSearchTerm] = useState('');

    const SearchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        //set movies = results of search
        setMovies(data.Search);
    }
    useEffect(() => {
      SearchMovie('batman');
    }, [])
    
  return (
    <div className="app">
      <h1>Films Search</h1>
      <div className='search'>
        <input 
            placeholder='Search for movies'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img 
            src={SearchIcon} 
            alt="search"
            onClick={()=>SearchMovie(searchTerm)}
        />
      </div>
      
      {
        movies?.length >0
        ? (
            <div className='container'> 
                {movies.map((movie,index)=>(
                    <MovieCard movie={movie} key={index}/>
                ))}
            </div>
        )
        : (
            <div className='empty'> 
                <h2>No movies found</h2>
            </div>
        )
      }
      
    </div>
  );
}

export default App;
