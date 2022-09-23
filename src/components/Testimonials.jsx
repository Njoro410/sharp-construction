import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full h-full">
      {/* <div className="flex justify-center items-center">
        <h1>Testimonials</h1>
      </div> */}
      {/* <div className="container mx-auto px-8 grid md:grid-cols-3">
        <div className="flex justify-center items-center px-2">
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">
                Design Tools
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-2">
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">
                Design Tools
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-2">
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">
                Design Tools
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <section className="my-8">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
            <p>Leroy Jenkins</p>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
              >
                <path
                  fill="currentColor"
                  d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                ></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Accusantium illum cupiditate harum asperiores iusto quos quasi
                quis quae! Fugit doloribus, voluptatum quidem magnam velit
                excepturi nobis, reprehenderit ducimus incidunt quisquam quae
                veritatis, quos iure harum.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
              >
                <path
                  fill="currentColor"
                  d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                ></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
            <p>Leroy Jenkins</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
