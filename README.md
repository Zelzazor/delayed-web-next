# Delayed

Delayed is a lightweight, dependency-free web framework for Node.js, designed to create simple and effective web applications. With Delayed, you can set up a web server quickly without having to manage bulky dependencies or extensive configurations.

## Features

- 🚀 Fast and lightweight
- 📦 Zero dependencies
- 🛠️ Easy to set up and use
- 💼 Suitable for small to medium projects
- 🔒 Secure and reliable
- 🪄 Built with TypeScript

## Installation

You can install Delayed using npm:

```bash
npm install delayed-web
```

Or using Yarn:

```bash
yarn add delayed-web
```

Or using pnpm:

```bash
pnpm add delayed-web
```

# Quick start

Here's a simple example to get you started:

```js
const delayed = require("delayed-web");

const app = delayed();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```
