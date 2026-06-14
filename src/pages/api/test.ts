export async function POST({ request }) {
  const body = await request.json();

  return new Response(
    JSON.stringify({
      ok: true,
      recibido: body
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
