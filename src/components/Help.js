import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://wknd-take-home-challenge-api.herokuapp.com/help-tips";

function Help() {
  const [helpItems, setHelpItems] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setHelpItems(response.data);
    });
  }, []);

  if (!helpItems) return null;

  return (
    <section className="relative w-full lg:h-screen text-white">
      {/* bubbles  */}
      <div className="hidden xl:block absolute top-0 right-32 -z-20">
        <img src="./Path_6.png" alt="pink bubble" />
      </div>
      <div className=" absolute bottom-0 left-0 -z-20">
        <img src="./Path_4.png" alt="pink bubble2" />
      </div>
      <div className="block absolute bottom-24 left-8 w-[137px] h-[227px] rotate-180 scale-x-[-1] -z-20 ">
        <img src="./Bitmap.png" alt="Hero Icon" />
      </div>

      {/* content  */}
      <div className="w-[311px] lg:w-[60rem] mx-auto">
        <h2 className="text-[2rem] md:text-center font-black mb-5">
          Help & Tips
        </h2>

        <div className="mx-auto lg:flex justify-around">
          {helpItems.map((helpItem) => {
            return (
              <div
                className="relative w-[311px] h-[176px] mb-3 lg:mb-0"
                key={helpItem.id}
              >
                <img src={helpItem.image} alt={helpItem.slug} />

                {/* CTA  */}
                <div className="absolute bottom-0 h-[72px] flex py-4 pl-6 pr-4 bg-[#00000081]">
                  <p className="font-medium leading-5 tracking-tight ">
                    {helpItem.title}
                  </p>
                  <div className="w-12 h-12 hover:cursor-pointer hover:hue-rotate-90 hover:scale-105 transition-all">
                    <img src="./arrow.png" alt="arrow" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-[311px] md:w-[40rem] h-[80vh] lg:h-auto mx-auto mt-[7.5rem] md:text-center">
        <h2 className="text-[2rem] font-extrabold mb-7">You&#39;re all set.</h2>
        <p className="font-light md:text-lg md:tracking-tight">
          The wise man therefore always holds in these matters to this principle
          of selection.
        </p>
      </div>
    </section>
  );
}

export default Help;
