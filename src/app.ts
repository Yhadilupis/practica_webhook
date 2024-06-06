import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const port =  3000;

app.get('/hello', (req:Request, res:Response) => {
    res.send("Hello World :3");
});

app.get('/bye', (req:Request, res:Response) => {
    res.send("Bye World que tal");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;