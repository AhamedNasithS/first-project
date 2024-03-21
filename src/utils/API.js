const mode = process.env.REACT_APP_MODE ?? "LOCAL"; // DEV STAGE UAT LIVE

const API = {};

API.HOST = "";

if (mode === "LOCAL") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/dev/register_mail.php";
}

if (mode === "DEV") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/dev/register_mail.php";
}

if (mode === "STAGE") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/dev/register_mail.php";
}

if (mode === "UAT") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/uat/register_mail.php";
}

if (mode === "LIVE") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/live/register_mail.php";
}

module.exports = API;
