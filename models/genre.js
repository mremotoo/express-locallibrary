// Open your ./models/genre.js file and create a schema for storing genres (the category of book, e.g. whether it is fiction or non-fiction, romance or military history, etc.).

// The definition will be very similar to the other models:

// The model should have a String SchemaType called name to describe the genre.
// This name should be required and have between 3 and 100 characters.
// Declare a virtual for the genre's URL, named url.
// Export the model.

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

// Virtual for bookinstance's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
