# Shop App

## Structure

The main folders and files include:

- proshop/ - Contains the React frontend code and dependencies like Redux and Bootstrap
- backend/ - Contains the server-side Node.js code, models, controllers, and routes
- uploads/ - Directory for handling image uploads
node_modules/ - Stores server dependencies installed via npm, like Express and Mongoose
- package.json - Defines server package.json with dependencies
- .env - Stores environment variables like the MongoDB connection URL and JWT secret
- .git and .gitignore - Git version control related files

## Full Stack Workflow

The client sends HTTP requests (GET, POST, PUT, DELETE) to the server. The server, built with Node.js and Express, handles these requests through an "Auth Middleware" layer before passing them to the REST API layer.
The REST API layer, labeled "/api/products", processes the request and interacts with the MongoDB database using Mongoose, a MongoDB object modeling tool for Node.js.
The MongoDB database stores and retrieves data in response to the queries from the REST API.
Finally, the server sends an HTTP response back to the client with the requested data or confirmation of the operation performed.
> This architecture allows for a separation of concerns between the client, server, and database, with the REST API acting as an interface for the client to interact with the backend resources. The use of Express and Mongoose provides a structured and efficient way to build the REST API and interact with the MongoDB database from within the Node.js environment.