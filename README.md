Table of Contents
About The Project
Built With
Getting Started
Prerequisites
Installation
Usage
Contact
About The Project
Built With
React
Typescript
Node.js
MongoDB
Getting Started
To get a local copy up and running follow these simple steps.

Prerequisites
Install latest version of npm

npm
npm install npm@latest -g
Installation
Clone the project
git clone https://github.com/crookedfingerworks/roseflix.git
Go to project directory and Install NPM packages
npm install
Create .env file
Request an API key from TMDB and add it to your .env
REACT_APP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
In a new directory, clone the backend and follow installation instructions on its README
git clone https://github.com/crookedfingerworks/roseflix-backend
You should now have the server running locally. Add the url to your .env
REACT_APP_SERVER_URL=http://localhost:8080
Start the application
npm start
