import React from "react";

const VerticalItemCard = () => {
  return (
    <div className="flex w-full p-4 gap-1 md:gap-3 shadow-2xl ">
      <div className=" rounded-lg overflow-hidden">
        <img
          className="max-h-64 hidden sm:block"
          src="https://th.bing.com/th/id/R.372c580e4187eaba9b93f6a76561dd7f?rik=Z%2fJrzip4S6Gutg&riu=http%3a%2f%2fwww.rjaditi.com%2fwp-content%2fuploads%2f2018%2f03%2fBaaghi-2.jpg&ehk=l3P4Qk%2bddx4jz4EjmJgYqzyLOImn%2fqxHWatZYN%2f0I3w%3d&risl=&pid=ImgRaw&r=0"
        />
        <img
          className="max-h-64 sm:hidden"
          src="https://3.bp.blogspot.com/-7Qtk3rnoyrw/Wo0I8pzm3WI/AAAAAAAAnpI/pkMuOnX-utM5NE2LmOI-9FgiO-pvbqYSACLcBGAs/s1600/Baaghi-2-First-Look-Poster-3.jpg"
        />
      </div>
      <div className="flex flex-col px-1 text-xs gap-1 w-full h-full">
        <div className=" ">
          <label className="absolute right-2 text-yellow-400 px-1 md:px-4 ">
            Draft
          </label>
          <h1 className="sm:text-2xl font-bold text-white">Movie Name</h1>
          <label className="">
            Hollywood <span className="text-xs">2h 30m</span>
          </label>
        </div>
        <div>
          <p className="text-xs text-clip">
            Varun and Bhanu, both from different worlds, face challenges in
            their relationship.
          </p>
        </div>
        <div className="text-white flex text-xs md:text-sm gap-1 flex-col">
          <label>Year : 2021</label>
          <label>Duration: 2h 30m</label>
          <label>
            Laguage : <span className="text-gray-500"> hindi, English</span>
          </label>
        </div>
        <div className="flex flex-row justify-end gap-1  md:gap-3">
          <button className="btn btn-xs sm:btn-md bg-green-700  ">
            Update
          </button>
          <button className="btn btn-xs sm:btn-md bg-red-900 ">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default VerticalItemCard;
