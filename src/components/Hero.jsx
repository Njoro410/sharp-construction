import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <div className="absolute">
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div className="h-[25rem]">
            <img
              className="h-[25rem]"
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&w=1000&q=80"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div className="h-[25rem]">
            <img
              className="h-[25rem]"
              src="https://img.freepik.com/premium-photo/tropical-interior-design-living-room_269031-60.jpg?w=2000"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div className="h-[25rem]">
            <img
              className="h-[25rem]"
              src="https://www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-design-grey-living-room2.png"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      <div className="relative w-full h-[25rem] bg-gradient-to-r from-black grid md:grid-cols-2 ">
        <div className="container mx-auto px-4">
          <div className="relative top-[20%] p-4 md:p-8 text-white">
            <h1 className="text-3xl md:text-5xl font-bold ">
              SHARP CONSTRUCTION AND DESIGN COMPANY
            </h1>
            <p className="w-full my-5 text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              nemo, voluptas, quo libero explicabo dolor totam quam possimus,
              ducimus sed asperiores eum ad molestias nisi et illo dicta
              praesentium reprehenderit!
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;