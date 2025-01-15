import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Layout HOC
import DefaultlayoutHOC from '../layouts/Default.layout.jsx';

//Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component.jsx';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component.jsx';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component.jsx';

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=35ad386f358b34b66d6755c73259354e");
            setRecommendedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, []);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=35ad386f358b34b66d6755c73259354e");
            setPremierMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=35ad386f358b34b66d6755c73259354e");
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);


    return (
    <>
    <HeroCarousel/>

    <div className= "container mx-auto px-4 md:px-12 my-8">
        <PosterSlider title= "Recommended Movies" 
                      subtitle= "List of Recommmended Movies"
                      posters= {recommendedMovies} 
                      isDark = {false}
        />
    </div>

    <div className= "container mx-auto px-4 md:px-12 my-8">
        <h1 className= "text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The Best of Live Events</h1>
        <EntertainmentCardSlider/>
    </div>

    <div className= "bg-premier-800 py-12">
        <div className= "container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <div className= "hidden md:flex">
                <img src= "https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                     alt="Rupay" 
                     className= "w-full h-full "/>
            </div>
            <PosterSlider title= "Premiers" 
                          subtitle= "New Releases every Friday" 
                          posters= {premierMovies} 
                          isDark = {true}
            />
        </div>
    </div>

    <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider title= "Online Stream Events" 
                      subtitle= "Stream Events Online!" 
                      posters= {onlineStreamEvents} 
                      isDark = {false}
        />
    </div>
    </>
    );
};

export default DefaultlayoutHOC(HomePage);