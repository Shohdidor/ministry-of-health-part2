import React from 'react';
import CursorAnimation from '../../Components/CursorAnimation/CursorAnimation';

function Vazorat() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <CursorAnimation />
      <section className="relative bg-gray-900 py-32 text-center text-white overflow-hidden bg-fixed bg-cover" style={{ backgroundImage: "url('https://itinari-images.s3.eu-west-1.amazonaws.com/activity/images/original/7df43604-e9ce-4735-a31c-9e1ca6623396-dushanbe_presidential_palace_01.jpg')" }}>
  <div className="relative z-10">
    <h1 className="text-5xl sm:text-6xl mt-[100px] font-extrabold text-gold mb-4">
    Вазорати тандурустӣ
ва ҳифзи иҷтимоии аҳолии
Ҷумҳурии Тоҷикистон</h1>
  </div>
</section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://moh.tj/wp-content/uploads/2024/09/Abdullozoda-amoliddin-Abdullo.jpg"
              alt="John Doe"
              className="w-full h-full border-8 shadow-2xl"
            />
          </div>
          {/* Bio */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gold mb-4">
              A Vision for the Future
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 px-4 md:px-12">
              As the President of the Republic, John Doe has worked tirelessly to foster an environment of growth, stability, and opportunity. His leadership continues to inspire transformative change, creating a legacy built on trust and commitment to the nation's future.
            </p>
            <p className="text-md sm:text-lg text-gray-400 px-4 md:px-12">
              His dedication to ensuring a brighter tomorrow for every citizen is unwavering. Through transparency, ethical governance, and a clear vision, he aims to lead the Republic into an era of unparalleled progress and prosperity.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Vazorat;
