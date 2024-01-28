export async function getData(url: string) {
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res) {
    throw new Error(`Failed to fetch data`);
  }

  return res.json();
}
