# 📘 FRONTEND `README.md`

# Smart B-Roll Inserter – Frontend

This frontend provides a simple web interface to interact with the Smart B-Roll Inserter backend.

It allows users to:
- Upload an A-roll video
- Upload multiple B-roll clips
- Trigger automatic B-roll planning
- View the generated timeline and reasoning

The UI is intentionally minimal and functional, focusing on clarity rather than visual complexity.

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Axios**
- Plain CSS (no UI frameworks)

---

## 📁 Folder Structure

frontend/

├── src/

│ ├── api/

│ │ └── planApi.js

│ ├── components/

│ │ ├── UploadForm.jsx

│ │ ├── TranscriptView.jsx

│ │ └── TimelineView.jsx

│ ├── App.jsx

│ ├── main.jsx

│ └── index.css

├── index.html

├── vite.config.js

└── README.md

---

## ⚙️ Installation & Setup

### 1. Navigate to frontend folder

```bash
cd frontend
```
### 2. Install dependencies
```bash
npm install
```
### 3. Running the Frontend
```bash
npm run dev
```
Vite will start the dev server and output a URL similar to:

http://localhost:5173

Open this URL in your browser.

---

## 🧪 How to Use

- Open the frontend in the browser
- Upload a single A-roll video (talking-head style)
- Upload 3–6 B-roll video clips
- Click Generate B-Roll Plan
- View the proposed insertions and reasoning

---

## 🧠 Design Philosophy

- Minimal UI to keep focus on logic

- Clear separation of concerns (upload, API, display)

- Easy to extend with transcript visualization or progress indicators

- Built for clarity in evaluation rather than production polish

---

## 🏁 Conclusion

This frontend serves as a lightweight interface to demonstrate how the backend planning system works. The emphasis is on functionality and transparency rather than visual design.


---
# 🎬 Smart B-Roll Inserter — Backend

The Smart B-Roll Inserter Backend implements the core intelligence behind automatically suggesting where B-roll visuals should be inserted into a talking-head (A-roll) video.

The system analyzes spoken content, understands semantic meaning, and generates a structured and explainable timeline describing when, where, and why each B-roll clip should appear. The backend focuses on reasoning and structured output rather than rendering the final video.

This project was built as part of a take-home assignment for Flona AI.

---

## 🚀 What the Backend Does

- Accepts one A-roll video and multiple B-roll videos
- Transcribes spoken content from the A-roll with timestamps
- Generates semantic understanding of B-roll clips
- Matches relevant B-roll visuals to specific A-roll moments
- Produces a structured JSON timeline with confidence scores and reasoning

---

## 🛠 Tech Stack

- Node.js (ES Modules)
- Express.js
- OpenAI API
- Speech-to-text transcription
- Text embeddings for semantic similarity
- Multer for handling video uploads

---

## 📁 Folder Structure
backend

├── src

│ ├── controllers

│ │ └── planController.js

│ ├── routes

│ │ └── planRoutes.js

│ ├── services

│ │ ├── transcriptionService.js

│ │ ├── embeddingService.js

│ │ └── matchingService.js

│ ├── app.js

│ └── server.js

├── uploads

├── .env

├── package.json

└── README.md

---

## ⚙️ Setup Instructions

1. Navigate to the backend directory.
2. Install dependencies using:
3. Create a `.env` file with the following variables:
4. Start the backend server:

When running successfully, the server will start on port 5000.

---

## 🔌 API Endpoint

### POST /api/plan/generate

This endpoint accepts `multipart/form-data` containing:
- One A-roll video file
- Multiple B-roll video files

### Response

The API returns a structured JSON timeline that includes:
- A-roll timestamps
- Selected B-roll clip identifiers
- Suggested insertion duration
- Confidence score
- Human-readable reasoning explaining each decision

---

## 🧠 Design Decisions

- Sentence-level timestamps are used for simplicity and robustness
- Semantic similarity enables context-aware visual matching
- B-roll insertions are intentionally limited to avoid visual overload
- Each suggestion includes an explanation for transparency
- OpenAI clients are initialized within services to avoid environment timing issues

---

## ⚠️ Limitations

- Transcription accuracy depends on audio clarity
- Embeddings are generated on demand and not cached
- The system outputs a planning timeline only
- Final video rendering is out of scope

---

## 📌 Summary

This backend demonstrates how natural language understanding can be mapped to video timelines in a structured and explainable way. The focus is on reasoning clarity, system design, and real-world applicability rather than production-level video rendering.


