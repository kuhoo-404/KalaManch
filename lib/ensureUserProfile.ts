import { User } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const db = getFirestore();

export async function ensureUserProfile(user: User) {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || "",
      phone: user.phoneNumber || "",
      createdAt: new Date().toISOString(),
    });
    console.log("User profile created in Firestore");
  } else {
    console.log("User profile already exists");
  }
}
