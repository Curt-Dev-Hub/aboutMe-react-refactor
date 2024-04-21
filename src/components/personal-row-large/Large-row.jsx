import './css/Large-row.css';
import React from 'react'
import { useEffect } from 'react';



function LargeRow() {
    const myImage = './assets/personal-row-images/rsz_me-cropped.webp'

    // adjust top image image sizing dynamically
    function adjustImageWidth() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const topImage = document.querySelector('.top-image');

        if(screenHeight < 500) {
            topImage.style.height = `${screenHeight - 100}px`;
        } 
        else if(screenHeight >= 800) {
            topImage.style.maxHeight = '400px';
        }

        else if(screenHeight > 1024) {
            topImage.style.maxHeight = '700px';
        }

        if(screenWidth > 1023) {
            topImage.style.width = `${screenWidth /2 - 200}px`
        }
        
        if(screenWidth < 1024) {
            topImage.style.width = `${screenWidth /2}px`;    
        }
    }

    useEffect(() => {
        window.addEventListener('resize', adjustImageWidth);
        // set initial width
        adjustImageWidth();

        return () => {
            window.removeEventListener('resize', adjustImageWidth);
        };
    }, []);

    return (
        <div className="row-large">
            <img className="top-image" src={myImage} alt="a selfie of me" />
            <div className='headerIntroContainer'>
                <h1>So... A Bit About Me 😊</h1>
                <p className="intro">
                    Hello, I'm Curtis, a passionate web developer on a mission to create captivating digital experiences.
                    My coding journey began in August 2018, and since then, my dedication and self-motivation have driven me to pursue coding as my lifelong career choice. 
                    Having amassed valuable insights and skills through diverse roles in my career, 
                    I am now ready to embark on a new venture and establish myself as a sought-after freelance web developer. 
                    I am also open to contract work with a minimum term of 12 months should the right opportunity come.
                </p>
            </div>
        </div>
    )
}


export default LargeRow;