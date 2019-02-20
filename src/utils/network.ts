export async function getJson(sql: string) {
  try {
    const response = await fetch(
      `https://cocktails-kxlvlpcure.now.sh/all_drinks-8b60292.jsono?sql=${sql}`
    );
    return response.json();
  } catch (e) {
    return e;
  }
}
