export async function getJson(sql: string) {
  try {
    const response = await fetch(
      `https://rnsloan-drinks.herokuapp.com/all_drinks/all_drinks.jsono?sql=${sql}`
    );
    return response.json();
  } catch (e) {
    return e;
  }
}
