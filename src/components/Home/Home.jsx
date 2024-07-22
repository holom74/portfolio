import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import image1 from '../../assets/images/img_bg_1-PzvG2r05.jpg';
import image2 from '../../assets/images/img_bg_2-DzCs5o-0.jpg';

const images = [image1, image2];

const texts = [
  { title: 'Welcome to My Portfolio', subtitle: 'Explore my latest projects ' , button:'DOWNLOAD CV ' },
  { title: 'HI!!!!!', subtitle: 'I\'m a developer.',  button:' VIEW PORTFOLIO  ' },
  
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <>
    <div className=' container-fluid p-0 top-0 w-100'>
    <div className={`${styles.background}`} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <div className="Container p-0">
      </div>
      <div>
      <div className="Container d-flex flex-column  justify-content-center align-items-center min-vh-100 ms-3">
        <h1 className=' text-danger-emphasis'>{texts[currentTextIndex].title}</h1>
        <p className=' text-warning'>{texts[currentTextIndex].subtitle}</p>
        <button className='btn btn-outline-info ' >{texts[currentTextIndex].button}</button>
      </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
