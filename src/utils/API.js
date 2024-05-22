const mode = process.env.REACT_APP_MODE ?? "STAGE"; // DEV STAGE UAT LIVE

const API = {};

API.HOST = "";
API.DETAILS = "";
API.BUTTON = "";

if (mode === "LOCAL") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/dev/register_mail.php";

  API["BUTTON"] = "https://oneappbackend.hifrnds.in/api/v1/website/addLog";
}

if (mode === "DEV") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/dev/register_mail.php";

  API["BUTTON"] = "https://oneappbackend.hifrnds.in/api/v1/website/addLog";
}

if (mode === "STAGE") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/uat/register_mail.php";

  API["DETAILS"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/uat/personal_assistence_details.php";

  API["BUTTON"] = "https://oneappbackend.hifrnds.in/api/v1/website/addLog";
}

if (mode === "UAT") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/live/register_mail.php";
}

if (mode === "LIVE") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/live/register_mail.php";

  API["DETAILS"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/live/personal_assistence_details.php";
    
  API["BUTTON"] = "https://onebackendstage.hifrnds.in/api/v1/website/addLog";
}

module.exports = API;
