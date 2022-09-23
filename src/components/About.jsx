import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const About = () => {
  return (
    <div className=" bg-slate-100 h-full">
        <div className="grid md:grid-cols-2 container mx-auto px-4">

      
      <div className="px-8 mt-12">
        <h3>ABOUT US</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <br />
          <br />
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages,
        </p>
        <button className="btn btn-outline btn-primary">Button</button>
      </div>
      <div className="mt-4">
      <Carousel>
          <div>
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&w=1000&q=80" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://img.freepik.com/premium-photo/tropical-interior-design-living-room_269031-60.jpg?w=2000" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-design-grey-living-room2.png" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      </div>
    </div>
  );
};

export default About;
