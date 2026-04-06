# FinanceDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help# 💰 Finance Dashboard UI (Angular 16)

## 📌 Overview

This project is a **Finance Dashboard UI** built using **Angular 16**.
It allows users to view financial summaries, explore transactions, and gain insights into spending patterns.

The goal of this project is to demonstrate **frontend development skills**, including UI design, component structure, and state management.

---

## 🚀 Features

### 📊 Dashboard Overview

* Summary cards:

  * Total Balance
  * Income
  * Expenses
* Time-based chart (Balance trend)
* Category-based chart (Spending breakdown)

---

### 💳 Transactions

* View transaction list with:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)
* Features:

  * Search
  * Filtering
  * Sorting

---

### 👤 Role-Based UI

* Viewer:

  * Can only view data
* Admin:

* Role switch available via dropdown

---

### 📈 Insights

* Highest spending category
* Monthly comparison
* Basic financial observations

---

### 🌙 Dark Mode

* Toggle between Light & Dark theme
* Theme persists using **localStorage**

---

### 📱 Responsive Design

* Fully responsive layout
* Mobile-friendly sidebar with toggle menu

---

## 🧠 State Management

* Centralized state using Angular service
* Managed:

  * Transactions data
  * User role
  * Sidebar state
  * Theme (Dark Mode)

---

## 🛠️ Tech Stack

* Angular 16
* TypeScript
* SCSS
* Chart.js
* RxJS (BehaviorSubject)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd finance-dashboard
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Run Project

```
ng serve
```

Open in browser:

```
http://localhost:4200
```

---

## 📊 Charts Implementation

* Integrated using **Chart.js**
* Used for:

  * Line chart (trend)
  * Pie chart (category breakdown)

---

## ✨ Optional Enhancements Implemented

* Dark Mode
* Local Storage Persistence
* Responsive Sidebar
* Clean UI with SCSS

---

## 🎯 Approach

* Designed modular components for scalability
* Used a centralized service for state handling
* Focused on clean UI and user experience
* Used mock data for demonstration

---

## ⚠️ Assumptions

* No backend integration (mock/static data used)
---

## 📌 Future Improvements

* Backend integration (Node.js / API)
* Authentication & real RBAC
* Export transactions (CSV)
* Advanced analytics

---

## 👩‍💻 Author

Ayesha Shaikh

---

## 📎 Notes

This project is created as part of a **Frontend Developer Internship Assignment** and focuses on demonstrating practical UI/UX and frontend development skills.

