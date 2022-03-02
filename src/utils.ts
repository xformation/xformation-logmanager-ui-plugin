import axios from "axios";

export default class Utils {
  static postReq(url: any, data: any, callback: any) {
    console.log("Req: " + url + "\n" + data);
    axios
      .post(url, data)
      .then(response => {
        callback(response);
      })
      .catch(error => {
        console.log("POST Err: ", error);
        callback(null, error);
      });
  }

  static getReq(url: any) {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((response: any) => {
          resolve(response);
        })
        .catch((error: any) => {
          console.log("GET Err: ", error);
          reject(error);
        });
    });
  }

  static isNullEmpty(input: string) {
    if (input) {
      if (input.trim.length === 0) {
        return false;
      }
    }
    return true;
  }
}
