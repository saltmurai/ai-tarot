import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });


export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama3-8b-8192",
  });
}


export async function getGroqTarotReading(firstCard, secondCard, thirdCard, question) {
  console.log(firstCard, secondCard, thirdCard, question);
  
  const content = `You are tarot reader I ask you to draw three cards for me given the ${question}. 
  The first card is ${firstCard}, the second card is ${secondCard}, and the third card is ${thirdCard}. 
  Explain the meaning of these cards to me. and give me a summary and suggestion based on these cards. 
  I want you to be detailed and oppinionated as much as possible. Don't speak like AI. 
  Speak like a human tarot reader.`;

  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. You reply with very short answers."
      },
      {
        role: "user",
        content: content
      },
    ],
    model: "llama3-8b-8192",
  });
}

