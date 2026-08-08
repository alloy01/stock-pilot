# 📦 Veltro

## Open Source Inventory Management System

Veltro is an open-source inventory management system designed to provide a simple way to manage inventory through a self-hosted web application.

## Current Features

* ✅ User registration and authentication
* ✅ Create inventory items
* ✅ Edit inventory items
* ✅ Delete inventory items
* ✅ Filter inventory items
* ✅ User-specific inventory
* ✅ Session-based authentication
* ✅ MongoDB-backed data storage

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express
* MongoDB
* Mongoose
* JWT
* bcrypt
* CORS
* cookie-parser
* dotenv

## Installation & Development

Follow the steps below to set up Veltro locally.

### 1. Prerequisites

Install the latest LTS version of **Node.js**, which includes npm.

**Download:** https://nodejs.org/en

Verify the installation:

```bash
node -v
npm -v
```

You will also need a MongoDB database.

### 2. Clone the Repository

```bash
git clone <repository-url>
cd veltro
```

### 3. Install Dependencies

Install the project dependencies using:

```bash
npm install
```

If the frontend and backend are located in separate directories, install dependencies in each directory.

### 4. Configure Environment Variables

Create a `.env` file in the backend directory and add the required configuration.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
PORT=5000
```

Do not commit your `.env` file to the repository.

### 5. Start the Development Server

Run the backend:

```bash
npm start
```

If the project uses a separate frontend development server, start it according to the frontend's package configuration.

Once the backend is running, the API can be accessed at:

```text
http://localhost:<port>/api
```

Replace `<port>` with the port configured in your application.

### 6. Development

The backend is organized into several areas:

* `models/` — Database models
* `controllers/` — Request handling and application logic
* `routes/` — API routes
* `middlewares/` — Express middleware
* `config/` — Configuration
* `server.js` — Main server entry point

If **nodemon** is configured for development, the server will automatically restart when changes are detected.

## Environment Variables

The exact environment variables may change as the project develops. Check the project's configuration files for the currently required values.

**Never commit secrets, database credentials, or private keys to the repository.**

## Development Status

Veltro v1 is currently under active development.

The core inventory functionality has been implemented. Current work is focused on code cleanup, documentation, and responsive design.

## Maintainer & Developer

**alloy01**

Veltro is currently maintained and developed by **alloy01**.

Contributions, bug reports, feature suggestions, and documentation improvements are welcome.

## Before Deployment

Before deploying Veltro:

* Make sure sensitive files are included in `.gitignore`.
* Configure production environment variables.
* Use a production MongoDB connection.
* Never expose secrets in the repository.
* Configure the application according to your hosting provider.

## License

License details will be added before the first stable release.
