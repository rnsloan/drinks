export async function getJson(sql: string) {
  try {
    const response = await fetch(
      `https://cocktails-kxlvlpcure.now.sh/all_drinks-8b60292.json?sql=${sql}`
    );
    const json = await response.json();
    return json;
  } catch (e) {
    return e;
  }
}
