import React from 'react'
import ItemCard from '../itemCard/ItemCard';
import VideoHeader from './../videoComp/VideoHeader';
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ListItemsCard = ({title}) => {
    return (
      <div className="pl-2 flex flex-col">
        <div className="flex justify-between px-3 font-bold border-b-[1px] border-b-gray-700">
          <label className="text-white text-xs sm:text-lg">
            {title ? title : "Pls Add Title"}
          </label>
          <Link
            to="/viewAll"
            className="flex  items-center text-[8px] sm:text-sm cursor-pointer "
            type="button"
          >
            Viwe All <FaAngleRight />
          </Link>
        </div>
        <div className="carousel carousel-center overflow-scroll max-w-full overflow-y-hidden gap-4 p-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div key={index}   className="carousel-item">
              <ItemCard id={index} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default ListItemsCard