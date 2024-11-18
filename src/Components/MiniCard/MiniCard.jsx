import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProfessionalCard = () => {
    const cardDataList = [
        {
            date: "Ноябр 1, 2024",
            title: "31 октябр таҳти раёсат Президенти Ҷумҳурии Тоҷикистон, Пешвои миллат...",
            linkText: "Муфассал"
        },
        {
            date: "Октябр 20, 2024",
            title: "Қабули муҳим дар соҳаи тандурустии кишвар...",
            linkText: "Муфассал"
        },
        {
            date: "Сентябр 15, 2024",
            title: "Ҷаласаи навбатии вазорати маориф...",
            linkText: "Муфассал"
        },
        {
            date: "Август 10, 2024",
            title: "Рушди саноати ҳунармандии маҳаллӣ...",
            linkText: "Муфассал"
        }
    ];

    return (
        <>
            <div className='flex items-center justify-between px-[25px] mb-5 mt-[10px]'>
                <h1 className='text-gray-900 text-[20px] font-medium cursor-default'>Президент</h1>
                <p className='text-gray-700 font-medium text-[17px] cursor-pointer hover:underline'>Ҳама</p>
            </div>

            <hr className='w-[95%] border-[#5858588f] mb-[10px] items-center m-auto' />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {cardDataList.map((cardData, index) => (
                    <div 
                        key={index} 
                        className="max-w-sm p-6 bg-blue-50 border border-blue-300 shadow-lg transition-transform transform hover:scale-95 scale-90 hover:shadow-2xl relative overflow-hidden group"
                    >
                        <div className="flex flex-col h-full">
                            <p className="text-gray-700 font-semibold">{cardData.date}</p>
                            
                            <h2 className="mt-2 text-lg text-[16px] mb-[5px] font-bold text-gray-800">
                                {cardData.title.length > 50 
                                    ? cardData.title.slice(0, 50) + "..." 
                                    : cardData.title}
                            </h2>

                            <a href="#" className="mt-auto z-10 inline-flex w-[30%] items-center text-blue-500 font-semibold hover:underline">
                                {cardData.linkText} 
                                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                            </a>
                        </div>

                        <div className="absolute inset-0 bg-[#0404595f] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProfessionalCard;

function Card2({ text, text2, button, image }) {
    return (
        <>
            <div className="relative overflow-hidden h-[60vh] w-[30%] rounded-lg shadow-md duration-150 group">
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="bg-cover bg-center h-full w-full bg-[#7b7b7b81] p-4 transition-transform duration-500 group-hover:scale-105"
                >
                    <div className='bg-[#0000005a] text-center py-[10px] rounded-[15px] mt-[130px]'>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <h1 className="relative cursor-default text-white text-2xl font-bold mb-2 z-10">
                        {text.length > 20 ? text.slice(0,20) + "..." : text }
                    </h1>
                    <p className="relative px-[10px] cursor-default text-white mb-4 z-10">
                        {text2}
                    </p>
                    <button className="relative z-10 bg-gradient-to-r border-[1px] border-white hover:border-blue-600 text-white hover:text-blue-300 py-2 px-6 rounded-[2px] shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out">
                        {button}
                    </button>

                    </div>
                </div>
            </div>
        </>
    );
}

export { Card2 };
