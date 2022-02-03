export async function api(request) {
  const {email} = await request.json();
  const options = {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({
      profiles: [{email}],
    }),
  };

  const response = await fetch(
    `https://a.klaviyo.com/api/v2/list/${KLAYVIO_LIST_ID}/members?api_key=${KLAYVIO_API_KEY}`,
    options,
  );
  const {status} = response;
  const json = await response.json();

  return new Response(JSON.stringify(json), {status});
}
