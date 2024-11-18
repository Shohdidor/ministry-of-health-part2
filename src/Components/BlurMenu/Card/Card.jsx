import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cardData = [
    {
        image: "/src/Video&Image/Image1.jpg",
        title: "Нахустин ҷаласаи гурӯҳи ҳамоҳангсозӣ оид ба натиҷаҳои татбиқи лоиҳаи “Миллати солими Тоҷикистон” барои соли 2024",
        date: "1 Ноябр 2024",
        link: "#"
    },
    {
        image: "/src/Video&Image/Image2.jpg",
        title: "Вазорати тандурустӣ ва ҳифзи иҷтимоии аҳолии Ҷумҳурии Тоҷикистон барои ишғоли мансабҳои холии зерин озмун эълон менамояд",
        date: "15 Июл 2023",
        link: "#"
    },
    {
        image: "/src/Video&Image/Image3.jpg",
        title: "Ҷаласаи корӣ вобаста ба пешгирии омилҳои коррупсионӣ",
        date: "3 Сентябр 2023",
        link: "#"
    }
];

const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const nextImage = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
            setIsFading(false);
        }, 300);
    };

    const prevImage = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
            setIsFading(false);
        }, 300);
    };

    return (
        <>
            <div className='inline-block mt-[50px]'>
                <div className='flex items-center mb-[15px]'>
                    <h1 className='text-[20px] font-medium cursor-default pr-[168px] text-[#11115c]'>
                        Хабарҳо
                    </h1>
                    <p className='text-[17px] text-[#3e3e3e] font-medium pr-[30px] hover:underline cursor-pointer'>
                        Ҳама
                    </p>
                    <div className='flex gap-3'>
                        <button 
                            onClick={prevImage} 
                            className="border-gray-800 border-[1px] text-gray-800  px-2 py-1 "
                        >
                            &lt;
                        </button>
                        <button 
                            onClick={nextImage} 
                            className="border-gray-800 border-[1px] text-gray-800  px-2 py-1 "
                        >
                            &gt;
                        </button>    
                    </div>
                </div>   
                <hr className='border-[#5858588f] py-[5px]' />
            </div>

            <div className="max-w-sm shadow-2xl shadow-[#00000053] overflow-hidden relative">
                <div className={`transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'} overflow-hidden`}>
                    <img 
                        src={cardData[currentIndex].image} 
                        alt="Card Image" 
                        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110 hover:opacity-80"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                    { 
        cardData[currentIndex].title.length > 30 
            ? cardData[currentIndex].title.slice(0, 40) + "..."
            : cardData[currentIndex].title
    }                        </h2>
                    <p className="text-gray-600">{cardData[currentIndex].date}</p>

                    <Link to="news" >
                    <p className="text-blue-500 cursor-pointer hover:underline mt-2 inline-block">
                        Муфассал &rarr; 
                    </p>
                    </Link>
                    
                </div>
            </div>
        </>
    );
};

export default Card;




