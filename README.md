# 🌟 MERN Stack Portfolio Website

### A modern, glassmorphic portfolio website built with the MERN stack, featuring an integrated admin panel for seamless project management.

## Frontend Overview:

<p align="center">
      <img src='redme-images\frontend-images\image-1.png' width='45%' height='100%'/>
      <img src='redme-images\frontend-images\image-2.png' width='45%' height='100%'/>
      <img src='redme-images\frontend-images\image-3.png' width='45%' height='100%'/>
      <img src='redme-images\frontend-images\image-4.png' width='45%' height='100%'/>
</p>

## Admine Pannel Overview:

<p align="center">
      <img src='redme-images\admin\image-1.png' width='45%' height='100%'/>
      <img src='redme-images\admin\image-2.png' width='45%' height='100%'/>
      <img src='redme-images\admin\image-3.png' width='45%' height='100%'/>
      <img src='redme-images\admin\image-4.png' width='45%' height='100%'/>
</p>

# ✨ Features

## 🎨 Frontend

-   **Modern Glass Morphism Design** - Sleek, contemporary UI with glassmorphic elements

-   **Responsive Layout** - Fully responsive across all device sizes
    Dynamic Portfolio Showcase - Real-time project display from MongoDB

-   **Tech Stack Icons** - Visual representation of technologies (JS, TS, Node.js, Express, MongoDB, etc.)

-   **Interactive Navigation** - Seamless routing between About, Works, Resume, Skills, and Contact sections

## 🔐 Authentication

-   **Firebase Google Authentication** - Secure OAuth 2.0 login integration

-   **Email Whitelist System** - Restricted admin access to authorized emails

## 🛠️ Admin Panel

-   **Project Creation** - Add new projects with comprehensive details:

    -   Project image upload
    -   Category selection (Frontend/Backend/Full-stack)
    -   Project type specification
    -   Client information
    -   Title and description
    -   etc and more...

-   **Project Management** - Delete existing projects | Edit feture will be added soon.

-   **Secure Access** - Only whitelisted email addresses can access admin features

-   **Real-time Updates** - Changes reflect instantly on the portfolio

## 📊 Backend

-   **RESTful API** - Organized API endpoints
-   **MongoDB Integration** - Robust database for project storage
-   **Express.js Server** - Efficient request handling and middleware
-   **CRUD Operations** - Only `create`, `read`, `delete` functionality | trying to add `update/edit` functionality
-   **Data Validation** - Server-side validation for data integrity

## 🚀 Tech Stack

<table>
  <tr>
    <th colspan="2">Frontend</th>
  </tr>
  <tr>
    <td>React.js</td>
    <td>Component-based UI library</td>
  </tr>
  <tr>
    <td>React Router</td>
    <td>Client-side routing</td>
  </tr>
  <tr>
    <td>Tailwind CSS</td>
    <td>Utility-first CSS framework</td>
  </tr>
  <tr>
    <td>React Icons</td>
    <td>React icon library</td>
  </tr>
  <tr>
    <th colspan="2">Backend</th>
  </tr>
  <tr>
    <td>Node.js</td>
    <td>JavaScript runtime environment</td>
  </tr>
  <tr>
    <td>Express.js</td>
    <td>Web application framework</td>
  </tr>
  <tr>
    <td>MongoDB</td>
    <td>NoSQL database</td>
  </tr>
  <tr>
    <td>Mongoose</td>
    <td>MongoDB object modeling</td>
  </tr>
  <tr>
    <th colspan="2">Authentication & Deployment</th>
  </tr>
  <tr>
    <td>Firebase Authentication</td>
    <td>Google OAuth integration</td>
  </tr>
  <tr>
    <td>Deployment</td>
    <td>Vercel</td>
  </tr>
</table>

## 📦 Installation

### **Prerequisites**

-   Node.js (v14 or higher)
-   MongoDB (local or Atlas)
-   Firebase account
-   Git

## RUN COMMANDS

### BACKEND

```bash
cd Backend

# run command
nodemon index.js
# or
npm run dev
```

### FRONTEND

```bash
cd Frontend

# install node modiule
npm install

# run command
npm run dev

# buil command
npm run build
```

### ADMIN

```bash
cd AdminPanel

# install node modiule
npm install

# run command
npm run dev

# buil command
npm run build
```

## 🤝 Contributing

#### Contributions are welcome! Please feel free to submit a Pull Request.

-   Fork the repository
-   Create your feature branch (`git checkout -b feature/- - AmazingFeature`)
-   Commit your changes (`git commit -m 'Add some AmazingFeature'`)
-   Push to the branch (`git push origin feature/AmazingFeature`)
-   Open a Pull Request

## Note:

#### This portfolio is configured for restricted admin access. Currently, only pre-authorized email addresses can access the admin panel. To add your email, modify the

```js
// Path:AdminPanel/src/pages/Login.jsx

// line no. 13
// Only for admin
const ALLOWED_EMAIL = ['YOUR-FIRST-EMAIL', 'YOUR-SECOND-EMAIL@gmail.com'];
```
