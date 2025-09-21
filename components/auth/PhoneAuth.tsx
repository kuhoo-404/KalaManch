"use client";

import { useEffect, useState, useRef } from "react";
import { auth } from "../../lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber, UserCredential } from "firebase/auth";
import { ensureUserProfile } from "../../lib/ensureUserProfile";

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: any;
  }
}

export default function PhoneAuth() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recaptchaRef.current && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        recaptchaRef.current,
        { size: "invisible" },
        auth
      );
    }
  }, []);

  const sendOtp = async () => {
    try {
      setLoading(true);
      const appVerifier = window.recaptchaVerifier;
      if (!appVerifier) throw new Error("reCAPTCHA not initialized");

      const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier);
      window.confirmationResult = confirmationResult;
      alert("✅ OTP sent successfully");
    } catch (err: any) {
      console.error("❌ sendOtp error:", err);
      alert(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setLoading(true);
      if (!window.confirmationResult) throw new Error("No confirmation result found");

      const credential: UserCredential = await window.confirmationResult.confirm(code);
      const user = credential.user;
      if (!user) throw new Error("No user found after OTP verification");

      const token = await user.getIdToken();
      await ensureUserProfile(user);

      console.log("✅ Signed in:", user, token);
      alert("Phone sign-in successful!");
    } catch (err: any) {
      console.error("❌ verifyOtp error:", err);
      alert(err.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 max-w-sm mx-auto p-4 border rounded-lg shadow">
      <div ref={recaptchaRef}></div>

      <input
        className="border p-2 rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+91xxxxxxxxxx"
        disabled={loading}
      />

      <button
        className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
        onClick={sendOtp}
        disabled={loading || !phone}
      >
        {loading ? "Sending..." : "Send OTP"}
      </button>

      <input
        className="border p-2 rounded"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter OTP"
        disabled={loading}
      />

      <button
        className="bg-green-500 text-white p-2 rounded disabled:opacity-50"
        onClick={verifyOtp}
        disabled={loading || !code}
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>
    </div>
  );
}
