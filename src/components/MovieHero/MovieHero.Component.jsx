import React, { useContext } from 'react';
import { MovieContext } from '../../Context/Movie.Context.jsx';
import MovieInfo from './MovieInfo.Component.jsx';

const MovieHero = () => {
    const {movie} = useContext(MovieContext);

    const genres = movie.genres?.map(({name}) => name).join(", ");
    return( 
    <>

    {/* Small to Medium Screen Size */}
    <div>
        <div className= "lg:hidden w-full">
            <img src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                 alt= "Cover Poster" 
                 className= "m-4 rounded" 
                 style={{width: "calc(100%-2rem)"}}
    />
        </div>

        <div className= "flex flex-col gap-3 lg:hidden">
            <div className= "flex flex-col-reverse gap-3 px-4 my-3">
                <div className= "text-black flex flex-col gap-2 md:px-4">
                    <h4>4.4k ratings</h4>
                    <h4>English, Hindi, Kannada, Tamil, Telegu</h4>
                    <h4>{movie.runtime} min | {genres}</h4>
                </div>
            </div>

            <div className= "flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                <button className= "bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                    Rent ₹149
                </button>
                <button className= "bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                    Buy ₹499
                </button>
            </div>
        </div>
        
        {/* Large Screen Size */}
        <div className= "relative hidden w-full lg:block" style= {{height: "28rem" }}>
            <img src={`https:/image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                     alt= "Backdrop Poster" 
                     className= "absolute inset-0 w-full h-full object-cover object-center z-0"/>

            <div className= "absolute inset-0 z-10 w-full h-full" style= {{backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.8)10%, rgba(34,34,34,0.80)40%, rgba(34,34,34,0.3)90%, rgb(34,34,34)100%)"}}>
                <div className= "absolute z-30 left-24 top-10 flex items-center gap-10">
                    
                    <div className= "w-64 h-96 ">
                        <img src= {`https:/image.tmdb.org/t/p/original${movie.poster_path}`} 
                             alt="Movie Poster" 
                             className= "w-full h-full rounded-lg"/>
                    </div>

                    <div>
                        <MovieInfo movie= {movie}/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    </>
    );
};

export default MovieHero;