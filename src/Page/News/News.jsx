import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CursorAnimation from '../../Components/CursorAnimation/CursorAnimation';
import { Link } from 'react-router-dom';

function News() {


    const cardRef = useRef(null);
    const cardRef2 = useRef(null);

    const scrollToCard = () => {
        if (cardRef.current) {
            cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (cardRef2.current) {
            cardRef2.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, easing: 'ease-out-sine' });
        document.body.style.scrollBehavior = "smooth";
    }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [expandedInfo, setExpandedInfo] = useState(null);
    const [filteredCategory, setFilteredCategory] = useState("all");

    const newsItems = [
        { title: "Экстренное сообщение", description: "Срочные изменения на рынке", image: "https://moh.tj/wp-content/uploads/2024/11/987089098-.jpg", fullText: "Подробности о резких колебаниях на рынке и последствиях для экономики.", category: "Global Health" },
        { title: "Важная новость в медицине", description: "Прорыв в лечении заболеваний", image: "https://moh.tj/wp-content/uploads/2024/11/7687997.jpg", fullText: "Новые достижения в области медицины и их влияние на глобальное здоровье.", category: "Global Health" },
        { title: "Культурные события", description: "Новые выставки и концерты", image: "https://moh.tj/wp-content/uploads/2024/11/53414148715_19024d3dbc_o-1536x1024.jpg", fullText: "Обзор культурных мероприятий, которые будут проходить в ближайшее время.", category: "Tech Innovations" },
    ];

    const trendingTopics = [
        { title: "Tech Innovations", description: "Latest breakthroughs in tech", category: "Tech Innovations" },
        { title: "Global Health", description: "Health updates worldwide", category: "Global Health" },
        { title: "Tech Innovations", description: "Latest breakthroughs in tech", category: "Tech Innovations" },
        { title: "Political News", description: "Current political developments", category: "Political News" },
        { title: "Global Health", description: "Health updates worldwide", category: "Global Health" },
        { title: "Political News", description: "Current political developments", category: "Political News" },
        { title: "Global Health", description: "Health updates worldwide", category: "Global Health" },
        { title: "Political News", description: "Current political developments", category: "Political News" },
    ];

    // Filter news items based on search term
    const filteredNewsItems = newsItems.filter(item => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
               item.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Filter trending topics based on selected category
    const filteredTrendingTopics = trendingTopics.filter(item => {
        return (filteredCategory === "all" || item.category === filteredCategory) && 
               (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    const handleExpand = (index) => {
        setExpandedInfo(expandedInfo === index ? null : index);
    };

    return (
        <>
            <CursorAnimation />
            <div className="min-h-screen bg-gray-100 font-serif overflow-hidden">
                {/* Navigation Bar */}
                <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                    <div className="container mx-auto py-4 flex justify-between items-center px-6">
                        <div className="text-3xl font-bold text-black">
                            <a href="#">Хабарҳо</a>
                        </div>
                        <div className="space-x-6">
                            <Link to="/">
                            <a href="#" className="text-lg text-gray-600 hover:text-black">Aсосӣ</a>
                            </Link>
                            <a onClick={scrollToCard} className="text-lg text-gray-600 hover:text-black">Мубодила</a>
                            <a onClick={scrollToCard} className="text-lg text-gray-600 hover:text-black">Trending Topics</a>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/circle-rotating-globe-breaking-news-background-k-65547785.jpg")' }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="container mx-auto text-center text-white relative z-10 pt-32 pb-16">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">Breaking News</h1>
                        <p className="text-xl mt-4 opacity-80">Stay updated with the latest news</p>
                    </div>
                </section>

                {/* Search Section */}
                <section className="py-12 px-6 bg-gray-100">
                    <div className="container mx-auto text-center">
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full max-w-lg p-4 text-xl border-2 border-gray-400 rounded-full shadow-lg focus:outline-none duration-200 focus:ring-4 focus:ring-gray-500"
                        />
                    </div>
                </section>

                {/* News Section */}
                <section className="container mx-auto py-12 px-6">
                    <h2 className="text-4xl font-semibold text-center text-black mb-12">Latest Articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNewsItems.map((item, index) => (
                            <div key={index} className="group relative" data-aos="fade-up">
                                <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white">
                                    <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
                                        <p className="text-lg text-gray-700 mt-2">{item.description}</p>
                                    </div>
                                </div>

                                {/* Expand Info */}
                                <div
                                    className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    onClick={() => handleExpand(index)}
                                >
                                    <div className="p-6 text-white">
                                        <h4 className="text-xl font-semibold">Муфассал</h4>
                                        <p className={`mt-4 ${expandedInfo === index ? 'block' : 'hidden'}`}>{item.fullText}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trending Topics Section */}
                <section ref={cardRef2} className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-semibold mb-6">Trending Topics</h2>
                        <div className="flex justify-center space-x-8">
                            <div
                                className={`bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 cursor-pointer ${filteredCategory === "Tech Innovations" ? "bg-gray-700" : ""}`}
                                onClick={() => setFilteredCategory("Tech Innovations")}
                            >
                                Tech Innovations
                            </div>
                            <div
                                className={`bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 cursor-pointer ${filteredCategory === "Global Health" ? "bg-gray-700" : ""}`}
                                onClick={() => setFilteredCategory("Global Health")}
                            >
                                Global Health
                            </div>
                            <div
                                className={`bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 cursor-pointer ${filteredCategory === "Political News" ? "bg-gray-700" : ""}`}
                                onClick={() => setFilteredCategory("Political News")}
                            >
                                Political News
                            </div>
                            <div
                                className={`bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 cursor-pointer ${filteredCategory === "all" ? "bg-gray-700" : ""}`}
                                onClick={() => setFilteredCategory("all")}
                            >
                                All Topics
                            </div>
                        </div>

                        {/* Display filtered trending topics */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTrendingTopics.map((topic, index) => (
                                <div key={index} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
                                    <h3 className="text-2xl font-semibold">{topic.title}</h3>
                                    <p className="mt-4">{topic.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


          {/* About Us Section */}
<section className="py-24 bg-gradient-to-r from-slate-700 to-gray-600" data-aos="fade-up">
    <div ref={cardRef} className="container mx-auto text-center px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight opacity-0" data-aos="zoom-in" data-aos-delay="200">
        Мубодила
        </h2>
        <p className="text-xl md:text-2xl text-white opacity-80 mb-12 opacity-0" data-aos="fade-up" data-aos-delay="400">
        Президенти мамлакат Эмомалӣ Раҳмон дар деҳаи Ғарғараи ноҳияи Данғара Маркази ташхис ва табобатиро ба истифода доданд        </p>

        {/* Enhanced Parallax Effect */}
        <div className="relative mb-12 overflow-hidden group">
            <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-t from-gray-800 via-transparent to-transparent z-10"></div>
            <img 
                src="https://moh.tj/wp-content/uploads/2024/07/prezidenti-mamlakat-emomal%D3%A3-ra%D2%B3mon-dar-de%D2%B3ai-%D2%93ar%D2%93arai-no%D2%B3iyai-dan%D2%93ara-markazi-tashhis-va-tabobatiro-ba-istifoda-dodand.jpg" 
                alt="About Us Image" 
                className="w-full h-80 object-cover rounded-lg shadow-xl transform transition duration-500 group-hover:scale-105 group-hover:rotate-3" 
                data-aos="zoom-in" data-aos-delay="600"
            />
        </div>

        {/* Background Animation (Subtle Parallax Scrolling) */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10 z-0" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg")' }}></div>
    </div>
</section>




            </div>
        </>
    );
}

export default News;
