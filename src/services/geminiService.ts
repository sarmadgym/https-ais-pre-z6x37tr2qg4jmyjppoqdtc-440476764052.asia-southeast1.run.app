import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askGymAssistant(prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are the official AI assistant for SARMAD GYM Lalmonirhat. 
        Your goal is to provide helpful information about the gym, workout advice, nutrition tips, and membership details.
        SARMAD GYM is located in Lalmonirhat, Bangladesh. It offers modern equipment, expert trainers, and a motivating environment.
        Be energetic, professional, and encouraging. 
        Use Google Search grounding to find specific details about SARMAD GYM if needed, or to provide up-to-date fitness and health information.
        If you don't know a specific detail (like exact current membership price), suggest they visit the gym or call the provided contact number.`,
        tools: [{ googleSearch: {} }],
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again later!";
  }
}
