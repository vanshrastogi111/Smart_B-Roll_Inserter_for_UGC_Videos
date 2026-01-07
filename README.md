# 🎬 Smart B-Roll Inserter

An AI-powered tool that automatically suggests where B-roll visuals should be inserted into talking-head (A-roll) videos using semantic understanding.

## 🚀 Overview
This system analyzes spoken content to generate a structured, explainable video timeline. It matches relevant B-roll clips to specific moments in the A-roll based on context, not just keywords.

---

## 🛠 Tech Stack
- **Frontend:** React, Vite, Axios, Plain CSS
- **Backend:** Node.js, Express, Multer
- **AI Integration:** OpenAI (Whisper for Transcription, Text Embeddings for Matching)

---

## ⚙️ Setup & Installation

### Backend
1. `cd backend`
2. `npm install`
3. Create a `.env` file with your `OPENAI_API_KEY`.
4. `npm start` (Runs on port 5000)

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev` (Runs on port 5173)

---

## 🔌 API Endpoint
**`POST /api/plan/generate`**
- **Input:** `multipart/form-data` (1 A-roll video, 3–6 B-roll clips).
- **Output:** JSON timeline including timestamps, clip IDs, confidence scores, and logical reasoning.

---

## 📁 Project Structure
```text
├── frontend/
│   ├── src/
│   │   ├── api/          # API services
│   │   └── components/   # Upload, Transcript, and Timeline views
└── backend/
    ├── src/
    │   ├── services/     # Transcription, Embeddings, Matching
    │   └── controllers/  # Request handling
    └── uploads/          # Temporary file storage
```
## 🧠 Key Design Decisions
**Semantic Matching:** Uses embeddings to ensure visuals align with the meaning of the speech.

**Explainability:** Each insertion includes a "reasoning" field to explain why a specific clip was chosen.

**Minimalist UI:** Focused on functional transparency and logic evaluation over visual polish.
