// src/firebase.js — Firebase v10+ modular SDK initialization
// Gracefully handles missing configuration so the app renders
// a helpful message instead of crashing before credentials are supplied.

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check whether real keys have been provided
const hasValidConfig = firebaseConfig.apiKey && firebaseConfig.apiKey !== 'your-api-key-here';

let app = null;
let auth = null;
let db = null;

if (hasValidConfig) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
} else {
  console.warn(
    '⚠️  Firebase is not configured. Add your credentials to .env.local and restart the dev server.'
  );
}

export { app, auth, db, hasValidConfig };

