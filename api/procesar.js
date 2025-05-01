function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function POST(request) {
  const body = await request.json();
  console.log('Body recibido:', body);

  await delay(300); // espera 300 ms

  const data = {
    account: {
      companyId: 'newtestcompanyId123',
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