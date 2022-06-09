import React from "react";

function Definition() {
  return (
    <section className="relative w-full h-[648px] md:h-[591px] mx-auto flex justify-center items-center lg:items-start">
      {/* bubbles  */}
      <div className="absolute top-0 right-0 w-max -z-20">
        <img src="./Path_5.png" alt="black bubble" />
      </div>
      <div className="absolute top-0 right-8 w-[95px] h-[158px] -rotate-90 -z-20">
        <img src="./Bitmap.png" alt="Icon" />
      </div>
      <div className="absolute bottom-4 lg:bottom-24 left-12 lg:left-[17.6rem] w-[89px] h-[89px] -z-20">
        <img src="./Oval.png" alt="blue bubble" />
      </div>

      {/* Definisi  */}
      <div className=" w-[311px] lg:w-[619px] mt-24 lg:mt-36">
        <p className="text-right font-semibold lg:text-[21px] tracking-tight leading-8">
          <span className="text-[#0B24FB] font-bold">Deffinition;</span> a
          practice or exercise to test or improve one's fitness for athletic
          competition, ability, or performance to exhaust (something, such as a
          mine) by working to devise, arrange, or achieve by resolving
          difficulties. <br /> Merriam-Webster.com Dictionary.
        </p>
        <p className="text-white text-right lg:text-[21px] italic mt-6 text-shadow">
          -weekend team
        </p>
      </div>
    </section>
  );
}

export default Definition;
