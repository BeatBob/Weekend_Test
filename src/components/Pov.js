import React from "react";

function Pov() {
  return (
    <section
      className="relative w-[311px] md:w-[619px] h-[648px] md:h-[560px] mx-auto md:text-center 
    flex flex-col justify-around text-white pb-16"
    >
      <div className="-mt-2 md:mt-9 -mb-4 md:mb-0">
        <h2 className="text-3xl font-black mb-8">POV</h2>
        <p className="md:text-[1.125rem] px-1 tracking-tighter leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>

      {/* Resource  */}
      <div className="mt-8">
        <h2 className="text-3xl font-black mb-7 md:mb-8">Resource</h2>
        <p className="md:text-[1.15rem] leading-7 px-2 font-light tracking-tight">
          These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best
        </p>
      </div>
    </section>
  );
}

export default Pov;
