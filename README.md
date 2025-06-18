
Authentication System – Full Stack Intern

 1. Project Title and Track Chosen
**Title:** Authentication System  
**Track:** Full Stack – React, TailwindCSS, Express, MongoDB

---

 2. Project Overview
This is a full-stack authentication application that allows users to register and log in securely. Built using React and TailwindCSS on the frontend, and Express with MongoDB on the backend, this system uses JWT to protect routes and maintain login state. The app features form validation, protected routes, dark/light mode toggle, and a responsive UI.

---

 3. Tech Stack

 Frontend
- React
- TailwindCSS
- React Router DOM

 Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcrypt
- JWT (jsonwebtoken)
- dotenv

---
 4. Installation Instructions

 Clone the Repository

```bash
git clone https://github.com/your-username/auth-fullstack-app.git
cd auth-fullstack-app
```
Setup Backend
```bash
cd server
npm install
```
Create a .env file in the server/ directory using the sample below and run the backend:
```bash
node server.js
```
Setup Frontend
```bash
cd ../client
npm install
npm run dev
```

.env.sample (in /server folder)
```ini
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/authdb?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=5000
```
![ssnew](https://github.com/user-attachments/assets/6fea561e-7db6-4e37-99ba-3bbc792c3c88)

![ssnewww](https://github.com/user-attachments/assets/78ada4a3-44d3-4ae4-b1d1-cc28d99f0285)
![ssneew](https://github.com/user-attachments/assets/df9d8c6c-0f58-4301-9119-e4f743c7ac35)





