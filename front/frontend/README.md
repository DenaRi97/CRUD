# Blog React APP - Example App with MERN Stack 📝

![image](https://github.com/DenaRi97/CRUD/assets/149384086/6d718b56-a4ac-4f14-bf52-7db65f453e12)

Welcome to this Blog Page CRUD example application, built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This application showcases basic CRUD (Create, Read, Update, Delete) operations for managing blog posts. Users can sign up, log in, create new posts, view existing posts, edit posts, and delete posts.

## Features 🚀

- **User Authentication**: Secure user authentication system for sign up and login functionality.
- **Create Posts**: Authenticated users can create new blog posts with ease.
- **View Posts**: All users, authenticated or not, can browse through existing blog posts.
- **Edit Posts**: Users have the ability to modify their own posts.
- **Delete Posts**: Users can remove their own posts they no longer wish to keep.
- **Responsive Design**: The application is designed to work seamlessly across various devices and screen sizes.

## Technologies Used 💻

- **MongoDB**: A NoSQL database used to store blog posts and user information.
- **Express.js**: A flexible Node.js web application framework utilized for handling routing and middleware.
- **React.js**: A JavaScript library employed for building the user interface.
- **Node.js**: A JavaScript runtime environment used for server-side scripting.

## Getting Started 🛠️

To run this application locally, follow the steps below:

1. **Clone this repository** to your local machine.
   ```
   git clone <repository-url>
   ```
2. **Navigate to the project directory**.
   ```
   cd <project-directory>
   ```
3. **Install dependencies for the server**.
   ```
   npm install
   ```
4. **Navigate to the client directory**.
   ```
   cd client
   ```
5. **Install dependencies for the client**.
   ```
   npm install
   ```
6. **Return to the project directory**.
   ```
   cd ..
   ```
7. **Start the server**.
   ```
   npm start
   ```
8. **Start the client**.
   ```
   cd client
   npm start
   ```
9. **Open your web browser** and visit `http://localhost:3000` to view the application.

## Configuration ⚙️

Before running the application, make sure to configure the following:

- **MongoDB Connection**: Update the MongoDB connection string in `server/config/keys.js` with your own MongoDB URI.
- **JWT Secret**: Update the JWT secret in `server/config/keys.js` with your own secret for token generation.

## Folder Structure 📂

```
blog-crud/
│
├── back/                    # Backend (Node.js, Express.js)
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── context/             # Context files (if any)
│   ├── node_modules/        # Node.js dependencies (not shown in production)
│   ├── package.json         # Node.js dependencies
│   └── server.js            # Entry point for the Node.js server
│
└── front/                   # Frontend (React.js)
    ├── public/              # Static files
    ├── src/                 # React components and styles
    ├── node_modules/        # React.js dependencies (not shown in production)
    ├── package.json         # React.js dependencies
    ├── README.md            # README for the React frontend
    └── ...

```

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙌

Special thanks to the following technologies for making this project possible:

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)

## Disclaimer 🛑
This project is a class assignment developed by a beginner web developer. 
While efforts have been made to ensure the accuracy and functionality of the application, it may not fully adhere to industry best practices or standards. 
Thank you for understanding. 🙏
