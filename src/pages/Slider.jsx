import { useState, useEffect, useRef } from 'react';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';

const Slider = () => {
    const images = [
        'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/6/y/h/free-pan-single-maroon-gold-tapovan-fashion-unstitched-original-imagychrs2gbdwvt.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/s/9/q/free-jacquard-silk-blend-kanjivaram-banarasi-dailywear-saree-153-original-imah6r2sparhfwbg.jpeg?q=70',
        "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/5/j/f/l-dark-brown-gown-y-p-original-imagqffcxp9ejgyh.jpeg?q=70&crop=false"
        // Add your image paths here
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let flakes = Array.from({ length: 100 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 4 + 1,
            d: Math.random() * 1 + 0.5,
        }));

        const drawFlakes = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            ctx.beginPath();
            for (let f of flakes) {
                ctx.moveTo(f.x, f.y);
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            }
            ctx.fill();
        };

        const moveFlakes = () => {
            for (let f of flakes) {
                f.y += f.d;
                f.x += Math.sin(f.y * 0.01);
                if (f.y > canvas.height) {
                    f.y = 0;
                    f.x = Math.random() * canvas.width;
                }
            }
        };

        const updateSnow = () => {
            drawFlakes();
            moveFlakes();
            requestAnimationFrame(updateSnow);
        };

        updateSnow();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div className="w-full mx-auto bg-black">
            <div className="relative w-full overflow-hidden rounded-lg shadow-md">
                {/* Snowfall Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                />

                {/* Slide Image */}
                <img
                    src={images[current]}
                    alt={`Slide ${current + 1}`}
                    className="w-full lg:h-screen h-full object-top transition duration-500"
                />

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 cursor-pointer left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-3 py-1 rounded-full shadow z-20"
                >
                    <TbPlayerTrackPrevFilled />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 cursor-pointer right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-3 py-1 rounded-full shadow z-20"
                >
                    <TbPlayerTrackNextFilled />
                </button>
            </div>

            {/* Dots navigation */}
            <div className="flex justify-center mt-4 gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-1000 ${
                            current === index ? 'bg-blue-600 scale-110' : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;

