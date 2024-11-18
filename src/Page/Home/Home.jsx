import React, { useRef } from 'react'

// video 
import Video from "/src/Video&Image/Dushanbe.mp4"

// Component 
import Card from '../../Components/BlurMenu/Card/Card';
import BlurMenu from '../../Components/BlurMenu/BlurMenu';
import ProfessionalCard, { Card2 } from '../../Components/MiniCard/MiniCard';

import CursorAnimation from '../../Components/CursorAnimation/CursorAnimation';


// MUI 
import RightIcons from '@mui/icons-material/KeyboardArrowRight';

function Home() {

  const cardRef = useRef(null);

  const scrollToCard = () => {
      if (cardRef.current) {
          cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  };


return (
    <>    
    <CursorAnimation />
    
    <div className="relative w-full">
    <video src={Video} autoPlay muted loop className="w-full h-[90vh] object-cover" />

    <div className="absolute inset-0 bg-black opacity-50"></div>

    <h1 className="absolute w-[700px] top-1/3 left-1/4 transform -translate-x-1/3 -translate-y-1/3 font-medium text-white text-4xl">
    Вазорати тандурустӣ
ва ҳифзи иҷтимоии аҳолии
Ҷумҳурии Тоҷикистон
    <div>
    <button
    onClick={scrollToCard}
    className='p-[5px_25px] mt-5 duration-150 ease-in-out text-[18px] rounded-[2px] border-[1px] border-[white] hover:bg-[#8fbfda7a] hover:text-[#202020] font-medium'>
    Хабарҳои охирин <RightIcons /> 
    </button>
    </div>
    </h1>
    <div className='absolute top-[500px] left-1/2 -translate-x-1/2 -translate-y-1/2'>
    <BlurMenu />
    </div>

    </div>
    <div className='flex justify-center items-center gap-[45px]'>
        <div ref={cardRef}>
        <Card />
        </div>
        <div className='mt-[20px]'>
        <ProfessionalCard />
        </div>
    </div>

    <div className='flex justify-between w-[80%] mt-[150px] mb-[150px] items-center m-auto'>
        <Card2 button={"Муфассал"} text={"Чорабиниҳои расмӣ"} text2={"То баргузории форуми сатҳи баланд чанд рӯзи дигар боқӣ монд"} image={"https://indyguide-web-development.s3.us-east-2.amazonaws.com/listings/images/thumbnail/Navruz-Tour-In-Tajikistan-1644312138401.webp"} />
        <Card2 button={"Муфассал"} text={"Ҳуҷҷатҳои ҷорӣ"} text2={"Кодекси тандурустии Ҷумҳурии Тоҷикистон"} image={"https://i.ytimg.com/vi/QTLdCHIKODM/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGBkgYShlMA8=&rs=AOn4CLD-ohA946aBA8cZByQRN8PCEFo7-A"} />
        <Card2 button={"Муфассал"} text={"Сомонаҳои мақомоти давлатӣ ва шарикони мо"} text2={"Агентии ИМА оид ба рушди байналмилалӣ"} image={"https://timesca.com/wp-content/uploads/2024/11/54113859461_d6f96d0698_b.jpg"} />
    </div>

    <div className='pl-[150px] py-[45px] bg-[#f5f5f5]'>
  <h1 className='text-[27px] font-semibold cursor-default text-gray-800 mb-8'>
    Сомонаҳои мақомоти давлатӣ ва шарикони мо
  </h1>
  <hr className='border-[#0000003a] w-[45%] border-[1px] mb-[50px]' />


  <div className="container mx-auto px-6 md:px-12 py-16">
  <div className="grid grid-cols-1 gap-12">
    <div className="relative group rounded-xl overflow-hidden bg-gradient-to-b from-blue-500 to-indigo-700 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-500 opacity-40"></div>
      <div className="p-8 relative z-10 flex flex-col items-center justify-center text-center group-hover:opacity-100 opacity-90 transition-all">
        <div className="w-24 h-24 mb-6 rounded-full border-4 border-white overflow-hidden shadow-lg transform transition-all group-hover:rotate-6 group-hover:scale-105">
          <img src="https://moh.tj/wp-content/uploads/2024/03/gerb-tadzhikistana.jpg" alt="Логотип" className="w-full h-full object-cover"/>
        </div>
        <h2 className="text-white text-3xl font-bold mb-3 transform transition-all">Президенти Ҷумҳурии Тоҷикистон</h2>
        <p className="text-white opacity-80 text-lg">Роҳбари давлат ва кафили истиқлолияти миллӣ.</p>
      </div>
    </div>

    <div className="relative group rounded-xl overflow-hidden bg-gradient-to-b from-blue-600 to-green-600 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-green-500 opacity-40"></div>
      <div className="p-8 relative z-10 flex flex-col items-center justify-center text-center group-hover:opacity-100 opacity-90 transition-all">
        <div className="w-24 h-24 mb-6 rounded-full border-4 border-white overflow-hidden shadow-lg transform transition-all group-hover:rotate-6 group-hover:scale-105">
          <img src="https://moh.tj/wp-content/uploads/2024/03/gerb-tadzhikistana.jpg" alt="Логотип" className="w-full h-full object-cover"/>
        </div>
        <h2 className="text-white text-3xl font-bold mb-3 transform transition-all ">Маҷлиси миллии Маҷлиси Олии Ҷумҳурии Тоҷикистон</h2>
        <p className="text-white opacity-80 text-lg">Маҷлиси миллии олии намояндагии халқ.</p>
      </div>
    </div>

    <div className="relative group rounded-xl overflow-hidden bg-gradient-to-b from-yellow-500 to-red-600 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-400 opacity-40"></div>
      <div className="p-8 relative z-10 flex flex-col items-center justify-center text-center group-hover:opacity-100 opacity-90 transition-all">
        <div className="w-24 h-24 mb-6 rounded-full border-4 border-white overflow-hidden shadow-lg transform transition-all group-hover:rotate-6 group-hover:scale-105">
          <img src="https://moh.tj/wp-content/uploads/2024/04/proekt-integrirovannyh-uslug-materyam-i-detyam.jpg" alt="Логотип" className="w-full h-full object-cover"/>
        </div>
        <h2 className="text-white text-3xl font-bold mb-3 transform transition-all ">Лоиҳаи «Хизматрасонии интеграсӣ барои модарон ва кӯдакон»</h2>
        <p className="text-white opacity-80 text-lg">Барнома барои беҳтар намудани саломатии модарон ва кӯдакон.</p>
      </div>
    </div>
  </div>
</div>




<section className='mb-[100px]'>
  <h2 className='text-4xl font-extrabold text-center mb-12 text-gray-800'>Барҷастагиҳо</h2>
  <div className='flex flex-col md:flex-row justify-between items-start md:space-x-6 space-y-6 md:space-y-0'>
    <div className='flex flex-col bg-white p-6 rounded-3xl shadow-md hover:shadow-lg hover:bg-gray-50 transition-transform transform hover:-translate-y-1 duration-300'>
      <h3 className='text-xl font-bold mb-3'>Ташаббусҳои нави ҳукумат</h3>
      <p className='text-gray-700 leading-relaxed'>Барномаҳои стратегӣ барои рушди иқтисодӣ ва иҷтимоӣ.</p>
    </div>
    <div className='flex flex-col bg-white p-6 rounded-3xl shadow-md hover:shadow-lg hover:bg-gray-50 transition-transform transform hover:-translate-y-1 duration-300'>
      <h3 className='text-xl font-bold mb-3'>Дастгирии модарон ва кӯдакон</h3>
      <p className='text-gray-700 leading-relaxed'>Нақшаҳои рушди беҳбудии иҷтимоӣ барои гурӯҳҳои осебпазир.</p>
    </div>
    <div className='flex flex-col bg-white p-6 rounded-3xl shadow-md hover:shadow-lg hover:bg-gray-50 transition-transform transform hover:-translate-y-1 duration-300'>
      <h3 className='text-xl font-bold mb-3'>Ташаббусҳои байналмилалӣ</h3>
      <p className='text-gray-700 leading-relaxed'>Иштирок дар барномаҳои минтақавӣ ва байналмилалӣ.</p>
    </div>
  </div>
</section>

<section className='bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 mb-[100px] rounded-3xl shadow-lg'>
  <div className='text-center px-8'>
    <h2 className='text-4xl font-extrabold mb-5'>Иштирок кунед ва саҳми худро гузоред!</h2>
    <p className='text-base mb-6 leading-relaxed'>Ба ҷомеаи фаъолон ҳамроҳ шавед ва дар пешрафти Ватани азиз саҳм гузоред.</p>
    <button className='bg-white text-purple-700 font-semibold px-8 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300'>Ба мо ҳамроҳ шавед</button>
  </div>
</section>



  
</div>




</>
)
}

export default Home