# SurveyForge

**SurveyForge** is a modular, full-featured survey platform inspired by Google Forms. It is designed with scalability, usability, and professionalism in mind — ideal for educational institutions, research groups, and civil associations.

## ✨ Features

- 📋 Create and manage surveys with titles, descriptions, and audience settings
- ❓ Add multiple types of questions and responses (single choice, multiple, open-ended)
- 📊 Visual dashboard with survey summaries and response analytics
- 📈 Graphs and response counters
- 🔌 API integration with fallback (functions without active backend)
- 🧩 Modular UI components for clean structure and scalability
- 📤 Export surveys and responses to Excel
- 🔒 Prepared for offline/online synchronization with future caching

---

## 🖼️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (TypeScript), [TailwindCSS](https://tailwindcss.com/)
- **State & Requests**: React Hooks + Axios
- **Visual Feedback**: react-hot-toast
- **Excel Export**: xlsx
- **Backend**: Django REST API (planned and integrated, not included here)

---

## 📁 Project Structure

```bash
/modules
  /forms/[id].tsx         # Public form view
  /dashboard              # Admin dashboard
    index.tsx             # Graphs + summary
    forms.tsx             # Survey manager
    responses.tsx         # Response summaries

/components
  /layout                 # Sidebar, Layout wrapper
  /ui                     # Tables, Charts, Buttons, Inputs

/services/api.ts         # Axios instance with fallback
/styles/globals.css      # Custom Tailwind config
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RayDR/SurveyForge.git
cd SurveyForge
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

### 4. For production

```bash
npm run build
npm start
```

---

## 🌐 Environment

By default, the app connects to:

```
https://surveys.api.domoforge.com/api/
```

If the API is not available, the app will still render empty UI components and show a toast warning, allowing offline usage or development.

---

## 🔧 Planned Features

- Form Builder with drag & drop
- Question banks and reusability
- User authentication
- Response filters and threshold-based analysis
- Caching layer for offline support
- Multi-language support

---

## 📄 License

MIT (or add your preferred license)

---

## 📬 Contact

> For collaborations, contributions, or association usage, reach out to:  
📧 **support@domoforge.com**
```

