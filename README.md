# Adoption App
A fun and educational RESTful API to manage amphibians, user accounts, and authentication. Built using **Node.js**, **Express**, and **MongoDB (Mongoose)**. The application includes robust data validation, authentication, CRUD operations, and sample data seeding.

## Features
- Node.js
- Express.js
- MongoDB & Mongoose
- bcrypt (for password hashtag)
- dotenv (for environment variable)
- Postman (for API testing)


### Amphibian Routes

| Method | Endpoint                        | Description                      |
|--------|----------------------------------|----------------------------------|
| GET    | `/api/amphibian`                | Get all amphibians               |
| POST   | `/api/amphibian`                | Create a new amphibian           |
| PUT    | `/api/amphibian/:id`            | Update an amphibian by ID        |
| DELETE | `/api/amphibian/:id`            | Delete an amphibian by ID        |
| POST   | `/api/amphibian/test-invalid`   | Trigger schema validation errors |

---

### Sign-Up Routes

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| POST   | `/api/signUp/signup` | Register a new user       |

---

### Login Routes

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| POST   | `/api/login/login` | Authenticate user login  |

