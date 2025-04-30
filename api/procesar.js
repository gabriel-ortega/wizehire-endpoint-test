import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';

const app = express();

app.use(cors());
app.use(express.json());

const data = {
  account: {
    companyId: 'newtestcompanyId123',
  },
  contact: {
    emailVerified: true,
  },
};

// Define el endpoint (nota: SIN `/api` aquí)
app.post('/procesar', async (req, res) => {
  console.log('Recibido body:', req.body);
  await new Promise(resolve => setTimeout(resolve, 5000));
  res.json(data);
});

// ¡Esta parte es clave!
export default serverless(app);

