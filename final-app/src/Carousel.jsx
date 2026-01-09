import React, { useState } from 'react';
import './Carousel.css';
import Button from "./Button";
import slide1 from './images/timur-m-SAKLELG-pO8-unsplash.jpg';
import slide2 from './images/timo-volz-mrTydVjg04o-unsplash.jpg';
import slide3 from './images/raoul-droog-yMSecCHsIBc-unsplash.jpg';
import slide4 from './images/milada-vigerova-7E9qvMOsZEM-unsplash.jpg';
import slide5 from './images/mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg';
import slide6 from './images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg';
import slide7 from './images/laura-chouette-g6Ny4dvHlE0-unsplash.jpg';
import slide8 from './images/kabo-p6yH8VmGqxo-unsplash.jpg';
import slide9 from './images/jack-dong-yJozLVBxNA0-unsplash.jpg';


const Carousel = () => {
    // const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9];
    const slides = [
        { src: slide1, alt: 'Cute fluffy kitten with blue eyes is staring directly at you with slightly surprised expression on a cozy bed' },
        { src: slide2, alt: 'A yellow cat with green eyes is sitting upright inside a small cardboard box on the wooden floor, facing forward with a alert and slightly curious look' },
        { src: slide3, alt: 'A fluffy gray cat with folded ears wearing reflective, yellow-tinted sunglasses, looking very cool' },
        { src: slide4, alt: 'A gray cat with green eyes sits upright on a white table, leaning to the side' },
        { src: slide5, alt: 'A white and gray fluffy cat with blue eyes looks upward with a curious look' },
        { src: slide6, alt: 'A fluffy orange cat is lying on its side with eyes closed, peacefully sleeping with right paw near its face' },
        { src: slide7, alt: 'a gray cat is sitting upright on a white surface, facing to the left in black and white background' },
        { src: slide8, alt: 'A yellow and white cat is standing on a solid yellow surface, looking to the left with tail curled upward' },
        { src: slide9, alt: 'A yellow cat wearing a black zip-up blouse with white stripes is sitting and staring forward against an orange background' },
    ];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const cellSize = 300;
    const cellCount = slides.length;
    const angle = 360 / cellCount;
    const tz = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
    const rotateY = selectedIndex * -angle;

    const next = () => setSelectedIndex((prev) => (prev + 1) % cellCount);
    const prev = () => setSelectedIndex((prev) => (prev - 1 + cellCount) % cellCount);

    return (
        <>
            <div className="scene">
                <div
                    className="carousel"
                    style={{
                        transform: `translateZ(-${tz}px) rotateY(${rotateY}deg)`,
                    }}
                >
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className="carousel__cell"
                            style={{
                                transform: `rotateY(${i * angle}deg) translateZ(${tz}px)`,

                            }}
                        >
                            <img src={slide.src} alt={slide.alt} />

                        </div>
                    ))}
                </div>
            </div>

            <div className="carousel__controls">
                <Button onClick={prev}>‹ Prev</Button>
                <Button onClick={next}>Next ›</Button>
            </div>
        </>
    );
};

export default Carousel;