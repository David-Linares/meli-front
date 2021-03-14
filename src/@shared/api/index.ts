import { ItemsService } from "./items/index";
export class MicroserviceApi {
  itemsService: ItemsService;

  constructor() {
    this.itemsService = new ItemsService();
  }
}
