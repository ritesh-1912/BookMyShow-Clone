import React from 'react'
import MovieNavbar from '../components/Navbar/MovieNavbar.Component.jsx';

const MovielayoutHOC = 
(Component) => 
({...props}) => {
  return (
    <div>
        <MovieNavbar/>
        <Component {...props}/>
    </div>
  );
};

export default MovielayoutHOC;