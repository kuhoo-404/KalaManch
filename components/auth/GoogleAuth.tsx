import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../lib/firebase"; 

const provider = new GoogleAuthProvider();

export interface AuthResult {
  user: User;
  token: string;
}

/**
 * Sign in with Google and ensure Firestore user profile exists
 */
export async function signInWithGoogle(): Promise<AuthResult> {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const token = await user.getIdToken();

    // Check if user doc exists
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
      });
      console.log("✅ New user profile created in Firestore");
    } else {
      console.log("ℹ️ User profile already exists");
    }

    return { user, token };
  } catch (err: any) {
    console.error("❌ Google Sign-in error:", err);
    throw new Error(err.message || "Google sign-in failed");
  }
}

/**
 * Logout the current user
 */
export async function logout(): Promise<void> {
  try {
    await signOut(auth);
    console.log("✅ User signed out");
  } catch (err: any) {
    console.error("❌ Sign-out error:", err);
    throw new Error(err.message || "Sign-out failed");
  }
}
