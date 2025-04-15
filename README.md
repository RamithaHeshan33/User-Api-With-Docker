# API-Based Containerization with Node.js & Docker 🐳

This project is a beginner-friendly tutorial that shows how to build a simple backend API using **Node.js** and **Express.js**, and how to containerize the application using **Docker**.

## 📌 Features

- Simple RESTful API built with Express
- Live reload using Nodemon
- Dockerized environment for easy deployment
- Testable locally and inside a Docker container

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-api-docker.git
cd node-api-docker
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

Open http://localhost:3000 to test the API locally.


## 🐳 Docker Setup

### 1. Build Docker Image
```bash
docker build -t user-api-image:v1 .
```

### 2. Run Docker Container
```bash
docker run -d --name user-api-container -p 3001:3000 user-api-image:v1
```

Open http://localhost:3001 to test the containerized API.


## 📁 Project Structure
```pgsql
node-api-docker/
│
├── Dockerfile
├── package.json
├── index.js
└── README.md
```

## 📚 Technologies Used
- Node.js
- Express.js
- Nodemon
- Docker
