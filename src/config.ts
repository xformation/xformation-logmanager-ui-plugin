//const IP = "localhost";
const IP = "100.64.108.25";
const securitySrvUrl = `http://${IP}:8094`;
const catalogSrvUrl = `http://${IP}:5050/api`;
const logMrgSrvUrl = `http://${IP}:9000/api`;

export const config = {
  basePath: "/plugins/xformation-logmanager-ui-plugin/page",
  STREAM: logMrgSrvUrl + `/streams`
};
