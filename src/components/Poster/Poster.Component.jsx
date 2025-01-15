import React from 'react';
import {Link} from "react-router-dom";


const MoviePoster = (props) => {
  return (
  <Link to = {`/movie/${props.id}`}>
    <div className= "flex flex-col items-start gap-2 px-1 md:px-3">
      <div className= "h-40 md:h-80">
        <img src = {`https://image.tmdb.org/t/p/original${props.poster_path}`}
             alt= "Poster" 
             className= "h-full w-full rounded-md" />
      </div>

      <h3 className= {`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
    </div>
  </Link>
  );
};

const PlayPoster = (props) => {
  return (
    <a href= "https://in.bookmyshow.com/plays/act-on-the-spot/ET00378386"
       target= "_blank"
       rel= "noreferrer">

        <div className= "flex flex-col items-start gap-2 px-1 md:px-3">
          <div className= "h-40 md:h-80">
            <img src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxOSBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378386-shmlwwenzb-portrait.jpg"
                 alt= "Poster"
                 className= "w-full h-full rounded-md object-center object-cover"/>
          </div>
          <h3 className= {`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{"Improv Workshop"}</h3>
        </div>
       </a>
  );
};

const Poster = (props) => {
  if(props.isPlay) {
    return <PlayPoster {...props} />;
  }
  return <MoviePoster {...props} />;
};

export default Poster;