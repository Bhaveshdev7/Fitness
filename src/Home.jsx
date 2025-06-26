
        import React from "react";
        import img1 from "./assets/Rectangle 4.png";

        const Home = () => {
          return (
            <section className="relative w-full h-auto pt-18">
              <img
                src={img1}
                alt="Muscular man lifting dumbbell in gym with dark blue lighting, sitting on bench"
                className="w-full h-full "
              />
             
              <div className="absolute mb-20 inset-0 z-10 flex flex-col justify-center px-6 md:px-20 max-w-screen-xl mx-auto">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-orbitron font-extrabold max-w-xl space-y-2 flex flex-col">
  <span><span className="text-orange-600">Unleash</span> your</span>
  <span>Inner Athlete</span>
</h1>

                <p className="text-white max-w-lg mt-4 text-sm sm:text-base font-quicksand leading-relaxed">
                  Get ready to sweat it out and achieve your fitness goals with
                  our high-energy fitness classes! Our classes are designed to
                  cater to all fitness levels and provide a fun and motivating
                  environment to help you reach your peak performance.
                </p>
                <button
                  type="button"
                  className="mt-6 bg-orange-600 text-white font-extrabold text-md rounded-full px-8 py-3 w-max hover:text-orange-700 hover:bg-white transition"
                >
                  Start free trial
                </button>
              </div>
            </section>
          );
        };
        
        export default Home;
        
   