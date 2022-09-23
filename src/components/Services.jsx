import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center items-center">
        <h3 className="px-5">Our Services</h3>
      </div>
      <div className="grid md:grid-cols-2 px-8 mt-12">
        <div className="grid md:grid-rows-2 mx-4 ">
          <div className="flex justify-center items-center">
            <div className="card w-96 glass">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="card w-96 glass">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-rows-2">
          <div className="flex justify-center items-center">
            <div className="card w-96 glass">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="card w-96 glass">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
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
