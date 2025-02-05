# Monthly Calendar (React App)

## 📌 Overview
This project is a **Monthly Calendar Application** built using **React** and **Syncfusion's ScheduleComponent**. It provides a timeline view where users can create, edit, and delete events in an intuitive and visually appealing interface.

## 🚀 Features
- 📅 **Timeline-based Calendar View**
- 🎨 **Resource Allocation with Color Coding**
- ✏️ **Inline Editing for Events**
- 🗑️ **Delete Events Easily**
- 🔄 **Drag and Drop & Resizing Support**

## 🛠️ Tech Stack
- **React** (Frontend Library)
- **Syncfusion React Scheduler** (UI Component for Calendar)
- **CSS** (Basic Styling)

## 📂 Folder Structure
```
monthlyCalendar/
│── src/
│   ├── components/
│   │   ├── InlineEditing.js  # Main Calendar Component
│   ├── App.js                # Root Component
│   ├── index.js              # Entry Point
│── public/
│── package.json
│── README.md
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/monthlyCalendar.git
cd monthlyCalendar
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the App Locally
```sh
npm start
```
The app will be available at: **http://localhost:3000**

## 🚢 Deployment
### **Deploying to GitHub Pages**
1. **Install gh-pages** (if not installed)
```sh
npm install gh-pages --save-dev
```
2. **Add the Deploy Script** in `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. **Run the deploy command**:
```sh
npm run deploy
```



## 🛠️ Troubleshooting
If you face `npm error Missing script: "deploy"`, ensure your `package.json` contains a valid `deploy` script. Also, check for typos like `depoly` instead of `deploy`.

## 🤝 Contributing
Contributions are welcome! Please fork this repository, create a feature branch, and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.

---
✨ **Happy Coding!** ✨

