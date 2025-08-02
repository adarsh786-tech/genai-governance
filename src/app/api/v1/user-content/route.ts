import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Prompt and API key are required" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a professional content writer. Create high-quality, business-appropriate content based on this prompt: ${prompt}
      
      Guidelines:
      - Keep it professional and engaging
      - Make it 200-300 words
      - Use clear, concise language
      - Focus on value propositions`,
    });

    const content = response.text;

    if (!content) {
      return NextResponse.json(
        { success: false, error: "No content generated" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      content,
      metadata: {
        wordCount: content.split(/\s+/).length,
        charCount: content.length,
        generatedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
