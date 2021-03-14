import { BaseMicroservice } from "../microservice";

export class ItemsService extends BaseMicroservice {
  private baseUrl: string = "";
  private prefix: string = "";

  constructor() {
    super();
    this.baseUrl = "http://localhost:3100/api/items";
  }

  public getItems(query: string) {
    const url = `${this.baseUrl}?${query}`;
    const fetchOptions = {
      "Content-Type": "application/json",
    };
    return fetch(url, { ...fetchOptions, method: "GET" }).then(
      this.responseToJson
    );
  }

  public getItemDetail(id: string) {
    const url = `${this.baseUrl}/${id}`;
    const fetchOptions = {
      "Content-Type": "application/json",
    };
    return fetch(url, { ...fetchOptions, method: "GET" }).then(
      this.responseToJson
    );
  }
}
