import { useState } from "react";
import UploadForm from "./components/UploadForm";
import TranscriptView from "./components/TranscriptView";
import TimelineView from "./components/TimelineView";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <h1>Smart B-Roll Inserter</h1>

      <UploadForm onResult={setResult} />

      {result && (
        <>
          <TranscriptView timeline={result.timeline} />
          <TimelineView timeline={result.timeline} />
        </>
      )}
    </div>
  );
}

export default App;
