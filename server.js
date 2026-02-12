import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import cron from "node-cron"; // <--- IMPORT NOU 1

// Importăm routerul ȘI funcția de notificări (import named)
import apiPsi, { runDailyNotifications } from "./routes/api-psi.js"; // <--- IMPORT MODIFICAT

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set("trust proxy", 1);

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// static (unchanged behaviour)
app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }));

// API
app.use("/api.php", apiPsi);

// ============== CRON JOBS ==============
// Rulează în fiecare zi la ora 10:00 dimineața
// Sintaxa: "minut ora zi luna saptamana"
cron.schedule("0 10 * * *", () => {
  console.log("⏰ [CRON] Execut task-ul zilnic de notificări...");
  runDailyNotifications();
}, {
  scheduled: true,
  timezone: "Europe/Bucharest" // Setează fusul orar corect
});
// TEST TEMPORAR - rulează la pornirea serverului
//runDailyNotifications();
const PORT = process.env.PORT || 8079;
app.listen(PORT, () => {
  console.log("PSI server running on port", PORT);
});