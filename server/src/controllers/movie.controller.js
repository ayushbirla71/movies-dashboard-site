import Movies from "../models/MoviesModel.js";

export const createMovie = async (req, res) => {
  try {
    const {
      title,
      storyline,
      backgroundPoster,
      rating,
      duration,
      watchOnlineLink,
      downloadLink,
      statusValue,
      mainPoster,
      slugURL,
      year,
      youtubeURL,
      language,
      subtitle,
      size,
      titleCategory,
      Genre,
      Category,
    } = req.body;

    if (
      !title ||
      !storyline ||
      !backgroundPoster ||
      !rating ||
      !duration ||
      !watchOnlineLink ||
      !downloadLink ||
      !statusValue ||
      !mainPoster ||
      !slugURL ||
      !year ||
      !youtubeURL ||
      !language ||
      !subtitle ||
      !size ||
      !titleCategory ||
      !Genre ||
      !Category
    ) {
      console.log("Input Problem");
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    if (title) {
      const movie = await Movies.findOne({ title });
      if (movie) {
        return res.status(400).json({
          error: "Movie already exists",
        });
      }
    }
    const newMovie = new Movies({
      title,
      storyline,
      backgroundPoster,
      rating,
      duration,
      watchOnlineLink,
      downloadLink,
      statusValue,
      mainPoster,
      slugURL,
      year,
      youtubeURL,
      language,
      subtitle,
      size,
      titleCategory,
      Genre,
      Category,
    });
    await newMovie.save();
    return res.status(201).json({ message: "Movie added successfully" });
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateMovie = async (req, res) => {};

export const deleteMovie = async (req, res) => {};

export const getMovie = async (req, res) => {};

export const getMovies = async (req, res) => {};
