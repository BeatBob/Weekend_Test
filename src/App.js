import Definition from "./components/Definition";
import Help from "./components/Help";
import Hero from "./components/Hero";
import Pov from "./components/Pov";
import Testimoni from "./components/Testimoni";

function App() {
  return (
    <div className="relative w-screen h-full">
      {/* welcome message  */}
      <div className="h-16 bg-white">
        <div className="w-[69%] h-full m-auto pt-4 flex">
          <div className="w-8 h-8">
            <img src="./Bitmap_2.png" alt="smiley character" />
          </div>
          <div className="ml-3">
            <p className="text-xs font-medium -mb-1">Good Morning</p>
            <p className="font-bold">Fellas</p>
          </div>
        </div>
      </div>

      {/*hero bubbles*/}
      <div className="absolute top-0 left-[-32rem] md:left-0 w-max -z-20">
        <img src="./Path_2.png" alt="black bubble" />
      </div>
      <div className="absolute top-0 left-[-25rem] md:left-[7.5rem] w-max -z-20">
        <img src="./Path.png" alt="blue bubble 1" />
      </div>
      <div className="absolute top-[17rem] -left-16 sm:left-28 xl:left-[26.6rem] -z-20">
        <img src="./Oval.png" alt="blue bubble 2" />
      </div>
      <div className="hidden lg:block absolute top-[19rem] lg:right-10 xl:right-40 -z-20">
        <img src="./Path_3.png" alt="pink bubble" />
      </div>

      <Hero />
      <Definition />
      <Testimoni />
      <Pov />
      <Help />

      <footer className="w-full h-[67px] bg-[#0B24FB] text-white flex items-center">
        <div className="w-[311px] md:w-[59rem] mx-auto flex justify-between">
          <p className="text-xs md:text-base">
            wknd@<span className="font-light">2020</span>
          </p>

          <div className="w-[94px] lg:w-[126px] h-[19px] md:h-auto text-center border-[1px] border-solid border-white rounded-xl">
            <p className="text-[.65rem] md:text-sm font-extralight">
              alpha version 0.1
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
