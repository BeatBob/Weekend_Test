import axios from "axios";
import "./Testimoni.css";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const baseURL =
  "https://wknd-take-home-challenge-api.herokuapp.com/testimonial";

function Testimoni() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      partialVisibilityGutter: 45,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      partialVisibilityGutter: 45,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 45,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 45,
    },
  };

  const [testiItems, setTestiItems] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTestiItems(response.data);
    });
  }, []);

  if (!testiItems) return null;

  return (
    <section className="relative w-[89%] md:w-9/12 h-[250px] mx-auto -mt-9 lg:-mt-[8.5rem] md:text-center">
      <header className="text-white mb-2 pl-6 md:pl-0">
        <h2 className="text-[32px] font-bold leading-8 text-shadow">
          Testimonial
        </h2>
      </header>

      {/* carousel  */}
      <Carousel
        responsive={responsive}
        partialVisible={true}
        swipeable={true}
        draggable={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={4000}
        removeArrowOnDeviceType={["mobile", "tablet"]}
        dotListClass="custom-dot-list-style"
        className="w-[620px] h-[194px] px-4 mx-auto"
      >
        {testiItems.map((testiItem) => {
          return (
            <div
              className="w-[247px] h-[140px] bg-white text-left p-5"
              key={testiItem.id}
            >
              <h3 className="text-3xl font-bold mb-3">{testiItem.by}</h3>
              <p className="text-xs">{testiItem.testimony}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}

export default Testimoni;
