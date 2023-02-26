import React from "react";

const Hero = () => {
  return (
    <div className="hero-info my-10">
      <div className="find-ticket border border-[#0057D9] shadow-xl rounded-sm max-w-2xl flex flex-col gap-5 p-5">
        <h1 className="text-2xl">Where Your Destinition ?</h1>
        <p>We offer a diverse range of transportation services</p>
        <form className="flex flex-col gap-5">
          <div className="form-control">
            <input
              className="w-full outline-none bg-blue-100 py-3 px-8"
              type="text"
              placeholder="Departing Form"
            />
          </div>
          <div className="form-control">
          <input
              className="w-full outline-none bg-blue-100 py-3 px-8"
              type="text"
              placeholder="Travelling to"
            />
          </div>
          <div className="form-control flex gap-10">
            <input
              className="w-full outline-none bg-blue-100 py-3 px-8"
              type="date"
              placeholder="Date of Journey"
            />
          </div>
          <button className="py-4 bg-slate-800 text-white">Search Train</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
