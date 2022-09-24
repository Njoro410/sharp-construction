import React from "react";
import { Link } from "react-scroll";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="p-6 py-14 bg-yellow-400 text-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Marquee gradient={false} pauseOnHover={true} speed={100}>
            <h2 className="text-center text-4xl tracking-tighter font-bold overflow-hidden">
              You dream it,
              <br className="sm:hidden" />
              We can build it
            </h2>
          </Marquee>
          {/* <Link to="contact" smooth={true} offset={-50} duration={500}>
		  <a className="btn">Speak with Patience</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
