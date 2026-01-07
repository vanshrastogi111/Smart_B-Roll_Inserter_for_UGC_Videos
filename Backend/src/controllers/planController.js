import { transcribeARoll } from "../services/transcriptionService.js";
import { describeBrolls } from "../services/brollService.js";
import { matchBrolls } from "../services/matchingService.js";

export const generatePlan = async (req, res) => {
  try {
    const arollPath = req.files.aroll[0].path;
    const brollFiles = req.files.brolls;

    // 1. Transcribe A-roll
    const transcript = await transcribeARoll(arollPath);

    // 2. Describe B-rolls
    const brollDescriptions = await describeBrolls(brollFiles);

    // 3. Match B-rolls to A-roll moments
    const timeline = await matchBrolls(transcript, brollDescriptions);

    res.json({
      success: true,
      timeline
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate plan" });
  }
};
