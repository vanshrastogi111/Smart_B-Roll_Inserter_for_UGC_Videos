import { getEmbedding, cosineSimilarity } from "./embeddingService.js";

export const matchBrolls = async (transcript, brolls) => {
  const plan = [];

  for (const segment of transcript) {
    if (segment.text.length < 20) continue;

    const segmentEmbedding = await getEmbedding(segment.text);

    let bestMatch = null;
    let bestScore = 0;

    for (const broll of brolls) {
      const brollEmbedding = await getEmbedding(broll.description);
      const score = cosineSimilarity(segmentEmbedding, brollEmbedding);

      if (score > bestScore) {
        bestScore = score;
        bestMatch = broll;
      }
    }

    if (bestScore > 0.75) {
      plan.push({
        start_sec: segment.start,
        duration_sec: Math.min(2.5, segment.end - segment.start),
        broll_id: bestMatch.id,
        confidence: bestScore,
        reason: `Matched because "${segment.text}" relates to "${bestMatch.description}"`
      });
    }
  }

  return plan.slice(0, 5);
};
