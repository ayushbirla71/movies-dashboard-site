import { mongoose } from "mongoose";

const moviesModelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    storyline: {
      type: String,
      required: true,
    },
    backgroundPoster: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    watchOnlineLink: {
      type: String,
      required: true,
    },
    downloadLink: [
      {
        title: String,
        link: String,
      },
    ],

    statusValue: {
      type: String,
      required: true,
    },
    mainPoster: {
      type: String,
      required: true,
    },
    slugURL: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    youtubeURL: {
      type: String,
      required: true,
    },

    language: [
      {
        type: String,
        required: true,
      },
    ],
    subtitle: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: true,
    },
    titleCategory: {
      type: String,
      required: true,
    },
    Genre: [
      {
        type: String,
      },
    ],
    Category: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    isUpdated: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Movies = mongoose.model("MoviesModel", moviesModelSchema);
export default Movies;
