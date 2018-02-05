# Facility Server

A server to manage facility ressources, allow users to book ressources and request services.

## Installation

To run the server, only the latest LTS of `node` is required. If installed, open a terminal and run:

```
npm i
```

## Development

Before you can run the server, you need to create a `.env`-file with similar contents:

```ini
# development environment
SERVER_HOST=localhost
SERVER_PORT=8080
MONGODB_URL=mongodb://localhost/test
JWT_SECRET=test
```

For development, you can run the server with file watching. This auto-restarts the server on file changes. To enable **watch mode**, run:

```
npm start
```
