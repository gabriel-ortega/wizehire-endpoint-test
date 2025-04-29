const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/somerequest', async (req, res) => {
    console.log('Recibido body:', req.body);
  
    // 10 segundos
    await new Promise(resolve => setTimeout(resolve, 10000));
  
    // Response
    res.json({ message: 'asdkjasdkj12983asdlkjasd' });
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
