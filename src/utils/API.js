const mode = process.env.REACT_APP_MODE ?? "DEV"; // DEV STAGE UAT LIVE

const API = {};

API.HOST = "";
API.DETAILS = "";
API.BUTTON = "";
API.SENDOTP = "";
API.VERIFYOTP = "";
API.CREATEWORKSPACE = "";
API.CHANGEJOINSTATUS = "";
API.UPDATECOMPANYURL = "";
API.INVITEUSERTOWORKSPACE = "";
API.CREATECHANNEL = "";



if (mode === "LOCAL") { 
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/dev/register_mail.php";

  API["BUTTON"] = "https://oneappbackend.hifrnds.in/api/v1/website/addLog";
  API["ONBOARDING"] = "https://oneappbackend.hifrnds.in/api/v1/website/addLog";
}

if (mode === "DEV") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/dev/register_mail.php";

  API["BUTTON"] = "https://oneappbackend.hifrnds.in/api/v1/website/addLog";

  API["SENDOTP"] = "https://oneappstage.hifrds.com/api/v1/sendOTPAdminUser";

  API["VERIFYOTP"] = "https://oneappstage.hifrds.com/api/v1/verifyOTPAdminUser";

  API["CREATEWORKSPACE"] = "https://oneappstage.hifrds.com/api/v1/createWorkspace";

  API["CHANGEJOINSTATUS"] = "https://channelsocket.hifrds.com/api/v1/transfer/changeJoinStatus";

  API["UPDATECOMPANYURL"] = "https://oneappstage.hifrds.com/api/v1/updateCompanyUrl";

  API["INVITEUSERTOWORKSPACE"] = "https://oneappstage.hifrds.com/api/v1/inviteUsersToWorkspace";

  API["CREATECHANNEL"] = "https://oneappstage.hifrds.com/api/v1/createChannel";
}

if (mode === "STAGE") {
  API["HOST"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/uat/register_mail.php";

  API["DETAILS"] =
    "https://devarus.aftergen.in/dev/API/oneAppWorkspace/uat/personal_assistence_details.php";

  API["BUTTON"] = "https://oneappbackend.hifrnds.in/api/v1/website/addLog";

  API["SENDOTP"] = "https://oneappstage.hifrds.com/api/v1/sendOTPAdminUser";

  API["VERIFYOTP"] = "https://oneappstage.hifrds.com/api/v1/verifyOTPAdminUser";

  API["CREATEWORKSPACE"] = "https://oneappstage.hifrds.com/api/v1/createWorkspace";

  API["CHANGEJOINSTATUS"] = "https://channelsocket.hifrds.com/api/v1/transfer/changeJoinStatus";

  API["UPDATECOMPANYURL"] = "https://oneappstage.hifrds.com/api/v1/updateCompanyUrl";

  API["INVITEUSERTOWORKSPACE"] = "https://oneappstage.hifrds.com/api/v1/inviteUsersToWorkspace";

  API["CREATECHANNEL"] = "https://oneappstage.hifrds.com/api/v1/createChannel";
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

  API["SENDOTP"] = "https://oneappstage.hifrds.com/api/v1/sendOTPAdminUser";

  API["VERIFYOTP"] = "https://oneappstage.hifrds.com/api/v1/verifyOTPAdminUser";

  API["CREATEWORKSPACE"] = "https://oneappstage.hifrds.com/api/v1/createWorkspace";

  API["CHANGEJOINSTATUS"] = "https://channelsocket.hifrds.com/api/v1/transfer/changeJoinStatus";

  API["UPDATECOMPANYURL"] = "https://oneappstage.hifrds.com/api/v1/updateCompanyUrl";

  API["INVITEUSERTOWORKSPACE"] = "https://oneappstage.hifrds.com/api/v1/inviteUsersToWorkspace";

  API["CREATECHANNEL"] = "https://oneappstage.hifrds.com/api/v1/createChannel";

}

module.exports = API;
