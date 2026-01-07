import { useState } from "react";
import { generatePlan } from "../api/planApi";

const UploadForm = ({ onResult }) => {
  const [aRoll, setARoll] = useState(null);
  const [bRolls, setBRolls] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!aRoll || bRolls.length === 0) {
      alert("Please upload A-roll and B-rolls");
      return;
    }

    const formData = new FormData();
    formData.append("aroll", aRoll);
    bRolls.forEach((file) => formData.append("brolls", file));

    setLoading(true);
    try {
      const data = await generatePlan(formData);
      onResult(data);
    } catch (err) {
      alert("Failed to generate plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <label>
        A-Roll Video
        <input type="file" accept="video/*" onChange={(e) => setARoll(e.target.files[0])} />
      </label>

      <label>
        B-Roll Videos (max 6)
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={(e) => setBRolls([...e.target.files])}
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Analyzing..." : "Generate B-Roll Plan"}
      </button>
    </form>
  );
};

export default UploadForm;
