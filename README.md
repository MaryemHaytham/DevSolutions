# Admin Dashboard

## Overview

This project is an Angular-based web application that provides analytics, orders, and user features. It includes a structured layout with a core service layer, shared components, and feature modules.

## Folder Structure

```
src/
  ├── app/
      ├── core/        # Contains models and services
      ├── features/    # Main application features (analytics, orders, etc.)
      ├── layout/      # Navbar and sidebar components
      ├── shared/      # Reusable UI components (charts, tables, cards)
```

## Installation & Setup

Follow these steps to set up and run the application locally:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v16 or later)
- Angular CLI (`npm install -g @angular/cli`)
- Git (optional, for version control)

### Steps to Run the Application

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   ng serve
   ```
4. Open your browser and visit:
   ```
   http://localhost:4200
   ```

## Features Implemented

- **Responsive Sidebar Navigation**: Expands and collapses based on screen size.
- **Analytics Dashboard**: Displays charts and reports for data analysis.
- **Material UI Components**: Uses Angular Material and Tailwind for styling and functionality.
- **Implemented Tests**:
This update includes unit tests for the Orders Service, Sidebar, and Navbar components.

### Orders Service

✅ Fetch all products & handle API errors
✅ Fetch product by ID & verify error handling
✅ Ensure correct API request structure

### Sidebar & Navbar

✅ Verify components render correctly
✅ Check sidebar toggle functionality
✅ Ensure navbar navigation works

## Version Control

To make `master` the default branch, run:

```sh
git checkout master
git push origin master
git branch -u origin/master
```

Then set it as the default branch in GitHub under "Settings > Branches".

## Contribution Guidelines

1. Create a new branch for each feature/fix:
   ```sh
   git checkout -b feature-name
   ```
2. Commit your changes:
   ```sh
   git commit -m "Add feature description"
   ```
3. Push to GitHub:
   ```sh
   git push origin feature-name
   ```
4. Open a pull request for review.


