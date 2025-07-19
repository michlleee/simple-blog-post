# 📝 Blog Post App

A simple Node.js + Express blog application that lets users create, edit, and delete blog posts — all rendered using EJS templates.

## 🚀 Features

- Create a blog post with name and content
- View all blog posts on the homepage
- Edit existing blog posts
- Delete posts directly from the homepage
- Clean interface using EJS templating
- No database — data stored in-memory

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **EJS** for templating
- **Body-parser** for form handling
- **Static assets** served from `/public`

---

## 📁 Project Structure

```bash
Blog Post/
│
├── node_modules/
├── public/
│   └── styles/
│       └── main.css
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── createPage.ejs
│   ├── editPage.ejs
│   └── index.ejs
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🚦 How to Run Locally

1. Clone this repo:

   ```bash
   git clone https://github.com/michlleee/blog-post-app.git
   cd blog-post-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

4. Open your browser and visit:

   ```
   http://localhost:3000
   ```

---

## 📝 Notes

- Data is stored in-memory, so it will reset on every server restart.
- Make sure to add a database (like MongoDB or PostgreSQL) if you want persistence.

---

## 🙌 Acknowledgements

Created during BootCamp as a capstone project for learning basic CRUD with Express and EJS. 🎓

---
