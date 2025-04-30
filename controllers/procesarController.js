// Controlador para el endpoint /procesar
const procesarPost = async (req, res) => {
    console.log('Recibido body:', req.body);
  
    // Espera de 10 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));
  
    // Respuesta con garabatos
    res.json({ message: 'asdkjasdkj12983asdlkjasd' });
  };
  
  module.exports = { procesarPost };
  