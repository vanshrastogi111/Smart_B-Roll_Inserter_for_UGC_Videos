import OpenAI from "openai";

const getOpenAIClient = () => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is missing");
  }

  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
};

export const describeBrolls = async (brollFiles) => {
  const openai = getOpenAIClient();
  const results = [];

  for (const file of brollFiles) {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Describe the visual content of this video briefly."
        },
        {
          role: "user",
          content: `This is a B-roll video showing product or lifestyle visuals.`
        }
      ]
    });

    results.push({
      id: file.filename,
      description: response.choices[0].message.content
    });
  }

  return results;
};
