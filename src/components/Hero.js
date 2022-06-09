function Hero() {
  return (
    <section className="relative w-11/12 md:w-9/12 h-[530px] md:h-[625px] mx-auto mt-20">
      <header className="text-center mt-16 text-white">
        <h1 className="font-black text-[3.3rem] lg:text-[3.9rem] mb-2 leading-[51px] md:leading-none">
          WEEKEND FROM HOME
        </h1>
        <p className="font-semibold text-lg italic">
          Stay active with a little workout.
        </p>
      </header>

      {/* CTA  */}
      <div className="absolute w-[250px] top-52 md:top-44 left-0 right-0 mx-auto">
        <div className="w-[184px] h-[305px] mx-auto ">
          <img src="./Bitmap.png" alt="Hero Icon" />
        </div>
        <button
          className="absolute bottom-12 left-0 right-0 mx-auto w-[231px] p-4 font-bold rounded-full 
        bg-white shadow-xl hover:bg-black hover:text-white hover:shadow-md hover:shadow-white"
        >
          Let&#39;s Go
        </button>
      </div>
    </section>
  );
}

export default Hero;
