import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../Layout/Layout.css";

// Icons 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import HoverMenu from '../Components/HoverDialog/HoverDialog';

function Layout() {
    return (
        <>
            <div className="absolute flex justify-around gap-[300px] z-10 bg-transparent mt-[50px] w-full items-center right-0">
                    <img className='w-[5%]' src="https://moh.tj/wp-content/uploads/2024/03/Emblem_of_Tajikistan.svg" alt="Нишон" />
                <ul className="flex space-x-10 md:justify-end">
                    <li>
                        <Link to="/" className="nav-link">
                            Асосӣ
                        </Link>
                    </li>
                    <li>
                        <Link to="aboutTJK" className="nav-link">
                        Тоҷикистон
                        </Link>
                    </li>
                    <li>
                        <Link to="vazorat" className="nav-link">
                            <HoverMenu />
                        </Link>
                    </li>
                    <li>
                        <Link to="location" className="nav-link">
                            Тамос
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <Outlet />
            </div>

            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* About Section */}
                        <div className="space-y-4">
                            <img src="https://moh.tj/wp-content/uploads/2024/03/Emblem_of_Tajikistan.svg" alt="image" className='w-[20%]' />
                            <p className="text-gray-400 text-center md:text-left">
                                Вазорати тандурустӣ ва ҳифзи иҷтимоии аҳолии Ҷумҳурии Тоҷикистон
                            </p>
                            <div className="flex cursor-default justify-center md:justify-start space-x-6 text-gray-400">
                                <a href="#" className="transition cursor-pointer duration-300 hover:text-blue-500">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="transition cursor-pointer duration-300 hover:text-blue-500">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="transition cursor-pointer duration-300 hover:text-blue-500">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="transition cursor-pointer duration-300 hover:text-blue-500">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold cursor-default text-gray-200">Низомнома</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="transition cursor-pointer duration-300 hover:text-blue-500">
                                        Сохтор
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/aboutTJK" className="cursor-pointer duration-300 hover:text-blue-500">
                                        Роҳбарият
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/vazorat" className="transition cursor-pointer duration-300 hover:text-blue-500">
                                        Муроҷиат ба вазир
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/location" className="transition cursor-pointer duration-300 hover:text-blue-500">
                                        Тамос
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold cursor-default text-gray-200">Душанбе к. Шевченко, 69</h3>
                            <p className="text-gray-400 cursor-default">
                                +992 (44) 600 60 02 - Маркази матбуот
                            </p>
                            <p className="text-gray-400 cursor-default">
                                +992 (37) 221 12 48 - Шӯъбаи умумӣ
                            </p>
                            <p className="text-gray-400 cursor-pointer hover:text-blue-500 duration-200 ease-in-out">
                                info@moh.tj
                            </p>
                            <p className="text-gray-400 cursor-default">
                                ВАО иҷтимоӣ
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-600 pt-8">
                        <p className="text-center text-gray-400 cursor-default">
                            2024. Ҳама ҳуқуқҳо ҳифз шудаанд. Ҳангоми чопи ҳама гуна мавод, истинод ба вебсайт лозим аст
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Layout;
