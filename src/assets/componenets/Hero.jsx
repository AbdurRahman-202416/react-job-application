import React from "react";
//props pusssing 
const Hero = ({title,subtitle}) => {
  return (
    <div>
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto   sm:px-6 lg:px-8 flex flex-col text-justify items-center">
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-white sm:text-4xl mb-8">
             {title}
            </h1>
            <p className="my-4 text-justify leading-5 sm:trakign-[0.5px] tracking-[0.1px] sm:text-xl text-base text-white mx-5">
            {subtitle}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
