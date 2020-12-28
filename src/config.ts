// const IP = "localhost";
const IP = "100.64.3.237";
const securitySrvUrl = `http://${IP}:8094`;
const catalogSrvUrl = `http://${IP}:5050/api`;
const logMrgSrvUrl = `http://${IP}:9000/api`;

export const config = {
  basePath: "/plugins/xformation-logmanager-ui-plugin/page",
  STREAM: logMrgSrvUrl + `/streams`,
  TCP_INPUT_STREAM: logMrgSrvUrl + `/system/inputs`,

  SEVERITY_SUCCESS: "success",
  SEVERITY_ERROR: "error",
  TCP_INPUT_ADDED_SUCESS: "TCP INPUT SAVED",
  TCP_INPUT_ADDED_ERROR: "TCP Input can't added",
  STREAM_CREATED_SUCESS: "Stream Created",
  STREAM_CREATED_ERROR: "Stream can't created"
};
