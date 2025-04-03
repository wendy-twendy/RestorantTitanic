import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { storage } from "./storage";
import fs from "fs";
import { parse } from "csv-parse/sync";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
  
  // Serve the photos directory as static files
  const photosPath = path.resolve(process.cwd(), "photos");
  app.use("/photos", express.static(photosPath));

  // API endpoint to get menu data from CSV
  app.get("/api/menu", (req, res) => {
    try {
      const csvFilePath = path.resolve(process.cwd(), "Restaurant_Menu.csv");
      const csvData = fs.readFileSync(csvFilePath, "utf8");
      
      const records = parse(csvData, {
        columns: true,
        skip_empty_lines: true
      });
      
      // Transform the CSV data into the expected format
      const formattedData = records.map((record: any) => ({
        section: record.Section,
        albanianName: record["Albanian name"],
        englishName: record["English name"],
        price: record.Price
      }));
      
      res.json(formattedData);
    } catch (error) {
      console.error("Error reading menu CSV:", error);
      res.status(500).json({ error: "Failed to load menu data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
