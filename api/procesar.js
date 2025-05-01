function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function POST(request) {
  const body = await request.json();
  console.log('Body recibido:', body);

  await delay(5000); // Simula un retraso de 5 segundos 

  const data = {
    account: {
      companyId: 'testcompanyId123',
    },
    contact: {
      emailVerified: true,
    },
  };

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}