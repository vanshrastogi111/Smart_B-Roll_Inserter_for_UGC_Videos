import OpenAI from "openai";
import fs from "fs";

const getOpenAIClient = () => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is missing");
  }

  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
};

export const transcribeARoll = async (videoPath) => {
  const openai = getOpenAIClient();

  const response = await openai.audio.transcriptions.create({
    file: fs.createReadStream(videoPath),
    model: "gpt-4o-transcribe",
    response_format: "verbose_json"
  });

  return response.segments.map(seg => ({
    start: seg.start,
    end: seg.end,
    text: seg.text
  }));
};
