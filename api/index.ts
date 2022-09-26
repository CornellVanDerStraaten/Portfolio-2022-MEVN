import app from "./config/app";
import { startConnection } from "./config/database";

startConnection();
app.listen(3000);
console.log("Server on port", 3000);