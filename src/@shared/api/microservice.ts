export class BaseMicroservice {
  async responseToJson(response: Response) {
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw data;
  }
}
