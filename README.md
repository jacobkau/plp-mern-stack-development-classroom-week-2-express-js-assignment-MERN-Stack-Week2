# 📦 Express.js RESTful API - Product Management

This project is part of Week 2 of the PLP MERN Stack program. It is a RESTful API built using **Express.js** for managing products with full CRUD operations, authentication, validation, filtering, pagination, and error handling.

---

## 🚀 How to Run the Server

### 1. Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-jacobkau.git
cd week-2-express-js-assignment-jacobkau
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file based on `.env.example`

```env
PORT=3000
API_KEY=mysecrettoken
```

### 4. Start the server

```bash
npm run dev
```

> The server will run at: [http://localhost:3000](http://localhost:3000)

---

## 📘 API Endpoints

| Method | Endpoint                  | Description                        | Protected |
| ------ | ------------------------- | ---------------------------------- | --------- |
| GET    | `/api/products`           | List all products (with filters)   | ❌         |
| GET    | `/api/products/:id`       | Get a product by ID                | ❌         |
| POST   | `/api/products`           | Create a new product               | ✅         |
| PUT    | `/api/products/:id`       | Update an existing product         | ✅         |
| DELETE | `/api/products/:id`       | Delete a product                   | ✅         |
| GET    | `/api/products/search?q=` | Search products by name            | ❌         |
| GET    | `/api/products/stats`     | Get count of products per category | ❌         |

> ✅ Protected endpoints require `x-api-key` header with a valid API key.

---

## 🔐 Authentication

Send an API key in the headers for protected routes:

```http
x-api-key: mysecrettoken
```

---

## 🔎 Filtering, Search & Pagination

* `GET /api/products?category=electronics&page=1&limit=2`
* `GET /api/products/search?q=phone`
* `GET /api/products/stats`

---

## 🧪 Sample Requests

### ✅ Create a product

```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "x-api-key: mysecrettoken" \
  -d '{"name":"Tablet", "description":"10-inch", "price":299.99, "category":"electronics", "inStock":true}'
```

### 🔄 Update a product

```bash
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -H "x-api-key: mysecrettoken" \
  -d '{"price":1199.99}'
```

### 🗑️ Delete a product

```bash
curl -X DELETE http://localhost:3000/api/products/1 \
  -H "x-api-key: mysecrettoken"
```

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* body-parser
* dotenv
* uuid

---

## 📁 Project Structure

```
├── controllers/
├── middleware/
├── routes/
├── utils/
├── server.js
├── .env.example
├── package.json
└── README.md
```

---

## 👫 Author

Jacob Kau – [PLP-MERN-Stack-Development](https://github.com/PLP-MERN-Stack-Development)

---
