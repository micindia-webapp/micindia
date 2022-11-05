import dotenv from 'dotenv';
import express from "express";

dotenv.config();
const app = express();

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Node is running at port ${PORT}`));

export default app;