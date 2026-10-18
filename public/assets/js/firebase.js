import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgl-etea7xbqkOdwJ-w4-AQ0XG8wAf4cs",
  databaseURL: "https://lojakim-default-rtdb.firebaseio.com",
  projectId: "lojakim",
  storageBucket: "lojakim.firebasestorage.app"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
