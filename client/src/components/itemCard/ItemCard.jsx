import { FaPlus } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import "./itemCard.css";
import { Link } from 'react-router-dom';

const ItemCard = ({id}) => {
  return (
    <Link
      to={`/movie/${id}`}
      id="itemCartMain "
      className="rounded-box overflow-hidden"
    >
      <div
        id="itemCartPoster"
        className="w-20 md:max-w-28 min-w-28 sm:min-w-32 md:min-w-48 overflow-hidden rounded-lg cursor-pointer hover:scale-105 duration-700 md:hover:scale-110 lg:hover:scale-125 shadow-2xl p-1"
      >
        <img
          className="bg-gradient-to-r from-gray-400 to-gray-900 w-full"
          src="https://webneel.com/daily/sites/default/files/images/daily/09-2019/2-movie-poster-design-aladdin-disney-glossy-composite.jpg"
        ></img>
      </div>
      <div
        id="sibling"
        className="sibling hidden max-w-56  overflow-hidden bg-gray-900 rounded-md"
      >
        <div className="img-cont  cursor-pointer">
          <img
            className="bg-gradient-to-r from-gray-400 to-gray-900"
            src="https://th.bing.com/th/id/OIP.Z-f07Ifvzx6APq8qti2vMwHaE8?w=3054&h=2036&rs=1&pid=ImgDetMain"
          ></img>
        </div>
        <div className="contentBox w-full ">
          <div className="flex items-center justify-between px-2">
            <button
              className="btn w-[75%] bg-white text-black font-bold "
              type="button"
            >
              <FaPlay />
              Watch Now
            </button>
            <button className="btn bg-gray-700" type="button">
              <FaPlus className="text-white" />
            </button>
          </div>

          <div className="px-2">
            <ul className="text-white font-bold text-sm flex gap-2">
              <li>2024</li>
              <li>Hindi</li>
              <li>U/A 13+</li>
              <li>Drama</li>
            </ul>

            <p className="text text-wrap text-left text-sm">
              TODAY'S EP IS DELAYED. A tragic separation makes Sahiba find
              solace in Daljit and their son, Akeer. Years later, when her paths
              cross with Angad, will the long-lost love reignite?
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
