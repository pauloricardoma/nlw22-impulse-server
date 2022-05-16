import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const app = express();

app.use(cors({
  origin: [
    'http://localhost:3000', 
    'exp://192.168.0.130:19000', 
    'http://localhost:19002', 
    'https://nlw22-impulse-web.vercel.app/',
  ]
}));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});

// SQLite
// Prisma