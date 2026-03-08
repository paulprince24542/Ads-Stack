import { createServer } from "http";
import express from "express";
import { bootstrap } from "../dist/src/main";


let cachedServer: any;

export default async function handler(req: any, res: any) {
  if (!cachedServer) {
    const app = await bootstrap();
    const expressApp = express();
    expressApp.use(await app.getHttpAdapter().getInstance());

    cachedServer = createServer(expressApp);
  }

  cachedServer.emit("request", req, res);
}