import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const app = express();

const whiteList = [
  'https://nlw22-impulse-web.vercel.app/', 
  'https://nlw22-impulse-lxv6frf3v-pauloricardoma.vercel.app',
];
const corsOptions = {
  origin(origin: any, callback: any) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes, cors(corsOptions));

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});

// SQLite
// Prisma