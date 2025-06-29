# 🎬 Media Library

**Media Library** is a simple Node.js REST API for retrieving movie information. It supports both standalone movies and franchise installments.

## 📁 Project Structure

MediaLibrary/
├── app.js # Main Express server
├── library.js # Logic for storing and retrieving movies
├── MediaItem.js # Movie and FranchiseFilm classes
├── package.json

## 🚀 Getting Started

1. Make sure you have Node.js installed.
2. Clone the repository:

```bash
git clone https://github.com/BomBletTM/media-library.git
cd media-library
```
3. Install dependencies:
```bash
npm install
```
4. Start the server:
```bash
node app.js
```
The server will run on port 3000.

## 📌 API Endpoints

### `GET /`
Returns a welcome message:
```json
{
  "message": "Welcome to Library!"
}
```

### `GET /movies`
Returns a list of all movies with brief descriptions:
```json
{
  "movies": [
    "Pulp Fiction directed by Quentin Tarantino",
    "The Lord of the Rings - Installment 1 of 3: The Fellowship of the Ring directed by Peter Jackson",
    ...
  ]
}
```

### `GET /movies/:id`
Returns a description of the movie by `id`.Example:
```http
GET /movies/4
```
Response:
```json
{
  "movie": "The Lord of the Rings - Installment 1 of 3: The Fellowship of the Ring directed by Peter Jackson"
}
```
If the movie is not found:
```json
{
  "error": "Movie not found"
}
```

## 🧠 What I Learned
While building this project, I practiced and improved the following skills:

- 🔧 Using Node.js and Express to build a RESTful API

- 📦 Organizing code into separate modules (MediaItem, Library, app)

- 👨‍👩‍👦 Implementing object-oriented programming (OOP) with JavaScript classes and inheritance

- 🔁 Working with array methods like .map() and .find()

- 🛣️ Handling dynamic Express routes using req.params

- 🚦 Setting proper HTTP response statuses (200, 404)

- 🔄 Practicing CommonJS module exports/imports with require and module.exports

## 📚 Classes
# Movie
- Properties: id, title, director
- Method: getDetails()
# FranchiseFilm (extends Movie)
- Additional properties: franchiseName, installmentNumber, totalInstallments
- Overridden method: getDetails()
# 📦 Dependencies
Express — Web framework for Node.js