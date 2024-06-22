import React, { useState } from "react";
import useAddMovies from "../../hooks/useAddMovies";

const MovieAddInfo = ({ type }) => {
  const { createMovies, loading } = useAddMovies();
  const [downloadingLinksArr, setDownloadingLinksArr] = useState();

  const [movieInputs, setMovieInputs] = useState({
    title: "",
    storyline: "",
    backgroundPoster: "",
    rating: "",
    duration: "",
    watchOnlineLink: "",
    downloadLink: [],
    statusValue: "Draft",
    mainPoster: "",
    slugURL: "",
    year: "",
    youtubeURL: "",
    language: "Hindi",
    subtitle: "English",
    size: "",
    titleCategory: "Movies",
    Genre: [],
    Category: "Bollywood",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(movieInputs);
    createMovies(movieInputs);
  };
  const handleInputs = (e) => {
    if (e.target.name == "Genre") {
      let genre = [...movieInputs.Genre];
      if (genre.includes(e.target.value)) {
        genre = genre
          .map((itme, index) => itme)
          .filter((itme) => itme != e.target.value);
        setMovieInputs({ ...movieInputs, Genre: genre });
      } else {
        genre.push(e.target.value);
        setMovieInputs({ ...movieInputs, Genre: genre });
      }
    } else if (e.target.id == "downloadLink") {
      let downloadLinks = [...movieInputs.downloadLink];
      downloadLinks.push({ title: e.target.name, url: e.target.value });
      setMovieInputs({ ...movieInputs, downloadLink: downloadLinks });
    } else {
      setMovieInputs({
        ...movieInputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="flex flex-col py-3 m-2 md:m-8 gap-5">
      <div className="flex flex-col justify-start text-white ">
        <h1 className="font-bold sm:text-xl">{type ? type : "Add"} Movie</h1>
        <label className=" text-xs sm:text-sm">ADMIN PANEL</label>
      </div>
      <form onSubmit={handleSubmit} onChange={handleInputs}>
        <div className="flex flex-col md:flex-row justify-evenly gap-4  md:p-5 rounded-lg">
          <div className="flex flex-col gap-1 md:gap-4 w-full">
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Background Poster</label>
              <input
                required
                className="input "
                name="backgroundPoster"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Title</label>
              <input required className="input " name="title" type="text" />
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Storyline</label>
              <textarea
                required
                className="textarea "
                name="storyline"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Rating</label>
              <input required className="input " name="rating" type="text" />
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Duration</label>
              <input required className="input " name="duration" type="text" />
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>watch online Link</label>
              <input
                required
                className="input "
                name="watchOnlineLink"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Download Link</label>
              <div className="flex w-full flex-col gap-1 justify-evenly ">
                <button className="btn bg-green-600 text-white" type="button">
                  Show 480p
                </button>
                <button className="btn bg-green-600 text-white" type="button">
                  Show 720p
                </button>
                <button className="btn bg-green-600 text-white" type="button">
                  Show 1080p
                </button>
                <button className="btn bg-green-600 text-white" type="button">
                  Show 4K
                </button>
              </div>
              <div className="flex flex-col gap-1 text-white p-1">
                <input
                  className="input "
                  type="text"
                  placeholder="480p Download Link"
                  name="480p Download Link"
                  id="downloadLink"
                />
                <input
                  className="input "
                  type="text"
                  placeholder="720p Download Link"
                  name="720p Download Link"
                  id="downloadLink"
                />
                <input
                  className="input "
                  type="text"
                  placeholder="1020p Download Link"
                  name="1020p Download Link"
                  id="downloadLink"
                />
                <input
                  className="input "
                  type="text"
                  placeholder="4K Download Link"
                  name="4K Download Link"
                  id="downloadLink"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Status</label>
              <ul className="flex flex-col gap-1 text-white p-1">
                <li>
                  <input
                    className=""
                    name="statusValue"
                    value="Draft"
                    type="radio"
                  />{" "}
                  Draft
                </li>
                <li>
                  <input type="radio" name="statusValue" value="Publish" />{" "}
                  Publish
                </li>
                <li>
                  <input type="radio" name="statusValue" value="Unpublish" />{" "}
                  Unpublish
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Main Poster</label>
              <input
                required
                className="input "
                name="mainPoster"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>slug (URL)</label>
              <input required className="input " name="slugURL" type="text" />
            </div>

            <div className="flex flex-col gap-1 text-white p-1">
              <label>Year</label>
              <input required className="input " name="year" type="text" />
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Youtub Link</label>
              <input
                required
                className="input "
                name="youtubeURL"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Select Language</label>
              <select className="input " name="laguage" defaultValue={"Hindi"}>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Select Quality</label>
              <select className="input " name="size">
                <option>one</option>
                <option>two</option>
                <option>thre</option>
                <option>four</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Select subtitle</label>
              <select className="input " defaultValue="English" name="subtitle">
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 text-white p-1">
              <label>Select Size</label>
              <input className="input " type="text" name="size" />
            </div>

            <div className="flex justify-evenly text-xs sm::text-sm md:text-base">
              <div className="flex flex-col gap-1 text-white p-1">
                <label>Title Category :</label>
                <ul>
                  <li>
                    <input type="radio" name="titleCategory" value="Movies" />{" "}
                    Movies
                  </li>
                  <li>
                    <input type="radio" name="titleCategory" value="Series" />{" "}
                    Series
                  </li>
                  <li>
                    <input type="radio" name="titleCategory" value="Shows" />{" "}
                    Shows
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1 text-white p-1">
                <label>Genre :</label>
                <ul>
                  <li>
                    <input
                      className=""
                      type="checkbox"
                      name="Genre"
                      value="Action"
                    />{" "}
                    Action
                  </li>
                  <li>
                    <input type="checkbox" name="Genre" value="Comedy" /> Comedy
                  </li>
                  <li>
                    <input type="checkbox" name="Genre" value="Thriller" />{" "}
                    Thriller
                  </li>
                  <li>
                    <input type="checkbox" name="Genre" value="Horror" /> Horror
                  </li>
                  <li>
                    <input type="checkbox" name="Genre" value="Drama" /> Drama
                  </li>
                  <li>
                    <input type="checkbox" name="Genre" value="Romance" />{" "}
                    Romance
                  </li>
                  <li>
                    <input type="checkbox" name="Genre" value="Crime" /> Crime
                  </li>
                  <li>
                    <input type="checkbox" name="Genre" value="Mystery" />{" "}
                    Mystery
                  </li>
                  <li>
                    <input type="checkbox" name="Genre" value="Adventure" />{" "}
                    Adventure
                  </li>
                  <li>
                    <input type="checkbox" name="Genre" value="Animation" />{" "}
                    Animation
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-1 text-white p-1">
                <label>Category</label>
                <ul>
                  <li>
                    <input name="Category" value="Bollywood" type="radio" />{" "}
                    Bollywood
                  </li>
                  <li>
                    <input type="radio" name="Category" value="Hollywood" />{" "}
                    Hollywood
                  </li>
                  <li>
                    <input type="radio" name="Category" value="Tollywood" />{" "}
                    Tollywood
                  </li>
                  <li>
                    <input type="radio" name="Category" value="South" /> South
                  </li>
                  <li>
                    <input type="radio" name="Category" value="Gujarati" />{" "}
                    Gujarati
                  </li>
                  <li>
                    <input type="radio" name="Category" value="Marvel Studio" />{" "}
                    Marvel_Studio
                  </li>
                  <li>
                    <input type="radio" name="Category" value="Tv Shows" />{" "}
                    Tv_Shows
                  </li>
                  <li>
                    <input type="radio" name="Category" value="Web Series" />{" "}
                    Web_Series
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button className="btn bg-green-600" disabled={loading} type="submit">
            {type ? type : "Add"} Movie
            {loading ? (
              <span className="loading loading-spinner text-white size-5"></span>
            ) : (
              ""
            )}
          </button>
          <button className="btn" type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieAddInfo;
