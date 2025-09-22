# Adoption App
A simple and powerful backend application built with Node.js, Express, and MongoDB (Mongoose) for managing user registration and login for an animal adoption platform.

## Features
- User Authentication (Signup & Login)
- Register users for animal adoption
- MongoDB data storage using Mongoose
- RESTful API architecture
- Modular and scalable code structure

## 🛣️ API Endpoints

### 🐸 Amphibian Routes

| Method | Endpoint                        | Description                      |
|--------|----------------------------------|----------------------------------|
| GET    | `/api/amphibian`                | Get all amphibians               |
| POST   | `/api/amphibian`                | Create a new amphibian           |
| PUT    | `/api/amphibian/:id`            | Update an amphibian by ID        |
| DELETE | `/api/amphibian/:id`            | Delete an amphibian by ID        |
| POST   | `/api/amphibian/test-invalid`   | Trigger schema validation errors |

---

### 👤 Sign-Up Routes

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| POST   | `/api/signUp/signup` | Register a new user       |

---

### 🔐 Login Routes

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| POST   | `/api/login/login` | Authenticate user login  |

