# Express.js + Node.js + React.js Starting Template

## Available Scripts
In the project directory, you can run:

### `npm start` 
Runs React frontend at [http://localhost:3000](http://localhost:3000)

### `npm together`
Concurrently runs `npm start` and a script to start the Express server using nodemon (for server-side hot reloads)
Server runs at [http://localhost:3001](http://localhost:3001)

### `npm run prebuild`
Calls a JavaScript file to recursively remove the contents of the previous `build` folder

### `npm run build`
Builds the app for production to the `build` folder

### `npm run postbuild`
Moves the `build` folder from the project directory into the server subdirectory

### `npm test`
Launches the test runner in the interactive watch mode