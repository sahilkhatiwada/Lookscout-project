import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-100 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 "
          role="alert"
        >
          <span className="text-xs text-blue-600 px-4 py-1 mr-3">
            1% OF THE INDUSTRY
          </span>
        </a>
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl  text-center ">
          Hype got you here.
          <span className="text-center flex justify-center">
            Stay for the support
          </span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here at Lookscout we focus on markets where technology, innovation,
          and capital can unlock long-term value and drive economic growth.
        </p>
      </div>
    </section>
  );
};

export default Hero;
