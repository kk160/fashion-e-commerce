# E-Commerce Frontend

Modern E-Commerce frontend with product overview, cart, checkout and user authentication.
This Frontend communicate with a separate Backend-API (Express + MongoDB): https://gitlab.com/kyril.kisliakov/fashion-e-commerce-backend

---

## Tech Stack

- Vue.js
- Vue Router
- Axios (API Requests)

---

## Features

- Product list with filter & search
- Product detail
- Responsive Design

## Planed features

- Cart (Add / Remove / Update Quantity)
- Login & Register
- User Profile
- Order overview

---

## Project structure

```bash
│── public/
│ ├── favicon.ico
│── src/
│ ├── api/
│ │ ├── http.js
│ │ ├── login.api.js
│ │ ├── product.api.js
│ ├── assets/
│ │ ├── icons/
│ │ │ ├── icon-cart.svg
│ │ │ ├── icon-heart.svg
│ │ │ ├── icon-login.svg
│ │ │ ├── icon-search.svg
│ │ ├── images/
│ │ │ ├── logo.svg
│ │ ├── main.css
│ │ ├── base.css
│ ├── components/
│ │ ├── Filter.vue
│ │ ├── FilterOption.vue
│ │ ├── NavBar.vue
│ │ ├── ProductItem.vue
│ │ ├── ProductList.vue
│ │ ├── SearchBar
│ ├── router/
│ │ ├── index.js
│ ├── services/
│ │ ├── product.service.js
│ ├── stores/
│ │ ├── counter.js
│ │ ├── product.js
│ ├── views/
│ │ ├── AboutView.vue
│ │ ├── HomeView.vue
│ ├── App.vue
│ ├── main.js
│── .env
│── .gitignore
│── index.html
│── package.json
│── README.md
│── vite.config.js
```

---

## Installation

### 1. Clone repository

```bash
git clone https://gitlab.com/kyril.kisliakov/fashion-e-commerce.git
```

### 2. Install dependencies

```bash
npm install
```

## Start project

```bash
npm run dev
```

---
