import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize API Client Variable
let ai: GoogleGenAI | null = null;

const SYSTEM_INSTRUCTION = `
Jesteś wirtualnym Concierge "Sierra Golf Resort" położonego w Pętkowicach koło Wejherowa (niedaleko Trójmiasta).
Twoim celem jest pomoc gościom i członkom klubu.
Twoja osobowość: Uprzejmy, profesjonalny, elegancki, ale przystępny.

Kluczowe informacje o Sierra Golf Resort:
- Lokalizacja: Pętkowice, 25km od Gdyni.
- Pole: 18-dołkowe pole mistrzowskie klasy A (Par 72), typ "Parkland" (bardzo dużo zieleni, 11 000 drzew).
- Akademia: Driving Range (zadaszony, 26 stanowisk), Putting Green, symulator Trackman.
- Zakwaterowanie: Sierra Apartments (luksusowe apartamenty przy polu).
- Dom Klubowy: Styl angielski, restauracja z kominkiem, bilard, strefa relaksu.
- Dress code: Etykieta golfowa (koszulka polo, spodnie materiałowe, zakaz jeansów na polu).

Odpowiadaj zwięźle i zawsze w języku polskim.
`;

let chatSession: Chat | null = null;

const getAiClient = (): GoogleGenAI => {
  if (!ai) {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.warn("Warning: API_KEY is missing in process.env.");
    }

    ai = new GoogleGenAI({ apiKey: apiKey || '' });
  }
  return ai;
};

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const client = getAiClient();
    chatSession = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async (
  message: string,
  onChunk: (text: string) => void
): Promise<string> => {
  const chat = getChatSession();
  let fullText = '';
  
  try {
    const responseStream = await chat.sendMessageStream({ message });
    
    for await (const chunk of responseStream) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        const textChunk = c.text;
        fullText += textChunk;
        onChunk(textChunk);
      }
    }
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
  
  return fullText;
};