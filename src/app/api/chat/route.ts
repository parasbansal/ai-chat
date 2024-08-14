import { createOllama } from "ollama-ai-provider";

import { streamText } from "ai";

const ollama = createOllama();

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: ollama("llama3.1"),
    messages,
  });

  return result.toDataStreamResponse();
}
