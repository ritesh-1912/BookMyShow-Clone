import React, { useState } from 'react';
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from './Arrows.Component.jsx';

const HeroCarousel = () => {
  const [images] = useState([
    {
        adult: false,
        backdrop_path: "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/rw9fSaQ4jkm4tDwn5qIXWBRmNEs.jpg",
        genre_ids: [16, 878, 28],
        id: 610150,
        original_language: "en",
        original_title: "Captain America: Brave New World",
        overview:
          "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
        popularity: 9999.99,
        poster_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/z0ujnXounP4yq637zyLBiZThF7Y.jpg",
        release_date: "2025-01-14",
        title: "Captain America: Brave New World",
        video: false,
        vote_average: 10,
        vote_count: 999,
    },
    
    {
        adult: false,
        backdrop_path: "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/fS3OVEfYkW1BNRydu1GZrfdbqvu.jpg",
        genre_ids: [53],
        id: 985939,
        original_language: "en",
        original_title: "Thunderbolts*",
        overview:
          "An irreverent team-up featuring depressed assassin Yelena Belova alongside the MCU’s least anticipated band of misfits.",
        popularity: 6731.327,
        poster_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/hQYEA4Ty1RlxsToWMYLE2RzSc0N.jpg",
        release_date: "2022-05-02",
        title: "Thunderbolts*",
        video: false,
        vote_average: 10,
        vote_count: 999,
    },
    {
      adult: true,
        backdrop_path: "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
        genre_ids: [10],
        id: 235325,
        original_language: "en",
        original_title: "Oppenheimer",
        overview:
          "An irreverent team-up featuring depressed assassin Yelena Belova alongside the MCU’s least anticipated band of misfits.",
        popularity: 6731.327,
        poster_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        release_date: "2022-07-21",
        title: "Oppenheimer",
        video: false,
        vote_average: 10,
        vote_count: 999,
     
    },
    {
      adult: true,
        backdrop_path: "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/by8z9Fe8y7p4jo2YlW2SZDnptyT.jpg",
        genre_ids: [10],
        id: 65757,
        original_language: "en",
        original_title: "Deadpool and Wolverine",
        overview:
          "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
        popularity: 6731.327,
        poster_path: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
        release_date: "2022-07-26",
        title: "Deadpool and Wolverine",
        video: false,
        vote_average: 10,
        vote_count: 999,
     
    }
  ]);

    const settingsLG = {arrows: true,
                        slidesToShow: 1,
                        dots: true,
                        infinite: true, 
                        speed: 500, 
                        slideToScroll: 1, 
                        nextArrow:<NextArrow/>, 
                        prevArrow:<PrevArrow/>,
                        autoplay: true,
                        autoplaySpeed: 4000,
                        cssEase: "linear",
                      };

    const settings = {arrows: true, 
                      slidesToShow: 1,
                      infinite: true, 
                      speed: 500, 
                      slideToScroll: 1,
                      nextArrow:<NextArrow/>, 
                      prevArrow:<PrevArrow/>,
                      autoplay: true,
                      autoplaySpeed: 2000,
                      cssEase: "linear",
                    };

  return (
    <>
    <div className= 'lg:hidden'>
      <HeroSlider {...settings}>
      {
        images.map((images, index) => (
          <div className= 'w-full h-56 md:h-80 py-3' key={index}>
            <img src = {`https://image.tmdb.org/t/p/original${images.backdrop_path}`} 
             alt='Hero Banner' 
             className= 'w-full h-full rounded-md object-cover'
            />
          </div>
        ))
      }
      </HeroSlider>
    </div>
    
    <div className= 'hidden lg:block'>
      <HeroSlider {...settingsLG}>
      {
        images.map((images, index) => (
          <div className= 'w-full h-96 px-2 py-3' key={index}>
            <img src = {`https://image.tmdb.org/t/p/original${images.backdrop_path}`} 
             alt='Hero Banner' 
             className= 'w-full h-full rounded-md object-cover'
            />
          </div>
          ))
      }
      </HeroSlider>
    </div>
    </>
  );
};

export default HeroCarousel;