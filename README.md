# Aryaman Singh Dev - Portfolio Website

Modern 3D portfolio website with parallax effects, custom cursor, and multi-page routing.

## 🚀 One-Click Vercel Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

### Prerequisites

1. **MongoDB Database** (Required)
   - Get a free MongoDB Atlas cluster: https://www.mongodb.com/cloud/atlas
   - Copy your connection string

2. **GitHub Repository**
   - Push this code to your GitHub repository

### Deployment Steps

1. **Click the "Deploy with Vercel" button above** (or manually import on Vercel)

2. **Configure Environment Variables in Vercel Dashboard:**
   ```
   MONGO_URL=your_mongodb_connection_string
   DB_NAME=portfolio_db
   REACT_APP_BACKEND_URL=https://your-project.vercel.app
   ```

3. **Important:** After first deployment, update `REACT_APP_BACKEND_URL`:
   - Go to Vercel Project Settings → Environment Variables
   - Update `REACT_APP_BACKEND_URL` with your actual Vercel deployment URL
   - Redeploy to apply changes

4. **Done!** Your portfolio is live 🎉

---

## 🏗️ Project Structure

```
/
├── api/
│   └── index.py          # Vercel serverless API entry point
├── backend/
│   ├── server.py         # FastAPI application
│   └── requirements.txt  # Python dependencies (cleaned for Vercel)
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── App.js        # Main app with routing
│   │   └── App.css       # Complete styling
│   ├── package.json
│   └── .env              # Frontend env vars
└── vercel.json           # Vercel configuration
```

---

## 🎨 Features

✅ Multi-page architecture (Home, About, Projects, Writing)
✅ Custom cursor with blend mode
✅ Parallax hero with layered images
✅ 3D perspective card hover effects
✅ Horizontal scrolling skill cards
✅ Scroll-triggered entrance animations
✅ Count-up stat animations
✅ Frosted glass navigation
✅ FAQ accordion
✅ Contact form
✅ Filterable projects and writing sections
✅ Work experience timeline
✅ Warm color palette (NO cold tech colors)
✅ Grain texture overlay
✅ Massive editorial typography

---

## 🛠️ Tech Stack

**Frontend:**
- React 19
- React Router DOM 7
- Framer Motion 12
- Custom CSS (warm color palette)
- Lucide React icons

**Backend:**
- FastAPI (serverless on Vercel)
- MongoDB (Motor async driver)
- Pydantic models

---

## 🔧 Local Development

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001
```

### Frontend
```bash
cd frontend
yarn install
yarn start
```

### Environment Variables

**frontend/.env:**
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**backend/.env:**
```
MONGO_URL=your_mongodb_connection_string
DB_NAME=portfolio_db
```

---

## 📝 Configuration Changes Made for Vercel

### 1. **Removed Unnecessary Dependencies**
Cleaned `requirements.txt` to only include essential packages:
- Removed `emergentintegrations` (not on PyPI)
- Removed `boto3`, `pandas`, `numpy`, `pytest`, `black`, etc. (not needed for portfolio)
- Kept only: `fastapi`, `uvicorn`, `pymongo`, `motor`, `pydantic`, `python-dotenv`

### 2. **Created Serverless API Entry Point**
`/api/index.py` - Vercel serverless function handler

### 3. **Updated vercel.json**
Configured proper routing:
- `/api/*` → Backend serverless functions
- `/*` → Frontend static files

### 4. **No Changes Required to Application Code**
All existing frontend and backend code works as-is! Just the deployment structure changed.

---

## 🌐 Live Demo

https://your-project.vercel.app

---

## 📱 Pages

- **Home** (`/`) - Hero, Skills, About, Work Experience, Projects, Platforms, FAQ, Writing, Contact
- **About** (`/about`) - Bio, Journey Timeline, Tech Stack, Process
- **Projects** (`/projects`) - All Projects with Filtering
- **Writing** (`/writing`) - Essays with Platform Badges

---

## 🔗 Social Links

- LinkedIn: https://www.linkedin.com/in/aryamandev/
- Instagram: https://www.instagram.com/aryamandev/
- X (Twitter): https://x.com/artamandev
- GitHub: https://github.com/dev4-gpt
- Substack: https://substack.com/@aryamandev
- Medium: https://medium.com/@aryamandev.college

---

## 📄 License

Built with intention. © 2025 Aryaman Singh Dev

---

## 🐛 Troubleshooting

### Backend API not responding after deployment
- Check environment variables are set in Vercel dashboard
- Verify `MONGO_URL` is correct
- Check Vercel function logs in dashboard

### Frontend not connecting to backend
- Update `REACT_APP_BACKEND_URL` to match your Vercel deployment URL
- Redeploy after updating env var

### MongoDB connection issues
- Whitelist `0.0.0.0/0` in MongoDB Atlas Network Access
- Verify connection string includes username and password
- Check database name matches `DB_NAME` env var

---

**Built by Aryaman Singh Dev**
Portfolio Website | One-Click Vercel Deployment Ready
