import React from "react";

const Services = () => {
  return (
    <div name='services' className="container mx-auto">
      <div className="flex justify-center items-center">
        <h3 className="pt-5 text-3xl font-bold md:text-5xl"><span className="text-yellow-400">Our</span> Services</h3>
      </div>
      <div className="flex justify-center items-center ">
        <span className="w-12 h-1 mb-6 rounded-lg bg-yellow-400"></span>
        </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="object-cover w-full h-56"
            />

            <div className="p-4 bg-gray-900">
              <h5 className="text-3xl md:text-4xl text-yellow-400">
                Interior Designs
              </h5>

              <p className="mt-1 text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                nobis aliquid accusamus? Sint, sequi voluptas.
              </p>
            </div>
          </a>
        </div>
        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="object-cover w-full h-56"
            />

            <div className="p-4 bg-gray-900">
              <h5 className="text-3xl md:text-4xl text-yellow-400">
                Gypsum Designs
              </h5>

              <p className="mt-1 text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                nobis aliquid accusamus? Sint, sequi voluptas.
              </p>
            </div>
          </a>
        </div>

        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="object-cover w-full h-56"
            />

            <div className="p-4 bg-gray-900">

              <h5 className="text-3xl md:text-4xl text-yellow-400">
                Wood and Tile Works
              </h5>

              <p className="mt-1 text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                nobis aliquid accusamus? Sint, sequi voluptas.
              </p>
            </div>
          </a>
        </div>

        <div className="mx-auto p-5">
          <a href="#" className="block overflow-hidden rounded-2xl">
            <img
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="object-cover w-full h-56"
            />

            <div className="p-4 bg-gray-900">
              <h5 className="text-3xl md:text-4xl text-yellow-400">
                Roofing
              </h5>

              <p className="mt-1 text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                nobis aliquid accusamus? Sint, sequi voluptas.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
