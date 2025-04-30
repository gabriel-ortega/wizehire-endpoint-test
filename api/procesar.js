// import express from 'express';
// import cors from 'cors';
// import serverless from 'serverless-http';

// const app = express();

// app.use(cors());
// app.use(express.json()); // <--- importante para leer req.body

const data = {
  account: {
    companyId: 'newtestcompanyId123',
  },
  contact: {
    emailVerified: true,
  },
};

// app.post('/procesar', async (req, res) => {
//   console.log('Body recibido:', req.body);

//   // Esperar 300 milisegundos (0.3 segundos)
//   await new Promise(resolve => setTimeout(resolve, 300));

//   res.json(data);
// });

// export default serverless(app);

export function POST(request) {
  console.log('Body recibido:', request.body);
  // return new Response(data);
  return new Response("hello world");
}