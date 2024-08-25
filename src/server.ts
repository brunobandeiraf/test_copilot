// Create a REST API server using Express
import "reflect-metadata";
import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import databaseService from './services/database-service';

const PORT = 3000;
const app = express();
// Implement the most common middleware here, for example body-parser, cors, etc
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


databaseService.initialize()
  .then(() => { 
    console.log('Database connected!') 
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
    console.error(error);
  }); 

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
