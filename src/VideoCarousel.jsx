import React, { useState } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';

 // Import the custom styles

const VideoCarousel = () => {
  // List of videos and their YouTube URLs
  const videos = [
    { id: 1, url: 'https://www.youtube.com/watch?v=fP2jh6TqP8g',className:"testimonial", title: 'Join us on an inspiring journey as individuals from diverse backgrounds share their experiences and ' },
    { id: 2, url: 'https://www.youtube.com/watch?v=fP2jh6TqP8g', title: 'Join us on an inspiring journey as individuals from diverse backgrounds share their experiences and ' },
    { id: 3, url: 'https://www.youtube.com/watch?v=fP2jh6TqP8g', title: 'Join us on an inspiring journey as individuals from diverse backgrounds share their experiences and ' },
    { id: 4, url: 'https://www.youtube.com/watch?v=fP2jh6TqP8g', title: 'Join us on an inspiring journey as individuals from diverse backgrounds share their experiences and ' },
    { id: 5, url: 'https://www.youtube.com/watch?v=fP2jh6TqP8g', title: 'Join us on an inspiring journey as individuals from diverse backgrounds share their experiences and ' },


    

  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h1>TESTIMONIALS</h1>
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <VideoCard videoUrl={video.url} title={video.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const VideoCard = ({ videoUrl, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from YouTube URL
  const getYoutubeId = (url) => {
    const regExp = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getYoutubeId(videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
    <div className="video-thumbnail-container">
      {!isPlaying ? (
        <div className="thumbnail" onClick={() => setIsPlaying(true)}>
          <img src={thumbnailUrl} alt="YouTube Thumbnail"  className="rounded-image"width="100%" />
          <button className="play-button">▶️</button>
          <p>{title}</p>
          <a href="/" class="read-more-link">Read more </a>
        </div>
      ) : (
        <ReactPlayer url={videoUrl} playing={isPlaying} controls={true} width="100%" className="rounded-video" />
      )}
    </div>
    </>
   


  );
};
export default VideoCarousel;