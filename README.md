# 🍛 Recipe Sharing API

## Group Members

- **👤 [Mark Gilbert Reginio](https://www.facebook.com/Endzy.ML.1?mibextid=LQQJ4d)**
- **👤 [Ahmad Magdalita](https://www.facebook.com/profile.php?id=100040213292094&mibextid=LQQJ4d)**
- **👤 [Mark Joseph Largo](https://www.facebook.com/mjlargoo)**
- **👤 [Maria Donna Fidelino](https://www.facebook.com/profile.php?id=100082411576621&mibextid=LQQJ4d)**

## 💬 About the Application

The Recipe-Sharing-API, built with Node.js and Express, to share and manage recipes through a RESTful API. It supports CRUD (Create, Read, Update, Delete) operations for recipes and incorporates advanced search functionalities. This API is designed with a focus on simplicity and efficiency, making it accessible for both developers and end-users.

## 🌟 Features

### 📚 Recipe Management
- **Create, Read, Update, Delete (CRUD) Operations**: Users can add new recipes, view existing recipes, update them, or delete them as needed.
### 🔎 Advanced Search Capabilities
- **Tag-based Search**: Allows users to find recipes based on specific tags (e.g., Italian, Vegetarian, Seafood), making it easier to discover recipes that meet their dietary preferences.
- **Ingredients-based Search**: Enables searching for recipes by ingredients. Users can find recipes that use specific ingredients they have or want to use.
- **Name-based Search**: Provides the ability to search for recipes using the name of the recipe, allowing users to quickly find specific recipes they are interested in.
### 🤩 User Experience
- **Error Handling**: Implements comprehensive error handling throughout the API to provide clear feedback to the client, ensuring a smooth user experience even when things go wrong.
- **User Feedback and Validation**: The API provides immediate feedback and validation, ensuring users are informed of any errors or required data formats during their interactions.
### 🔒 Security and Performance
- **Data Validation**: Ensures that all user inputs are validated before processing to prevent invalid data from affecting the system.
- **Efficient Data Access**: Implements optimized data access patterns to ensure fast and reliable operations, adapting to the new database system in use.
### 👨🏻‍💻 Developer Experience
- **Clear Documentation**: Provides detailed API documentation, making it easy for developers to understand and use the API.
- **Development Tools**: Includes tools like nodemon for automatic server restarts during development, enhancing the developer workflow.

## Purpose

The primary purpose of this API is to provide a platform for users to share and manage recipes, including features like searching recipes by ingredients or tags. It is designed to be simple and efficient, allowing users to quickly find the recipes they need.

# ⚡ Quick Start Guide

Follow these steps to set up the application locally:

1. **Clone the Repository**: First, clone the repository to your local machine using Git. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/ReginioMarkGilbert/Recipe-Sharing-API.git
```

2. **Install Dependencies**: Install with [npm](https://www.npmjs.com/).
```bash
npm install express
```
```bash
npm install nodemon
```
```bash
npm install joi
```

3. **Start the Server**: Use npm start for production or npm run dev for development with nodemon.

```bash
npm run dev
```
Alternatively, you can run the API using this command:
```bash
npm run start
```
Or:
```bash
node app.js
```

The server will start, and you should see a message like <span style="color:green"><strong>"Server is running on port: 3000"</strong></span> in your terminal.

4. **Test the Application**: You can now test the application by sending requests to <span style="color:green"><strong>http://localhost:3000/api/recipes</strong></span>. You can use a tool like Postman or Insomnia to send HTTP requests.


# 🔭 Recipe API Endpoint Guide

This application provides several API endpoints for managing recipes, here's how you can use the endpoints:

## Create a New Recipe

**Endpoint:** `/api/recipes`

**Method:** `POST`

**Description:** Creates a new recipe.

**Body:**

- `title`: The name of the recipe (required).
- `ingredients`: The ingredients of the recipe (required).
- `instructions`: The instructions of the recipe (required).
- `tags`: The tags of the recipe (optional).

## Get All Recipes:

**Endpoint:** `/api/recipes`

**Method:** `GET`

**Description:** Returns all recipes.

## Get a Specific Recipe by ID:

**Endpoint:** `/api/recipes/:id`

**Method:** `GET`

**Description:** Returns the recipe with the specified ID.

**Parameters:**

- `id`: The ID of the recipe.

## Get Recipes by Title:

**Endpoint:** `/api/recipes/title/:title`

**Method:** `GET`

**Description:** Returns recipes with the specified title or name.

**Parameters:**

- `title`: The title or name of the recipe.

## Get Recipes by Ingredients:

**Endpoint:** `api/recipes/ingredients/:ingredients`

**Method:** `GET`

**Description:** Returns one or more recipes that contain the specified ingredients.

**Parameters:**

- `ingredients`: The ingredients of the recipe.

## 🏷 Get Recipes by Tag

**Endpoint:** `/api/recipes/tags/:tags`

**Method:** `GET`

**Description:** Returns one or more recipes that contain the specified tag.

**Parameters:**

- `tag`: The tag of the recipe.

## Update a Recipe

**Endpoint:** `/api/recipes/:id`

**Method:** `PUT`

**Description:** Updates the recipe with the specified ID.

**Parameters:**

- `id`: The ID of the recipe.

**Body:**

- `Title`: The name of the recipe (optional).
- `ingredients`: The ingredients of the recipe (optional).
- `Instructions`: The steps of the recipe (optional).
- `tags`: The tags of the recipe (optional).

## Delete a Recipe

**Endpoint:** `/api/recipes/:id`

**Method:** `DELETE`

**Description:** Deletes the recipe with the specified ID.

**Parameters:**

- `id`: The ID of the recipe.


# 🧾 Dependencies Guide

This project uses several dependencies to function correctly. Here's a brief description of each one:

## Dependencies

### 🚀 Express

**Version:** ^4.18.2

**Description:** This package is a fast, minimalist web framework for Node.js, not confined by strict conventions.

**Usage:** In this project, Express is used to create the server and manage the API routes.
```bash
npm i express
```

### 🌌 Joi

**Version:** ^17.12.1

**Description:** Joi is a powerful schema description language and data validator for JavaScript.

**Usage:** In this project, Joi is used to validate the data sent to the API endpoints.
```bash
npm i joi
```

## 🔧 DevDependencies

### 🤖 Nodemon

**Version:** ^3.0.3

**Description:** This package is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

**Usage:** In this project, nodemon is used during development to automatically restart the server upon file changes for a smoother development experience.
```bash
npm i nodemon
```