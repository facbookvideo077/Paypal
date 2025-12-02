import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendTelegramMessage } from "./telegram";

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

  return httpServer;
}
