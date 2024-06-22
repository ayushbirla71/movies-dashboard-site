import React from "react";
import {
  BsCheckLg,
  BsFillHandThumbsDownFill,
  BsFillHandThumbsUpFill,
  BsBookmarkCheckFill,
  BsTrash3,
  BsPencilFill,
} from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const DownloadComp = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="flex justify-end gap-3 px-5">
        <Link to='edit' className="btn"><BsPencilFill/> Edit</Link>
        <button className=" btn"> <BsTrash3/>Delete</button>
      </div>
    <div className="flex flex-col md:flex-row gap-4 justify-center w-full px-5 py-4">
      <div className="flex flex-col md:w-64 ">
        <div className="rounded-md overflow-hidden">
          <div className="md:w-64">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg"
              alt="poster"
            />
          </div>
          <div className="flex justify-between items-center bg-slate-700 text-xs py-2 px-1">
            <label className="flex flex-col items-center">
              <BsBookmarkCheckFill />
              Watchlist
            </label>
            <label className="flex flex-col items-center">
              <BsCheckLg />
              Save
            </label>
            <label className="flex flex-col items-center">
              {" "}
              <BsFillHandThumbsUpFill />
              Like
            </label>
            <label className="flex flex-col items-center">
              <BsFillHandThumbsDownFill />
              Dislike
            </label>
          </div>
        </div>
        <div className="py-1 border-b-[1px] border-blue-300  gap-1">
          <button className="btn w-full text-sm ">Click to watck Online</button>
        </div>
        <div className="flex flex-col text-sm gap-2">
          <div className="flex flex-col border-b-[1px] border-blue-300 py-2 gap-1">
            <label>GENRE</label>
            <div className=" flex gap-1 text-xs">
              <p>Action, Drama, Adventure, Thriller, Horror</p>
            </div>
          </div>
          <div className="flex flex-col border-b-[1px] border-blue-300 py-2 gap-1">
            <label>RUNTIME</label>
            <label className="text-xs">1h 42m</label>
          </div>
          <div className="flex flex-col border-b-[1px] border-blue-300 py-2 gap-1">
            <label>RELEASE DATE</label>
            <label className="text-xs">2020</label>
          </div>
          <div>
            <label>QUALITY</label>
            <div className="text-xs">
              <p>480 || 720 || 1080 || 4K || UHD</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col justify-start gap-3">
          <h1 className="text-lg font-extrabold">Movie Name</h1>
          <label className="text-sm font-bold text-gray-500">
            DOWNLOAD FREE NOW
          </label>
        </div>

        <div className="flex flex-col py-3">
          <label className="text-yellow-300">Sunopsis / Story Line :</label>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsa, quidem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsa, quidem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa, quidem. VideoHeaderLorem ipsum dolor sit
            amet consectetur adipisicing elit. Ipsa, quidem.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsa, quidem.Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa, quidem.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <button className="btn bg-green-600 w-full">G-Drive [GDToT] Download Links</button>

          <div className="flex flex-col gap-3 w-3/4 py-2">
            <button className="btn" >Download 320p</button>
            <button className="btn">Download 480p</button>
            <button className="btn">Download 720p</button>
            <button className="btn">Download 1020p</button>
            <button className="btn">Download 4K</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DownloadComp;
