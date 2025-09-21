import {setGlobalOptions} from "firebase-functions/v2";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import {SpeechClient} from "@google-cloud/speech";
import {TextToSpeechClient} from "@google-cloud/text-to-speech";
import {VertexAI} from "@google-cloud/vertexai";
import {Request, Response} from "express";

// Cost control
setGlobalOptions({maxInstances: 10});

// Clients
const speechClient = new SpeechClient();
const ttsClient = new TextToSpeechClient();
const vertex = new VertexAI({
  project: "kalamanch-app",
  location: "us-central1",
});
const generativeModel = vertex.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Function
export const voiceAssistant = onRequest(
  async (req: Request, res: Response) => {
    try {
      // Step 1: Transcribe audio
      const audioBytes = req.body.audio as string; // base64 string
      const [sttResponse] = await speechClient.recognize({
        audio: {content: audioBytes},
        config: {
          encoding: "WEBM_OPUS",
          languageCode: "en-US",
        },
      });

      let transcript = "";
      if (sttResponse.results && sttResponse.results.length > 0) {
        transcript = sttResponse.results
          .map((r) => r.alternatives?.[0]?.transcript ?? "")
          .join("\n");
      } else {
        transcript = "[No speech recognized]";
      }

      // Step 2: Send transcript to Vertex AI
      const llmResponse = await generativeModel.generateContent({
        contents: [
          {
            role: "user",
            parts: [{text: transcript}],
          },
        ],
      });

      const aiText =
        llmResponse.response?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
      logger.info("AI Response:", aiText);

      // Step 3: Convert AI response to speech
      const [ttsResponse] = await ttsClient.synthesizeSpeech({
        input: {text: aiText},
        voice: {languageCode: "en-US", ssmlGender: "FEMALE"},
        audioConfig: {audioEncoding: "MP3"},
      });

      // Return both text + audio
      res.json({
        transcript,
        aiText,
        audio: ttsResponse.audioContent?.toString("base64"),
      });
    } catch (err) {
      logger.error("Error in voice assistant pipeline", err);
      res.status(500).send("Error in voice assistant pipeline");
    }
  },
);

