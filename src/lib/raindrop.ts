async function getGallery() {
  const url = import.meta.env.VITE_RAINDROP_URL;
  const authToken = import.meta.env.VITE_RAINDROP_AUTH_TOKEN;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  const { items } = await response.json();
  return items;
}

export default getGallery;
