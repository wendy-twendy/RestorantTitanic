import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import { storage } from "./storage";
import geoip from 'geoip-lite';

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)
  
  // Serve the photos directory as static files
  const photosPath = path.resolve(process.cwd(), "photos");
  app.use("/photos", express.static(photosPath));

  const httpServer = createServer(app);

  return httpServer;
}
