import React, { useState } from 'react';

const HoverMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Вазорат
      </div>
      <div
        className={`absolute top-0 left-full ml-2 w-64 bg-white shadow-lg rounded-lg transition-opacity duration-300 ease-out transform ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-4 border-b mt-[10px]">
          <img
            src="https://moh.tj/wp-content/uploads/2024/09/Abdullozoda-amoliddin-Abdullo.jpg"
            alt="Profile"
            className="w-full h-auto rounded-lg"
          />
          <p className="mt-2 text-gray-600 font-semibold">Абдуллозода Ҷамолиддин Абдулло</p>
          <p className="text-sm text-gray-600">Вазир</p>
        </div>
        <div className="p-4 bg-gray-900">
          <h4 className="font-semibold mb-2">Роҳбарият</h4>
          <ul className="list-disc list-inside text-gray-400">
            <li>Дастгоҳи марказӣ</li>
            <li>Сохтори вазорат</li>
            <li>Намояндагиҳо</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HoverMenu;


import "../HoverDialog/Input.css"

function Input () {
  return (
    <>
      <form class="form">
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <input class="input" placeholder="Type your text" required="" type="text" />
      <button class="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
  </form>
    </>
  )
}

export { Input }