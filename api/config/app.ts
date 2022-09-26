// @ts-ignore
import express from "express";
// @ts-ignore
import morgan from "morgan";
// @ts-ignore
import cors from "cors";
// @ts-ignore
import path from "path";
import helmet from "helmet";

// @ts-ignore
import tasksRoutes from "./routes";

const app = express();

app.use(cors());
app.use(helmet())
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", tasksRoutes);

// read static files
app.use(express.static(path.join(__dirname, "..", "..", "dist")));

export default app;