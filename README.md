#Personal Finance Management Application
##Introduction
In today's fast-paced world, managing personal finances effectively is crucial for achieving financial stability and reaching long-term goals. The Personal Finance Management Application is designed to help individuals track their financial activities efficiently. This tool offers a user-friendly platform where users can monitor their income and expenses, set and manage budgets, and track their progress toward their financial goals.

##Objective
The main objective of the Personal Finance Management Application is to provide a comprehensive and intuitive solution for individuals to manage their finances effectively. By offering features such as income and expense tracking, budget management, and goal setting, the application aims to empower users to take control of their financial well-being and make informed financial decisions.

##Scope
The Personal Finance Management Application encompasses the following features:

###Income and Expense Tracking: Users can easily log and categorize their income and expenses, providing a clear overview of their financial activities.

###User Profile Management: 
Users can manage their profiles and update personal information.

###Financial Reporting: Basic financial reports are available to help users understand their spending habits and identify areas for improvement.

##Setup
###Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed on your system
MongoDB installed and running

### Backend Setup
1. Initialize the backend:
```bash
npm init -y
```
1. Install dependencies:
```bash
npm install express mongoose cors morgan dotenv colors portfinder
```
### Frontend Setup
1. Create the React application:
```bash
npx create-react-app client
```
2. Install dependencies:
```bash
cd client
npm install axios react-router-dom redux react-redux bootstrap @ant-design/icons @mui/material @mui/icons-material @mui/x-data-grid recharts moment dayjs react-icons
```
**Running the Project**

- **Running the Backend:**
```bash
nodemon index.js
```
- **Running the Frontend:**
```bassh
cd client
npm run dev
```
- **Running Both Frontend and Backend:**
-----
## 3\. User Manual
### Login and Signup
- Users can sign up and log in to access their dashboard.
- Admins have a separate dashboard page for admin access.
### Dashboard Overview
- **Transactions:**
  - Add, edit, and delete income and expense transactions.
  - Transactions are displayed in a table format.
### Admin Panel
- **User Management:**
  - View a list of users.
  - Delete users.
  - View and edit user transactions.
  - View user analytics similar to regular users.
### Logout
- Secure logout functionality for both users and admins.
