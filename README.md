# ImageGallery Project

ImageGallery is a web application built using Vite.js and React that allows users to explore and interact with a collection of images. It offers various features such as searching for images by tags and drag-and-drop functionality for authenticated users.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Image Gallery](#image-gallery)
- [Built With](#built-with)
- [Acknowledgments](#acknowledgments)

## Features

### Authentication
- Users can sign up for an account using their email and password.
- Users can log in to their accounts.
- Users can reset their passwords if they forget them.
- Users can update their email address and password.
- Users can log out of their accounts.

### Image Gallery
- Users can search for images by entering tags in the search bar.
- Authenticated users can rearrange the order of images using drag-and-drop functionality.
- Users can view a curated collection of images.
- Trending tags are displayed on the homepage.
- Users can access the application as a guest without logging in.

## Getting Started

To run the ImageGallery project on your local machine, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/imagegallery.git
   ```

2. Navigate to the project directory:

   ```bash
   cd imagegallery
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

The link is also available at [GalleryApp ](https://spectacular-cassata-e0f519.netlify.app/landing)
## Authentication

### Sign Up

To create a new account:

1. Click the "Sign Up" button on the login page.
2. Enter your email and password.
3. Click the "Sign Up" button.

### Log In

To log in to your account:

1. Enter your email and password on the login page.
2. Click the "Log In" button.

### Reset Password

To reset your password:

1. Click the "Forgot Password?" link on the login page.
2. Enter your email address.
3. Check your email for instructions on how to reset your password.

### Update Email Address

To update your email address:

1. Log in to your account.
2. Click the user profile icon.
3. Select "Update Email."
4. Enter your new email address and click "Save."

### Update Password

To update your password:

1. Log in to your account.
2. Click the user profile icon.
3. Select "Update Password."
4. Enter your current password and your new password.
5. Click "Save."

### Log Out

To log out of your account:

1. Click the user profile icon.
2. Click "Log Out."

## Image Gallery

### Search by Tags

- Enter tags in the search bar to filter images by their associated tags.
- Images containing matching tags will be displayed.

### Drag-and-Drop (Authenticated Users)

- Authenticated users can rearrange the order of images in the gallery using drag-and-drop functionality.
- Click and hold an image, then drag it to a new position in the gallery.

### Trending Tags

- The homepage displays trending tags based on the most popular image tags.

### View as Guest

- Users can access the application as a guest without logging in. Simply click "View as Guest" on the login page to explore the gallery.

## Built With

- [Vite.js](https://vitejs.dev/) - Build tool and development server for React applications.
- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Firebase](https://firebase.google.com/) - Backend and authentication services.
- [React Bootstrap](https://react-bootstrap.github.io/) - UI components and styles.

## Acknowledgments

This project was created as a demonstration of React and Vite.js and is not intended for production use. It was developed for educational purposes and to showcase various features and concepts in React development. Enjoy exploring the ImageGallery!

*Note: This is a sample README file for your project. Be sure to customize it with your project-specific information.*