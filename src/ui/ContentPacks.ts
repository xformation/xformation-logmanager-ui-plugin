import init from "../domain/ContentPacksApp";

export class ContentPacks {
  static templateUrl = "/partials/logmanager.html";
  constructor() {
    console.log("***************** First call");
    init();
  }
}
