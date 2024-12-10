import React from "react";
//props pusssing 
const Hero = ({title,subtitle}) => {
  return (
    <div>
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 flex flex-col text-justify items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white  sm:text-3xl mb-8 md:text-6xl">
             {title}
            </h1>
            <p style={{textAlign:'justify'}} className="my-4 text-xl text-base text-white mx-5">
            {subtitle}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
