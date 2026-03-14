# Project Setup Guide

This guide explains how to configure and run this project locally.
Follow the instructions carefully to ensure a successful setup.

---

# Prerequisites

Before running the project, make sure the following software is installed on your system.

| Tool           | Purpose                                 |
| -------------- | --------------------------------------- |
| Node.js (v20+) | Runtime environment for the application |
| pnpm           | Fast and efficient package manager      |
| MongoDB        | Database used by the application        |

---

# 1. Install Node.js (Version 20 or higher)

This project requires **Node.js version 20 or higher**.

### Download Node.js

Download from the official website:

https://nodejs.org

Choose **LTS version (Recommended)**.

### Verify Installation

After installation, open a terminal and run:

```
node -v
```

Expected output:

```
v20.x.x
```

Also verify npm:

```
npm -v
```

---

# 2. Install pnpm (Global Package Manager)

This project uses **pnpm** instead of npm.

### Install pnpm globally

Run the following command:

```
npm install -g pnpm
```

### Verify Installation

```
pnpm -v
```

Expected output:

```
8.x.x or higher
```

More details about pnpm:

https://pnpm.io/

---

# 3. Install MongoDB

This project requires MongoDB as the database.

You have two options:

* Install **MongoDB Community Server locally**
* Use **MongoDB Atlas (Cloud Database)**

---

# Option A — Install MongoDB Community Server (Local)

### Download MongoDB

Download from:

https://www.mongodb.com/try/download/community

Select:

* Version: Latest Stable
* Platform: Your OS
* Package: Installer

### Install MongoDB

Follow the installation wizard and keep default settings.

### Verify Installation

Run:

```
mongod --version
```

Expected output:

```
db version vX.X.X
```

### Start MongoDB

Start the MongoDB service:

Linux / macOS:

```
mongod
```

Windows (if installed as service):

MongoDB usually starts automatically.

---

# Option B — Use MongoDB Atlas (Cloud Database)

You may also use **MongoDB Atlas**.

Create a free account:

https://www.mongodb.com/cloud/atlas

Steps:

1. Create a new cluster
2. Create a database user
3. Allow network access
4. Copy the connection string

Example connection string:

```
mongodb+srv://username:password@cluster.mongodb.net/database
```

This connection string will be used in the `.env` file.

---

# 4. Clone the Repository

Clone the repository from GitHub.

```
git clone https://github.com/your-repository/project-name.git
```

Move into the project directory:

```
cd project-name
```

---

# 5. Install Project Dependencies

Install all required dependencies using **pnpm**.

```
pnpm install
```

This will install all dependencies defined in `package.json`.

---

# 6. Configure Environment Variables

This project uses environment variables to manage configuration.

Inside the project directory you will find:

```
.env.example
```

Create a new `.env` file based on it.

### Linux / macOS

```
cp .env.example .env
```

### Windows

```
copy .env.example .env
```

### Update the Environment Variables

Open `.env` and update the values.

Example:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/project-db
JWT_SECRET=your-secret-key
```

If using **MongoDB Atlas**, replace `MONGO_URI` with the Atlas connection string.

---

# 7. Run the Development Server

Start the NestJS development server:

```
pnpm run start:dev
```

This command will:

* Compile TypeScript
* Start the NestJS server
* Automatically reload when files change

---

# 8. Verify the Application

Once the server starts, you should see output similar to:

```
[Nest] Application is running on: http://localhost:3000
```

Open the browser and navigate to:

```
http://localhost:3000
```

If the project includes **Swagger API documentation**, it may be available at:

```
http://localhost:3000/api
```

---

# Project Scripts

Commonly used scripts:

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `pnpm install`       | Install dependencies                     |
| `pnpm run start`     | Start production server                  |
| `pnpm run start:dev` | Start development server with watch mode |
| `pnpm run build`     | Build the project                        |

---

# Project Folder Structure

Example structure:

```
project-root
│
├── src
│   ├── modules
│   ├── controllers
│   ├── services
│   └── main.ts
│
├── .env
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

# Troubleshooting

### Node version issue

If Node version is below 20:

```
node -v
```

Upgrade Node.js.

---

### MongoDB connection error

Check:

* MongoDB service is running
* Connection string is correct
* Network access is allowed (for Atlas)

---

### pnpm command not found

Reinstall pnpm:

```
npm install -g pnpm
```

---

# Additional Resources

Node.js Documentation
https://nodejs.org/en/docs

pnpm Documentation
https://pnpm.io/

NestJS Documentation
https://docs.nestjs.com/

MongoDB Documentation
https://www.mongodb.com/docs/

---

# Support

If you encounter issues during setup, please open an issue in the repository.
