import React from 'react'

const Banner = () => {
  return (
    <div className="p-6 py-14 bg-yellow-400 text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-4xl tracking-tighter font-bold">You dream it,
				<br className="sm:hidden"/>We can build it
			</h2>
			<button  className="btn px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-yellow-400 border-gray-400">Contact Us</button>
		</div>
	</div>
</div>
  );
}

export default Banner