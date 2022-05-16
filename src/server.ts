import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const app = express();

app.use(cors({
  origin: 'https://nlw22-impulse-web.vercel.app/',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
}));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP server running!');
});

// SQLite
// Prisma