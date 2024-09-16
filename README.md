# Tomato - Food Delivery Web App

## Overview
Tomato is a modern and intuitive food delivery web application built with React.js. It enables users to browse menus from the restaurant, add items to their cart, and place orders, all with a responsive design and simple user interactions.

This project focuses on frontend development, using local storage for temporary order storage, without a backend integration.

## Features

### User Features:
- Browse menus from multiple restaurants.
- Add food items to the cart with adjustable quantities.
- Place orders and simulate a checkout process.
- View past orders (stored locally).
  
### Common Features:
- Responsive design for mobile and desktop.
- Dynamic filtering and search for food items.
- Local storage to save user data (e.g., cart contents, past orders).
- Persistent cart management across sessions.

## Technologies Used
- **Frontend**: React.js
- **Styling**: Styled Components
- **Build Tools**: Vite
- **Local Storage**: For order history and cart persistence

## Getting Started

### Prerequisites
Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/Food-Delivery-Web.git
   cd Food-Delivery-Web
   ```

2. **Install Dependencies:**
   Navigate to the project folder and run:
   ```bash
   npm install
   ```

3. **Start the Application:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   The app will run on `http://localhost:3000`. Open your browser and visit the address to see the application.

### Folder Structure

```plaintext
Food-Delivery-Web/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/                  # Images and icons
│   ├── components/              # Reusable UI components
│   │   ├── AppDownload/
│   │   ├── ExploreMenu/
│   │   ├── FoodDisplay/
│   │   ├── FoodItem/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── LoginPopup/
│   │   └── Navbar/
│   ├── context/                 # Global state management using Context API
│   │   └── StoreContext.jsx
│   ├── pages/                   # Different pages of the app
│   │   ├── Cart/
│   │   ├── Home/
│   │   └── PlaceOrder/
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point for React
├── .gitignore                   # Files and directories to be ignored by git
├── eslint.config.js             # Linting configuration
├── index.html                   # Main HTML template
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Dependency version management
├── README.md                    # Documentation
├── vite.config.js               # Vite configuration
```

## Features Explanation

### Food Menu
- Users can browse various food categories and explore dishes.
- Dynamic search and filter options allow users to easily navigate through different cuisines and food types.

### Cart Functionality
- Items can be added to the cart and quantities adjusted before placing the order.
- Cart data is stored locally, ensuring it persists even if the user reloads the page.

### Order Management
- Users can review their orders before finalizing them.
- The order history is saved in the browser's local storage.

## Future Improvements
This app currently doesn't have backend integration. Future versions may include:
- User authentication (sign up/log in).
- Backend support with RESTful APIs.
- Online payment functionality.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to fork the repository and submit a pull request.

## Contact
For any questions or support, please contact **dahamisankalpani2001@gmail.com**.

