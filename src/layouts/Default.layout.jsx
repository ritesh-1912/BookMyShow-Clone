import React from 'react'
import Navbar from '../components/Navbar/Navbar.Component.jsx';

const DefaultlayoutHOC = 
(Component) => 
({...props}) => {
  return (
    <div>
        <Navbar/>
        <Component {...props}/>
        <div>Footer</div>
    </div>
  );
};

export default DefaultlayoutHOC;