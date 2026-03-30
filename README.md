@ -1,183 +0,0 @@
# react-logistics-inquiry-vendor-system

# 🚚 React Logistics Inquiry & Vendor Quote System

## 📌 Project Overview

This project is a **Logistics Inquiry & Vendor Quote Management System** built using **React JS**.
It allows users to manage inquiries, vendor quotes, users, roles, and generate reports with role-based access.

---

## ⚙️ Features

### 🔐 Authentication

* Login & Logout functionality
* Basic validation
* Protected Routes

### 📊 Dashboard

* Total Inquiries
* Pending Quotes
* Approved Quotes
* Vendor Count

### 📄 Inquiry Management

* Create Inquiry with required details
* Auto-generated Inquiry Number
* View Inquiry List with:

  * Search
  * Filter by Status
  * Pagination

### 💰 Vendor Quote Management

* Add multiple vendor quotes for an inquiry
* View and update vendor quotes:

  * Quoted Amount
  * Transit Days
  * Status (Pending / Approved)

### 👥 User & Role Management

* Create Users
* Create Roles (Admin, Manager, Operator, Viewer)
* Assign roles to users

### 🏢 Branch-wise Role Access ( Just Demo )

* Role-based permissions:

  * View / Add / Edit / Delete

### 📑 Reports

* Inquiry Reports
* Vendor Quote Reports
* Filter by date, status, customer
* Print Report

## 🛠️ Tech Stack

* React JS (Functional Components + Hooks)
* React Router DOM
* Context API (State Management)
* Bootstrap / CSS
* LocalStorage 

---

## 🚀 Setup Instructions

1. Clone the repository

```
git clone https://github.com/LohMehul/react-logistics-inquiry-vendor-system.git
```

2. Navigate to project

```
cd react-logistics-inquiry-vendor-system
```

3. Install dependencies

```
npm install
```

4. Run the project

```
npm start
```

---

## 🔑 Demo Login

```
Username: admin
Password: 123456
```

---

## 📸 Screenshots

1. Login Screen
   
<img width="1366" height="662" alt="LoginScreen" src="https://github.com/user-attachments/assets/a6e286bd-f372-4daf-a866-26890109ea2e" />

2. Dashboard
   
<img width="1363" height="675" alt="DashboardScreen" src="https://github.com/user-attachments/assets/eb0b9d4e-699b-4c0f-96f5-bbe6a8d98513" />

3. Inquiry Screen
   
<img width="1364" height="678" alt="InquirieScreen" src="https://github.com/user-attachments/assets/3e152b9a-74fa-41fe-98cb-a3d18ec9b30a" />

4. Inquiry List Screen

<img width="1365" height="675" alt="InquirieListScreen" src="https://github.com/user-attachments/assets/9669553d-ebf3-4177-8591-634addae8a56" />

5. Vendor Quote Request

<img width="1365" height="675" alt="VendorQuoteRequest" src="https://github.com/user-attachments/assets/890917c7-15e4-45f5-8a7f-805497a8ebec" />

6. Actual Vendor Quotes

<img width="1365" height="674" alt="ActualVendorQuote" src="https://github.com/user-attachments/assets/8e49c49f-a222-45c0-960e-fc0fa205ae0a" />

7. User Management

<img width="1365" height="669" alt="UserManagement" src="https://github.com/user-attachments/assets/bed0d8ab-33c6-4aa2-8812-3e11b5988753" />

8. Role Screen
   
<img width="1365" height="676" alt="RolesCreate" src="https://github.com/user-attachments/assets/cd64ae14-64ba-43c1-b258-b9e64862da66" />

9. User-Role Mapping

<img width="1365" height="672" alt="RoleMapping" src="https://github.com/user-attachments/assets/0a336ad9-a368-466e-a0d2-addffa83d7e0" />

10. Branch-wise Role Access

<img width="1365" height="668" alt="BranchRoleAccess" src="https://github.com/user-attachments/assets/f11a9601-5f38-438f-9a93-cd72ea373b0f" />

11. Reports and Print

<img width="1361" height="714" alt="ReportandPrint" src="https://github.com/user-attachments/assets/95482a61-4b0d-4bb0-bb64-6338cf5df28b" />


---

## 📌 Future Improvements

* API Integration (Node.js / Firebase)
* Advanced filtering & export (Excel/PDF)
* Notifications system
* Better UI/UX

---

## 👨‍💻 Author

Mehul Loh

---

## 📎 Submission Includes

* GitHub Repository
* README Documentation
* Screenshots
* Fully Functional UI

---
