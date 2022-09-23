import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h3>Our Services</h3>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="grid md:grid-rows-2 px-4 py-4">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://res.cloudinary.com/hamstech/images/v1631518640/Hamstech%20App/Top-Interior-Design-Trends-to-Design-Your-Dream-Home_804646102d455/Top-Interior-Design-Trends-to-Design-Your-Dream-Home_804646102d455.jpg?_i=AA" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Interior Design
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Gypsum Designs
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-rows-2 px-4 py-4">
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Wood and Tile Works
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Roofing
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
