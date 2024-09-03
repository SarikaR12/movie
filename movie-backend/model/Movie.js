const { string } = require("i/lib/util")
const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        director: {
            type: String,
            required: true,
            trim: true,
        },
        desc: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: String,
            required: true,
            trim: true,
        },
        rating: {
            type: Number
        },
        releaseYear: {
            type: String
        },
        profile: {
            type: String
        },
        genres: {
            type: [String]
        }
    }
)

const Movie = mongoose.model("Movie", MovieSchema)
module.exports = Movie;