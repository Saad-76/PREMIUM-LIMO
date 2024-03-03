import React from "react";
import Bg from "@/public/Assets/bg.jpeg";
import SecondarBtn from "@/components/secondaryBtn";

const Hero: React.FC = () => {
  return (
    <div
      className="hero font-scotia min-h-screen h-1/2"
      style={{
        backgroundImage: `url(${Bg.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-neutral-content flex items-start md:pl-4">
        <div className="sm:w-1/3 md:h-1/3 pl-2">
          <h1 className="mb-1 text-yellow-300 md:text-5xl font-semibold font-scotia">
            PREMIUM
          </h1>
          <h3 className="mb-3 text-white md:text-4xl  font-scotia  font-semibold">
            Transportation services
          </h3>
          <p className="mb-2 font-scotia">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda a
            id nisi.
          </p>
          <p className="mb-2 font-scotia">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="mb-8">
            <SecondarBtn placeholder="GET A QUOTE" />
          </div>
          <SecondarBtn placeholder="BOOK NOW" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
