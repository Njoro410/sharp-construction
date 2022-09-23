import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <h3 className="py-5 text-5xl">Our Services</h3>
      </div>
      <div className="grid md:grid-cols-2 px-8 mt-12">
        <div className="grid md:grid-rows-2 mx-4 ">
          <div className="flex justify-center items-center">
            <div className="card w-[30rem] bg-base-100 my-5 shadow-xl">
              <figure>
                <img
                  className="w-[100%] object-cover h-[15vw]"
                  src="https://res.cloudinary.com/hamstech/images/v1631518640/Hamstech%20App/Top-Interior-Design-Trends-to-Design-Your-Dream-Home_804646102d455/Top-Interior-Design-Trends-to-Design-Your-Dream-Home_804646102d455.jpg?_i=AA"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Interior Design</h2>
                <p>How to park your car at your garage?</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="card w-[30rem] bg-base-100 my-5 shadow-xl">
              <figure>
                <img
                  className="w-[100%] object-cover h-[15vw]"
                  src="https://3.bp.blogspot.com/-qLhr4SO7N3I/XC33cSn4N8I/AAAAAAAAigY/hVJgrijJh5gFtjgblHxsghIX5Cz3fGxAgCEwYBhgL/s1600/Latest-gypsum-ceiling-designs-and-ideas-2019%2B%25287%2529.jpg"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Gypsum Designs</h2>
                <p>How to park your car at your garage?</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-rows-2">
          <div className="flex justify-center items-center">
            <div className="card w-[30rem] bg-base-100 my-5 shadow-xl">
              <figure>
                <img
                  className="w-[100%] object-cover h-[15vw]"
                  src="http://cdn.floorcoveringsinternational.com/wp-content/uploads/sites/1053/2017/07/09174524/shutterstock_45661648.jpg"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Wood and Tile Works</h2>
                <p>How to park your car at your garage?</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="card w-[30rem] bg-base-100 my-5 shadow-xl">
              <figure>
                <img
                  className="w-[100%] object-cover h-[15vw]"
                  src="https://www.rexeroofing.com/rexeloads/uploads/2019/05/two-tone-stone-coated-residential-Garden-Estate.jpg"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Roofing</h2>
                <p>How to park your car at your garage?</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
