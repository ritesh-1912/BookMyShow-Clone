import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import MovielayoutHOC from '../layouts/Movie.layout.jsx';
import axios from 'axios';
import { MovieContext } from '../Context/Movie.Context.jsx';
import Slider from "react-slick";
import {FaCcVisa, FaCcApplePay} from "react-icons/fa";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component.jsx";
import MovieHero from "../components/MovieHero/MovieHero.Component.jsx";
import Cast from "../components/Cast/Cast.Component.jsx";
import { NextArrow, PrevArrow } from '../components/HeroCarousel/Arrows.Component.jsx';
import API_URL from '../components/config.js';

const MoviePage = () => {
    const {id} = useParams();
    const {movie, setMovie} = useContext(MovieContext);

    const [cast, setCast] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]); 


    useEffect(() => {
    fetch(`${API_URL}/movies`)  // Use the API URL from config.js
      .then((response) => response.json())  // Parse the response as JSON
      .then((data) => setMovie(data))  // Set the movie data in state
      .catch((error) => console.error('Error fetching movies:', error));
  }, [id]);


    useEffect(() => {
        const requestCast = async () => {
            const getCast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=35ad386f358b34b66d6755c73259354e`);
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(() => {
        const requestSimilarMovies = async() => {
            const getSimilarMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=35ad386f358b34b66d6755c73259354e`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    useEffect(() => {
        const requestRecommendedMovies = async() => {
            const getRecommendedMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=35ad386f358b34b66d6755c73259354e`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);

    useEffect(() => {
        const requestMovie = async() => {
            const getMovieData = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=35ad386f358b34b66d6755c73259354e`);
            setMovie(getMovieData.data);
        };
        requestMovie();
    }, [id]);

    const settingsCast = {
        infinite: false,
        nextArrow:<NextArrow/>, 
        prevArrow:<PrevArrow/>, 
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide:0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 4,
                },
            },
        ],
    };

    const settings = {
        infinite: false,
        nextArrow:<NextArrow/>, 
        prevArrow:<PrevArrow/>,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <>
        <MovieHero/>
        <div className= "my-12 container px-4 lg-ml-20 lg: w-2/1">
            <div className= "flex flex-col items-start gap-3">
                <h1 className= "text-gray-800 font-bold text-2xl">About the Movie</h1>
                <p>{movie.overview}</p>
            </div>

            <div className= "my-8">
                <hr />
            </div>

            <div className= "my-8">
                <h2 className= "text-gray-800 font-bold text-2xl mb-3">
                    Applicable Offers
                </h2>
                <div className= "flex flex-col gap-3 lg:flex-row">
                    <div className= "flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md">
                        <div className= "w-8 h-8">
                            <FaCcVisa className= "w-full h-full"/>
                        </div>
                        <div className= "flex flex-col items-start">
                            <h3 className= "text-gray-700 text-xl font-bold">
                                VISA Stream Offer
                            </h3>
                            <p className= "text-gray-600">Get 50% off upto ₹150 on all RuPay cards* on BookMyShow Streaming</p>
                        </div>
                    </div>

                    <div className= "flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md">
                        <div className= "w-8 h-8">
                            <FaCcApplePay className= "w-full h-full"/>
                        </div>
                        <div className= "flex flex-col items-start">
                            <h3 className= "text-gray-700 text-xl font-bold">
                                Film Pass
                            </h3>
                            <p className= "text-gray-600">Get 50% off upto ₹150 on all RuPay cards* on BookMyShow Streaming</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className= "my-8">
                <hr />
            </div>

            {/* Cast and Crew Slider */}
            <div className= "my-8">
                <h2 className= "text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
                <Slider {...settingsCast}>
                    {cast.map((castData) =>(

                        <Cast image= {castData.profile_path}
                              castName= {castData.original_name}
                              role= {castData.character}>
                        </Cast>
                    ))}
                </Slider>
            </div>

            <div className= "my-8">
                <hr/>
            </div>

            {/* Recommended Movies Slider */}
            <div className= "my-8">
                <PosterSlider
                    config= {settings}
                    title= "Recommended Movies"
                    posters= {recommendedMovies}
                    isDark= {false}
                />
            </div>

            <div className= "my-8">
                <hr />
            </div>

            <PosterSlider
                config= {settings}
                title= "Similar Movies"
                posters= {similarMovies}
                isDark= {false}
            />
        </div>
        </>
    );
};
export default MovielayoutHOC (MoviePage);