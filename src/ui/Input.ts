import init from "../domain/InputApp";

export class Input {
  static templateUrl = "/partials/logmanager.html";
  constructor() {
    console.log("First call");
    init();
  }
}
