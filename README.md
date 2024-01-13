 # Blog-Project

A simple blog project using Node.js, Express.js, MySQL, and GraphQL.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Testing GraphQL Endpoints](#testing-graphql-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a basic blog implementation with features like creating, updating, and deleting blog posts. It utilizes Node.js, Express.js, MySQL for data storage, and GraphQL for efficient querying.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MySQL](https://www.mysql.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-project.git

2. Navigate to the project directory:

   ```bash
   cd blog-project
   
3. Install Dependencies:

   ```bash
   npm install
   
## Database Setup:

Create a MySQL database for the blog project.<br>
Copy the .env.example file to .env and update it with your database credentials.

    ```bash
    DB_HOST=localhost
    DB_USER=username
    DB_PASSWORD=password
    DB_NAME=your_database_name

## Running the Application:

    ```bash
    npm start
The server will be running at http://localhost:3000.

## Testing GraphQL Endpoints:
Use a tool like Postman or GraphQL Playground to test GraphQL endpoints.

Example GraphQL query:

    ```bash
    graphql
    Copy code
    {
      getAllPosts {
        id
        title
        content
        comments {
          id
          text
        }
      }
    }
    
## Project Structure:

    ```bash
    ├── src
    │   ├── controllers
    │   ├── db
    │   ├── graphql
    │   ├── routes
    │   ├── index.js
    ├── .env.example
    ├── package.json
    ├── README.md
    └── ... (other project files)

