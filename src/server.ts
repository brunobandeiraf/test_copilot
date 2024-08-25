// Create a REST API server using Express
import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import "reflect-metadata";

const PORT = 3000;
const app = express();
// Implement the most common middleware here, for example body-parser, cors, etc
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
