import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardModel from './CardModel';
import FlipCardSection from './FlipCardSection';
import Consumer from './Consumer';
import VideoCarousel from './VideoCarousel';
import Footer from './Footer';
import KeyProjects from './KeyProjects';



const App=()=>{
    return(
        <>
        <MyNavbar/> 
    
        <CardModel/>
        <FlipCardSection/>
        <Consumer/>
        <VideoCarousel/>
        <KeyProjects/>
        <Footer/>
        



        </>
    )
}
export default App;