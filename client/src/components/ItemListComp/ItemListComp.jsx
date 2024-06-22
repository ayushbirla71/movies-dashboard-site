import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import ItemCard from "../itemCard/ItemCard";
import SmallitemCard from "../smallItemCard/SmallitemCard";
import { Link } from 'react-router-dom';

const ItemListComp = ({ title }) => {
  return (
    <div className="pl-2 flex flex-col">
      <div className="flex justify-between px-3 font-bold border-b-[1px] border-b-gray-700">
        <label className="text-white text-xs sm:text-lg">{title}</label>

        <Link
          to="/viewAll"
          className="flex  items-center text-[8px] sm:text-sm cursor-pointer "
          type="button"
        >
          Viwe All <FaAngleRight />
        </Link>
      </div>
      <div className="flex items-center gap-1 md:gap-2 lg:gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
          <SmallitemCard id={index} key={index} />
        ))}
      
      </div>
    </div>
  );
};

export default ItemListComp;
