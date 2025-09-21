"use client"; // if using App Router
import React, { useState, useRef } from "react";

export default function AudioRecorder() {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [aiReply, setAiReply] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  // Start recording
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.current.push(event.data);
      }
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunks.current, { type: "audio/webm" });
      chunks.current = [];

      // Convert blob → base64
      const arrayBuffer = await blob.arrayBuffer();
      const base64Audio = btoa(
        String.fromCharCode(...new Uint8Array(arrayBuffer))
      );

      // Send to Firebase Function
      try {
        const res = await fetch(
          "https://us-central1-kalamanch-app.cloudfunctions.net/voiceAssistant",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ audio: base64Audio }),
          }
        );

        const data = await res.json();
        console.log("Transcript:", data.transcript);
        console.log("AI Reply:", data.aiText);

        setTranscript(data.transcript);
        setAiReply(data.aiText);

        // AI audio playback (if returned)
        if (data.audio) {
          const audioBlob = new Blob(
            [Uint8Array.from(atob(data.audio), (c) => c.charCodeAt(0))],
            { type: "audio/mp3" }
          );
          setAudioUrl(URL.createObjectURL(audioBlob));
        }
      } catch (err) {
        console.error("Error sending audio:", err);
      }
    };

    mediaRecorder.start();
    setRecording(true);
  };

  // Stop recording
  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <div className="p-4 border rounded-md space-y-4">
      <button
        onClick={recording ? stopRecording : startRecording}
        className="px-4 py-2 rounded bg-blue-600 text-white"
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>

      {transcript && (
        <p>
          <strong>Transcript:</strong> {transcript}
        </p>
      )}

      {aiReply && (
        <p>
          <strong>AI Reply:</strong> {aiReply}
        </p>
      )}

      {audioUrl && (
        <audio controls src={audioUrl} className="w-full">
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}