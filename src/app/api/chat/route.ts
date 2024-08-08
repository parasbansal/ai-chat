import { createOllama } from "ollama-ai-provider";

import { streamText, StreamData, StreamingTextResponse } from "ai";

const ollama = createOllama();

export async function POST(req: Request, res: Response) {
  const { messages } = await req.json();

  const result = await streamText({
    model: ollama("llama3.1"),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}
