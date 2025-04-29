import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/procesar', async (req, res) => {
  console.log('Recibido body:', req.body);
  await new Promise(resolve => setTimeout(resolve, 10000));
  res.json({ message: 'asdkjasdkj12983asdlkjasd' });
});

// Exporta como un handler de serverless
export default app;
