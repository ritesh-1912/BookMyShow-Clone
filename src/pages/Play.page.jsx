import React from 'react';
import DefaultlayoutHOC from '../layouts/Default.layout.jsx';
import PlayFilter from '../components/PlayFilter/PlayFilter.Component.jsx';
import Poster from '../components/Poster/Poster.Component.jsx';

const PlayPage = () => {
    return(
        <>
        <div className= "container mx-auto px-4 my-10">
            <div className= "w-full flex flex-col lg:flex-row gap-3">
                <h2 className= "text-2xl font-bold mb-4">Plays in Bangalore</h2>
                <div className= "flex flex-wrap">
                    <div className= "w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                    <Poster isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxOSBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378386-shmlwwenzb-portrait.jpg" 
                            title= "Improv Workshop" 
                            subtitle= "Comedy Show | English | 18+ | 1hrs"/></div>

                    <div className= "w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                    <Poster isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxOSBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378386-shmlwwenzb-portrait.jpg" 
                            title= "Improv Workshop"
                            subtitle= "Comedy Show | English | 18+ | 1hrs"/></div>

                    <div className= "w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                    <Poster isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxOSBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378386-shmlwwenzb-portrait.jpg" 
                            title= "Improv Workshop"
                            subtitle= "Comedy Show | English | 18+ | 1hrs"/></div>

                    <div className= "w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                    <Poster isPlay = {true} 
                            src = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxOSBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00378386-shmlwwenzb-portrait.jpg" 
                            title= "Improv Workshop"
                            subtitle= "Comedy Show | English | 18+ | 1hrs"/></div>
                </div>
            </div>

            <div className= "lg:w-1/4 p-4 bg-white rounded">
                <h2 className= "text-2xl font-bold mb-4">Filters</h2>
                <div><PlayFilter title= "Date" 
                                 tags={["Today", "Tomorrow", "This Weekend"]}/></div>
                <div><PlayFilter title= "Language" 
                                 tags={["English", "Hindi", "Francais"]}/></div>
            </div>
        </div>
        </>
    );
};

export default DefaultlayoutHOC (PlayPage);