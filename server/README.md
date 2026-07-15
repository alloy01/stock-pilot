# Installation & Development Guide

Follow the steps below to set up and run the project locally.

---

## 1. Install Node.js and npm

Download and install the latest LTS version of **Node.js**, which includes **npm (Node Package Manager)**.

**Download:**  
https://nodejs.org/en

Verify the installation by running:

```bash
node -v
npm -v
```

---

## 2. Install Project Dependencies

Navigate to the project directory and install the required packages.

### Dependencies Used

| Package | Purpose |
|----------|---------|
| **express** | Backend web framework for creating the server and APIs. |
| **bcrypt** | Encrypts and securely hashes user passwords. |
| **cors** | Enables communication between different origins (URLs/domains). |
| **cookie-parser** | Parses cookies from incoming client requests. |
| **dotenv** | Loads environment variables from a `.env` file. |
| **jsonwebtoken** | Handles authentication and authorization using JWTs. |
| **mongoose** | Object Data Modeling (ODM) library for MongoDB. |
| **nodemon** | Automatically restarts the server during development whenever changes are detected. |

Install all dependencies using:

```bash
npm i nodemon express bcrypt cookie-parser mongoose jsonwebtoken dotenv cors
```

---

## 3. Start the Development Server

Run the server with:

```bash
npm start
```

If the server starts successfully, open:

```text
http://localhost:<port>/api
```

Replace `<port>` with the port configured in your application (for example, `5000`).

If you see the API response, your backend is running successfully.

---

## 4. Development

Once the server is running, you can begin modifying the project according to your requirements.

Common folders to customize include:

- `models/`
- `controllers/`
- `routes/`
- `middlewares/`
- `config/`
- `server.js` (or your main entry file)

After making changes, **nodemon** will automatically restart the server whenever you save a file.

---

## 5. Before Deployment

Before hosting your project:

- Add unnecessary files and folders to `.gitignore`.
- Keep only the files required for deployment in your repository.
- Configure your environment variables using a `.env` file.

### Recommended Hosting Platforms

- **Hostinger** (recommended)
- **Railway**
- **Vercel** (for free-tier deployments)

After deployment, update your environment variables and database connection strings as required by your hosting provider.