import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import API from "../../utils/API";
import { useNavigate } from 'react-router-dom';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  convertToPixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";

import "react-image-crop/dist/ReactCrop.css";
import "./css/style.css";
import { FaArrowLeft } from "react-icons/fa6";

import userDetailsStorage from "../../utils/store/userDetails";

import LoadLottie from '../loadLottie';
import emailJson from "../../images/Email.json";
import otpJson from "../../images/OTP.json";
import inviteJson from "../../images/Invite.json";
import officeJson from "../../images/Office.json";

import { v4 as uuidv4 } from 'uuid';


function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

// Function to validate input against allowed characters
const isValidInput = (input) => {
  const regex = /^[a-zA-Z0-9_-]*$/; // Regex pattern to allow only letters, numbers, underscores, and hyphens
  return regex.test(input);
};

async function checkURL(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`URL does not exists: ${url}`);
      return false;
    } else {
      console.log(`URL exists: ${url}`);
      return true;
    }
  } catch (error) {
    console.log(`Error checking URL: ${error}`);
    return false;
  }
}

export default function Signup({ setPricingPackage, pricingPackage }) {
  const navigate = useNavigate();
  const items = Array.from({ length: 10 }, (_, index) => index);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [otpSectionVisible, setOtpSectionVisible] = useState(false);

  const [workplaceSectionVisible, setWorkPlaceSectionVisible] = useState(false);
  const [emailSectionVisible, setEmailSectionVisible] = useState(true);
  const [profileSectionVisible, setProfileSectionVisible] = useState(false);
  const [inviteSectionVisible, setInviteSectionVisible] = useState(false);
  const [channelCreationSection, setChannelCreationSection] = useState(false);

  const [countdown, setCountdown] = useState(0);
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const inputRefs = useRef([...Array(6)].map(() => React.createRef()));
  const [workPlaceName, setWorkPlaceName] = useState("");
  const [adminUserName, setAdminUserName] = useState("");
  const [adminUserNameError, setAdminUserNameError] = useState("");
  const [workPlaceNameError, setWorkPlaceNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otpError, setOtpError] = useState("");

  const [designation, setDesignation] = useState("");
  const [designationError, setDesignationError] = useState("");
  const designationRef = useRef(null);

  const [profilePictureError, setProfilePictureError] = useState("");
  const [inviteEmailError, setInviteEmailError] = useState("");

  const [userDetails, setUserDetails] = useState(null);
  const [workspaceName, setWorkspaceName] = useState(null);
  const [workPlaceDetails, setWorkPlaceDetails] = useState(null);

  const inviteInputRef = useRef(null);

  const [inviteEmails, setInviteEmails] = useState([]);
  const [inviteNewEmail, setInviteNewEmail] = useState("");

  // State for the selected image file
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [backPage, setBackPage] = useState("email");

  //cropImgae
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  // const [aspect, setAspect] = useState(null);
  const [aspect, setAspect] = useState(1);
  const [cropImageSectionVisible, setCropImageSectionVisible] = useState(false);
  const [selectedCropeImage, setSelectedCropImage] = useState(null);
  const [focusIndex, setFocusIndex] = useState(0);

  const emailInputRef = useRef(null);
  const workspaceInputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  const [channelName, setChannelName] = useState("");
  const [channelNameError, setChannelNameError] = useState("");
  const [deviceId, setDeviceId] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value.toLowerCase();
    setEmail(newEmail);
    if (newEmail === "") {
      setEmailError("");
    }
  };

  const handleEmailInput = (e) => {
    if (e?.target?.value?.length > 50) {
      setInviteEmailError("Only 50 charcters allowed");
    } else {
      setInviteEmailError("");
      setInviteNewEmail(e.target.value.toLowerCase());
    }
  };

  const handleEnter = (e) => {
    if (
      e.key === "Enter" &&
      inviteNewEmail.trim() !== "" &&
      !inviteEmailError
    ) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@.]{2,}$/;

      if (!emailRegex.test(inviteNewEmail)) {
        setInviteEmailError("Invalid email address.");
      } else {
        setInviteEmails([...inviteEmails, inviteNewEmail.trim()]);
        setInviteNewEmail("");
        setInviteEmailError("");
      }
    }
  };

  const handleAddEmail = () => {
    if (inviteNewEmail.trim() !== "" && !inviteEmailError) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@.]{2,}$/;

      if (!emailRegex.test(inviteNewEmail)) {
        setInviteEmailError("Invalid email address.");
      } else {
        setInviteEmails([...inviteEmails, inviteNewEmail.trim()]);
        setInviteNewEmail("");
        setInviteEmailError("");
      }
      if (inviteInputRef.current) {
        inviteInputRef.current.focus();
      }
    }
  };

  const handleRemoveEmail = (index) => {
    const updatedEmails = [...inviteEmails];
    updatedEmails.splice(index, 1);
    setInviteEmails(updatedEmails);
  };

  useEffect(() => {
    if (email) {
      console.log("Email set, proceeding to sign out", email);
    }
  }, [email]);

  const pagePosition = () => {
    const resetSections = () => {
      setOtpSectionVisible(false);
      setEmailSectionVisible(false);
      setProfileSectionVisible(false);
      setInviteSectionVisible(false);
      setCropImageSectionVisible(false);
      setWorkPlaceSectionVisible(false);
      setChannelCreationSection(false);
      setEmailError("");
    };

    switch (backPage) {
      case "email":
        navigate("/");
        break;
      case "otp":
        setBackPage("email");
        resetSections();
        setEmailSectionVisible(true);
        break;
      case "workSpaceName":
        setBackPage("email");
        setOtpInputs(["", "", "", "", "", ""]);
        resetSections();
        setEmailSectionVisible(true);
        break;
      case "profile":

        setBackPage("workSpaceName");
        resetSections();
        // setDesignation("");
        setOtpInputs(["", "", "", "", "", ""]);
        setWorkPlaceSectionVisible(true);
        break;
      case "invite":
        setBackPage("profile");
        resetSections();
        setProfileSectionVisible(true);
        const workspaceResponse = workPlaceDetails.workspaceDetails;
        userDetailsStorage.setState({ userId: userDetails.userId });
        userDetailsStorage.setState({ userToken: userDetails.userToken });
        userDetailsStorage.setState({ companyId: userDetails.companyId });
        userDetailsStorage.setState({ userName: userDetails.userName });
        userDetailsStorage.setState({ useImage: userDetails.userImage });
        userDetailsStorage.setState({ userEmail: userDetails.emailId });
        userDetailsStorage.setState({ userDesignation: userDetails.designation });
        userDetailsStorage.setState({ workSpaceUrl: workspaceResponse.workspaceUrl });
        userDetailsStorage.setState({ companyName: workspaceResponse.workspaceName });
        userDetailsStorage.setState({ deviceId: deviceId });
        navigate('/success');
        break;

      case "channel":
        setBackPage("invite");
        resetSections();
        setInviteSectionVisible(true);
        break;

      case "cropImage":
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setBackPage("profile");
        resetSections();
        setProfileSectionVisible(true);
        setSelectedCropImage(null);
        setSelectedImage(null);
        setImgSrc(null);
        break;
      default:
    }
  };

  const handleWorkPlaceClick = async (e) => {
    e.preventDefault();
    if (workPlaceName.trim() === "") {
      setWorkPlaceNameError("Workspace name is required");
    } else {
      setFocusIndex(1);
      setWorkPlaceNameError("");
      setWorkPlaceSectionVisible(false);
      setEmailSectionVisible(false);
      setOtpSectionVisible(false);
      setProfileSectionVisible(true);
      setInviteSectionVisible(false);
      setChannelCreationSection(false);
      setBackPage("profile");
    }
  };

  const channelCreate = async () => {
    setButtonLoading(true);
    const header = {
      Authorization: `Bearer ${userDetails.userToken}`,
    };

    const condition = {
      userId: userDetails.userId,
      companyId: userDetails.companyId,
      channelName: channelName,
      channelIcon: "channelemoji1.png",
      channelView: "PUBLIC",
      channelMembers: [],
    };

    try {
      await axios.post(
        `${API.CREATECHANNEL}`,
        condition,
        { headers: header }
      );
      const workspaceResponse = workPlaceDetails.workspaceDetails;
      userDetailsStorage.setState({ userId: userDetails.userId });
      userDetailsStorage.setState({ userToken: userDetails.userToken });
      userDetailsStorage.setState({ companyId: userDetails.companyId });
      userDetailsStorage.setState({ userName: userDetails.userName });
      userDetailsStorage.setState({ useImage: userDetails.userImage });
      userDetailsStorage.setState({ userEmail: userDetails.emailId });
      userDetailsStorage.setState({ userDesignation: userDetails.designation });
      userDetailsStorage.setState({ workSpaceUrl: workspaceResponse.workspaceUrl });
      userDetailsStorage.setState({ companyName: workspaceResponse.workspaceName });
      userDetailsStorage.setState({ deviceId: deviceId });
      navigate('/success');
      // setButtonLoading(false);
    } catch (error) {
      console.log("error", error);
      setButtonLoading(false);
    }
  };

  const handleChannelClick = async (e) => {
    e.preventDefault();
    if (buttonLoading) {
      return;
    }
    if (channelName.trim() === "") {
      setChannelNameError("Channel name is required");
    } else {
      setButtonLoading(true);
      await channelCreate();
    }
  };

  const handleContinueClick = async (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setEmailError("Email address is required");
    } else {
      // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@.]{2,}$/;
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email address.");
      } else {
        // if (email.indexOf(".") > email.indexOf("@")) {
        setButtonLoading(true);
        try {
          const condition = { email: email };

          // Assuming axios is properly imported
          const response = await axios.post(
            `${API.SENDOTP}`,
            condition,
            {
              headers: {
                Platform: "web",
              },
            }
          );
          //console.log(response.data);
          if (response.data.statusCode === 200) {
            setFocusIndex(2);
            setEmailError("");
            setCountdown(60);
            setOtpSectionVisible(true);
            setEmailSectionVisible(false);
            setProfileSectionVisible(false);
            setInviteSectionVisible(false);
            setCropImageSectionVisible(false);
            setBackPage("otp");
            inputRefs.current[0].current.focus();
          } else {
            setEmailError(response.data.message);
          }
          setButtonLoading(false);
        } catch (error) {
          setEmailError("Somthing went wrong please try again later");
          setButtonLoading(false);
        }
      }
    }
  };

  const handleOtpClick = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    try {
      const otp = otpInputs.join("");
      const condition = { email, otp: parseInt(otp, 10) };
      const response = await axios.post(
        `${API.VERIFYOTP}`,
        condition,
        {
          headers: {
            Platform: "web",
          },
        }
      );

      if (response.data.statusCode === 200) {
        setUserDetails(response.data.data);
        setOtpSectionVisible(false);
        setEmailSectionVisible(false);
        setButtonLoading(false);
        setProfileSectionVisible(false);
        setBackPage("workSpaceName");
        setWorkPlaceSectionVisible(true);
        setInviteSectionVisible(false);
        setCropImageSectionVisible(false);
      } else {
        setOtpError(response.data.message);
        setButtonLoading(false);
      }
    } catch (error) {
      setOtpError("Something went wrong, please try again later");
      setButtonLoading(false);
    }
  };

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const updatedOtpInputs = [...otpInputs];
      updatedOtpInputs[index] = value;
      setOtpInputs(updatedOtpInputs);

      // Move to the next input field if not the last one
      if (index < inputRefs.current.length - 1 && value.trim() !== "") {
        inputRefs.current[index + 1].current.focus();
      }

      // Move to the previous input field if deleting in the last one
      if (index > 0 && value.trim() === "") {
        inputRefs.current[index - 1].current.focus();
      }
    }
  };


  // const redirectTownHall = async () => {
  //   const data =
  //   userDetails.userToken +
  //   "," +
  //   userDetails.userId +
  //   "," +
  //   userDetails.companyId +
  //   "," +
  //   userDetails.userName +
  //   "," +
  //   userDetails.userImage +
  //   "," +
  //   userDetails.emailId +
  //   "," +
  //   userDetails.designation +
  //   "," +
  //   workSpaceUrl + 
  //   "," +
  //   workspaceName + 
  //   "," +
  //   deviceId +
  //   "," + 
  //   true;

  //   // if(process.env.NEXT_PUBLIC_API_MODE == "LOCAL"){
  //   //   window.location.href = `http://localhost:3000/loading?data=${data}`;
  //   // }else{
  //   //   const loginPageUrl = API.LOGIN_PAGE_URL;
  //   //   const isUrlAvailable = await checkURL(`https://${workSpaceUrl}`);
  //   //   if(isUrlAvailable){
  //   //     window.location.href = `https://${workSpaceUrl}/loading?data=${data}`;
  //   //   }else{
  //   //     window.location.href = `${loginPageUrl}loading?data=${data}`;
  //   //   }
  //   // }

  // };

  const handleInputKeyDown = (index, event) => {
    const value = event.target.value;
    // Check if Backspace or Delete key is pressed
    if (event.key === "Backspace" || event.key === "Delete") {
      //console.log("Backspace or Delete key pressed while focused");
      if (index > 0 && value.trim() === "") {
        inputRefs.current[index - 1].current.focus();
      }
      // You can perform additional actions here
    }
    // Check if a number key is pressed
    if (/^\d$/.test(event.key)) {
      //console.log(`Number key ${event.key} pressed while focused`);
      if (index < inputRefs.current.length - 1 && value.trim() !== "") {
        inputRefs.current[index + 1].current.focus();
      }
      // You can perform additional actions here
    }
  };

  // Handler for image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result ? reader.result.toString() : "")
      );
      reader.readAsDataURL(e.target.files[0]);
      setBackPage("cropImage");
      setSelectedImage(file);
      setProfilePictureError("");
      setOtpSectionVisible(false);
      setEmailSectionVisible(false);
      setProfileSectionVisible(false);
      setInviteSectionVisible(false);
      setCropImageSectionVisible(true);
    } else {
      // Handle non-image file selection if needed
      alert("Please select a valid image file.");
    }
  };

  const updateCompanyUrl = async (companyUrl, userId, workSpaceId) => {
    try {
      const sendCondition = {
        userId: userId,
        companyId: workSpaceId,
        companyUrl: companyUrl,
      };
      await axios.post(
        `${API.UPDATECOMPANYURL}`,
        sendCondition
      );
    } catch (err) {
      //console.log(err)
    }
  };


  const handleContinueProfile = async (e) => {
    e.preventDefault();
    if (adminUserName.trim() === "") {
      setAdminUserNameError("Please enter a name.");
      setProfilePictureError("");
      setDesignationError("");
    }

    else {
      //   setLoading(true);
      setButtonLoading(true);

      const formData = new FormData();
      if (selectedImage) {
        formData.append("userImage", selectedImage);
      }
      formData.append("workspaceName", workPlaceName.trim());
      formData.append("userEmail", email);
      formData.append("userName", adminUserName);
      if (designation) {
        formData.append("designation", designation);
      }
      formData.append("signupType", "EMAIL");
      formData.append("selectedPlan", pricingPackage)
      try {
        const response = await axios.post(
          `${API.CREATEWORKSPACE}`,
          formData,
          {
            headers: {
              // "Authorization": `Bearer ${userToken}`,
              // "WebDeviceToken": deviceToken,
              "Platform": "web",
              "Device-Id": deviceId,
            },
          }
        );

        if (response.data.statusCode === 200) {
          try {
            const sendCondition = { email: email };
            await axios.post(
              `${API.CHANGEJOINSTATUS}`,
              sendCondition
            );
          } catch (err) { }

          setWorkPlaceDetails(response.data.data);
          setPricingPackage('')

          const userResponse = response.data.data.userDetails;
          const workspaceResponse = response.data.data.workspaceDetails;
          setUserDetails(userResponse);
          setWorkspaceName(response.data.data.workspaceDetails.workspaceName)
          await updateCompanyUrl(workspaceResponse.workspaceUrl, userResponse.userId, workspaceResponse.workspaceId);
          setOtpSectionVisible(false);
          setEmailSectionVisible(false);
          setProfileSectionVisible(false);
          setInviteSectionVisible(true);
          setCropImageSectionVisible(false);
          setButtonLoading(false);
          setChannelCreationSection(false);
          setBackPage("invite");

          setAdminUserNameError("");
          setDesignationError("");
          setProfilePictureError("");
        } else {
          setProfilePictureError(response.data.message);
          //   setLoading(false);
          setButtonLoading(false);
        }
      } catch (error) {
        setProfilePictureError("Something went wrong, please try again later");
        console.log("error", error);
        // setLoading(false);
        setButtonLoading(false);
      }
    }
  };

  useEffect(() => {
    const browserId = uuidv4();
    setDeviceId(browserId);
  }, [])
  // Function to handle input change
  const channelTiltleChange = (e) => {
    let inputValue = e.target.value;

    // Replace spaces with hyphens
    inputValue = inputValue.replace(/\s/g, "-");

    // Validate the modified input
    if (isValidInput(inputValue)) {
      setChannelName(inputValue);
    }
  };

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  async function onDownloadCropClick() {
    const image = imgRef.current;
    const previewCanvas = previewCanvasRef.current;
    if (!image || !previewCanvas || !completedCrop) {
      throw new Error("Crop canvas does not exist");
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );
    const ctx = offscreen.getContext("2d");
    if (!ctx) {
      throw new Error("No 2d context");
    }

    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height
    );

    setOtpSectionVisible(false);
    setEmailSectionVisible(false);
    setProfileSectionVisible(true);
    setInviteSectionVisible(false);
    setCropImageSectionVisible(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    return new Promise((resolve) => {
      offscreen.convertToBlob({ type: "image/png" }).then((blob) => {
        if (blob) {
          const file = new File([blob], "cropped_image.png", {
            type: "image/png",
          });
          const formData = new FormData();
          formData.append("croppedImage", file);
          setSelectedImage(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            const dataUrl = reader.result;
            if (dataUrl) {
              setSelectedCropImage(dataUrl);
              resolve(blob);
            }
          };
          reader.readAsDataURL(blob);
        }
      });
    });
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  function handleToggleAspectClick() {
    setIsChecked((prevState) => !prevState);
    if (aspect) {
      setAspect(undefined);
    } else {
      setAspect(1 / 1);

      if (imgRef.current) {
        const { width, height } = imgRef.current;
        const newCrop = centerAspectCrop(width, height, 1 / 1);
        setCrop(newCrop);
        setCompletedCrop(convertToPixelCrop(newCrop, width, height));
      }
    }
  }

  const inviteTeamMembers = async () => {
    const header = {
      Authorization: `Bearer ${userDetails.userToken}`,
      // WebDeviceToken: deviceToken,
      Platform: "web",
      "Device-Id": deviceId,
    };
    if (inviteEmails.length !== 0) {
      const selectedEmail = email;
      const sendEmails = inviteEmails.filter(email => email !== selectedEmail);
      if (sendEmails.length !== 0) {
        setButtonLoading(true);
        try {
          const userResponse = workPlaceDetails.userDetails;
          const workspaceResponse = workPlaceDetails.workspaceDetails;
          const condition = {
            userEmail: sendEmails,
            invitedBy: userResponse.userId,
            workspaceId: workspaceResponse.workspaceId,
          };

          console.log(condition);
          const response = await axios.post(
            `${API.INVITEUSERTOWORKSPACE}`,
            condition,
            { headers: header }
          );
          if (response.data.statusCode === 200 || response.data.statusCode === 0) {
            // setSuccessAlert(true);
            openChannelSection();
            setInviteEmails([]);
          } else {
            setEmailError(response.data.message);
          }
          setButtonLoading(false);
        } catch (error) {
          setEmailError("Somthing went wrong please try again later");
          console.error("error", error);
          setButtonLoading(false);
          // router.push("/");
        }
      } else {
        openChannelSection();
        setInviteEmails([]);
      }
    }
  };

  useEffect(() => {
    let interval;

    if (typeof window !== "undefined" && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 960);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  useEffect(()=>{
    if(countdown===0){
    setOtpError("");
    setFocusIndex(null);
    setOtpInputs(["", "", "", "", "", ""]);
    setButtonLoading(false);
    setTimeout(() => {
    setFocusIndex(1);
    }, 500);
    }
    },[countdown])

  // Format the countdown time as mm:ss
  const formatCountdown = () => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const openChannelSection = () => {
    setFocusIndex(3);
    setChannelNameError("");
    setChannelName("");
    setWorkPlaceSectionVisible(false);
    setEmailSectionVisible(false);
    setOtpSectionVisible(false);
    setProfileSectionVisible(false);
    setInviteSectionVisible(false);
    setChannelCreationSection(true);
    setBackPage("channel");
  };

  useEffect(() => {
    const isOtpFilled = otpInputs.every((input) => input.trim() !== "");
    setIsContinueDisabled(!isOtpFilled);
  }, [otpInputs]);

  useEffect(() => {
    const allInputsFilled = otpInputs.every((input) => input !== "");

    if (allInputsFilled) {
      // handleOtpClick();
      handleOtpClick(new Event("dummy"));
    }
  }, [otpInputs]);

  useEffect(() => {
    if (focusIndex === 0 && workspaceInputRef.current) {
      workspaceInputRef.current.focus();
    } else if (focusIndex === 1 && emailInputRef.current) {
      emailInputRef.current.focus();
    } else if (
      focusIndex === 2 &&
      inputRefs.current[0] &&
      inputRefs.current[0].current
    ) {
      inputRefs.current[0].current.focus();
    }
  }, [focusIndex]);

  useEffect(() => {
    const handlePaste = (event) => {
      const paste = (event.clipboardData || window.clipboardData).getData("text");
      if (/^\d{6}$/.test(paste) && otpSectionVisible) {
        const newOtpInputs = paste.split("");
        setOtpInputs(newOtpInputs);
        inputRefs.current.forEach((ref, i) => {
          if (ref.current) {
            ref.current.value = newOtpInputs[i];
          }
        });
        event.preventDefault();
      }
    
    };

    window.addEventListener("paste", handlePaste);

    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, [otpSectionVisible]);

  return (
    <div className="">
      <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#1E2430] overflow-hidden justify-center items-center">
        {/* <SuccesAlert /> */}
        <div
          className="fixed top-5 md:top-8 right-5 md:right-10 cursor-pointer z-40"
          onClick={() => {
            pagePosition();
          }}
        >
          <img
            src="https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/closeicon.svg"
            className="h-[48px] w-[48px]"
            alt=""
          />
        </div>
        {/* Left Section */}
        <div
          className={`h-screen hidden md:w-1/2 md:flex mt-5 md:mt-0 justify-center items-center text-center bg-transparent md:bg-[#121825] ${backPage === "workSpaceName" || backPage === "channel"
              ? ""
              : "mx-2"
            }`}
        >
          {backPage === "workSpaceName" ? (
            <div className="text-white h-full">
              <div className="h-full mt-10 mr-10 border-r-[10px] border-t-[10px] border-[#414651] rounded-tr-3xl flex flex-col">
                <div className="flex justify-end items-center w-full">
                  <div className="flex justify-center items-center mt-8 mr-8">
                    <div className="text-4xl font-[500]">
                      {workPlaceName}
                    </div>
                    <img
                      src="https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/profileuser.svg"
                      alt="Home User"
                      className="h-[90px] w-[90px] rounded-lg ml-3"
                    />
                  </div>
                </div>
                <img
                  src={`https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/workspace_preview1.png`}
                  alt="Home User"
                  className=" pr-8 h-screen mt-5 object-cover object-right"
                />
              </div>
            </div>
          ) : backPage === "channel" ? (
            <div className="text-white h-full w-full pt-2 pr-2">
              <div className="pl-5 h-full w-full mt-10 mr-10 border-r-[10px] border-t-[10px] border-[#414651] rounded-tr-3xl flex">
                <div className="flex">
                  <div className="w-20 md:w-24 flex flex-col h-screen overflow-hidden">
                    <aside className=" w-full overflow-y-auto element-with-scrollbar bg-[#121825] relative">
                      <div className="flex justify-start items-center w-full">
                        <div className="flex justify-center items-center mt-8 ml-0 text-lg font-[500]">
                          Workfast.ai
                        </div>
                      </div>
                      <nav className="font-[400] pt-0 mx-0 text-center mt-5">
                        <div className="relative">
                          <div className="py-2 opacity-100">
                            <div className="w-full flex justify-center px-1">
                              <img
                                src="https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/home.svg"
                                className="h-[30px] w-[30px]"
                                alt=""
                              />
                            </div>
                            <div className="flex-col text-[#FFDE08] text-[9px] md:text-[15px] flex items-center justify-center px-2 nav-item py-1 font-[500] underline-offset-1">
                              Channel
                              <div className="h-[1px] bg-[#FEDD0A] w-full"></div>
                            </div>
                          </div>
                        </div>
                        {items.map((item) => (
                          <div className="relative mt-5" key={item}>
                            <div className="py-2 opacity-100">

                              <div className="w-full flex justify-center px-1 rounded-lg">
                                <div className="rounded-lg h-[30px] w-[30px] bg-[#888B92]"></div>
                              </div>
                              <div className="flex-col flex items-center justify-center px-2 nav-item py-1 font-[500] underline-offset-1 bg-[#888B92] h-3 mt-2 rounded-lg"></div>

                            </div>
                          </div>
                        ))}
                      </nav>
                    </aside>
                  </div>
                </div>

                <div className=" relative flex flex-col w-full pt-5 pl-5">
                  <div className="h-20 w-full"></div>
                  <div className="w-full h-full border-[#383D48] border-l-[1px] border-t-[1px] rounded-tl-3xl">
                    <div className="py-3 overflow-auto transition-transform duration-500 transform px-2 border-[1px] border-[#3D4554] border-t-0 border-r-0 border-l-0">
                      <div className="flex justify-between text-center items-center w-full">
                        <div className="text-md md:text-2xl font-semibold mr-2">
                          Channels
                        </div>
                        <div className=" cursor-pointer">
                          <div className=" rounded-lg">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 512 512"
                              className=" "
                              height="2em"
                              width="2em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M472 168H40a24 24 0 010-48h432a24 24 0 010 48zm-80 112H120a24 24 0 010-48h272a24 24 0 010 48zm-96 112h-80a24 24 0 010-48h80a24 24 0 010 48z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col overflow-y-auto relative mt-5">
                      <div className="flex justify-between items-start text-center px-2 group hover:bg-[#222B3D] mb-1 cursor-pointer">
                        <div className="flex p-1 w-full items-center">
                          <div className="flex items-center h-[50px] w-[50px] rounded-lg mr-1 bg-[#2C2F27] group-hover:bg-[#222B3D]">
                            <img
                              src="https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/channelemoji1.svg"
                              className="h-full w-full object-cover"
                              alt=""
                            />
                          </div>
                          <div className="flex w-5/6 justify-between ml-2">
                            <div className="flex-col text-start w-5/6">
                              <div className="flex">
                                <div className="text-[20px] truncate font-semibold">
                                  {/* Job Modules */}
                                  {channelName ? (
                                    channelName
                                  ) : (
                                    <span className="animate-blink">|</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-white">
              <div>
                <img
                  src={`https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/homeleft.svg`}
                  // src={`/onboarding/${backPage =='workSpaceName' ? 'workspace_preview.svg' : 'homeleft.svg'}`}
                  alt="Home User"
                  className="mx-auto h-[300px] md:h-[400px] w-[300px] md:w-[500px]"
                // style={imageAnimation}
                />
                <h1 className="text-2xl md:text-3xl font-bold leading-normal mt-2 md:mt-12">
                  Try <span className="text-[#FFDE08]">Workfast.ai</span> with your
                  team
                </h1>
                <h1 className="text-sm md:text-lg font-medium mt-5 md:mt-8 text-[#FFFFFF]">
                  Create a new workspace for you and your team
                </h1>
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className=" relative w-full md:w-1/2 flex justify-center items-center text-center bg-[#1E2430] mt-0 h-screen">
          <div
            className=" absolute top-8 left-5 cursor-pointer"
            onClick={() => {
              pagePosition();
            }}
          >
            <div className="flex items-center justify-center text-white">
              <FaArrowLeft className="text-[20px]" />
              <div className="ml-1 text-[20px]">Back</div>
            </div>
          </div>
          <div className="text-white mt-10 md:mt-0 w-full">
            <div className="text-center mx-auto">
              {/* wroksplace section */}
              <div className={`${workplaceSectionVisible ? "" : "hidden"} flex flex-col justify-center items-center`}>
                {/* <img src="/onboarding/workspace.svg" className="mx-auto" /> */}
                <div className="w-36 h-36 md:w-44 md:h-44">
                  <LoadLottie animationData={officeJson} loop={true} />
                </div>
                <h1 className="text-xl md:text-3xl font-[600] md:font-[700] text-white">
                  Enter your workspace name
                </h1>

                <h1 className="text-sm md:text-xl text-[#A0A3A8] mt-4 md:mt-5 mx-2 md:mx-0">
                  We Request you to give your Workspace name
                </h1>
                {/* <form onSubmit={handleContinueClick}> */}
                <form
                  className="mx-2 md:mx-0 w-full"
                  onSubmit={
                    !buttonLoading
                      ? handleWorkPlaceClick
                      : (e) => e.preventDefault()
                  }
                >
                  <input
                    ref={workspaceInputRef}
                    className="mt-6 md:mt-10 w-full md:w-10/12 bg-[#1E2430] focus:outline-none border border-white ring-2 ring-[#4B5059] py-3 px-4 rounded-md"
                    placeholder="Enter your workspace name"
                    type="text"
                    value={workPlaceName}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const normalizedValue = inputValue.replace(
                        /[^a-zA-Z0-9\s]/g,
                        ""
                      );
                      setWorkPlaceName(normalizedValue);
                    }}
                    maxLength={50}
                  />
                  {workPlaceNameError && (
                    <p className="text-red-500 mt-2 text-xs">
                      {workPlaceNameError}
                    </p>
                  )}
                  <div className="">
                    <button
                      type="submit"
                      className={`bg-[#FFDE08] text-[#2A2500] text-base md:text-lg font-semibold md:font-bold mt-6 md:mt-10 w-full md:w-3/5 mx-auto px-4 md:px-6 py-3 rounded-md`}
                    // onClick={handleContinueClick}
                    >
                      {buttonLoading ? (
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-7 h-7 me-3 text-black animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      ) : (
                        <>Continue</>
                      )}
                    </button>
                  </div>
                  {/* <div className="fixed bottom-1 left-0 right-0 flex flex-col items-center block md:hidden">
                        <button
                          type="submit"
                          className={`bg-[#FFDE08] text-white text-base md:text-lg font-semibold md:font-bold mt-6 md:mt-10 w-full mx-auto px-4 md:px-6 py-3 rounded-md`}
                          // onClick={handleContinueClick}
                        >
                          Continue
                        </button>
                      </div> */}
                </form>
              </div>
              {/* end wroksplace section */}

              {/* email section */}
              <div className={`${emailSectionVisible ? "" : "hidden"} w-full flex flex-col justify-center items-center`}>
                {/* <img
                      src="/onboarding/mail.svg"
                      className="mx-auto h-auto"
                    /> */}
                <div className="w-36 h-36 md:w-44 md:h-44">
                  <LoadLottie animationData={emailJson} loop={true} />
                </div>
                <h1 className="text-xl md:text-3xl font-[600] md:font-[700] text-white">
                  Enter your Workspace Email
                </h1>

                <h1 className="text-sm md:text-xl text-[#A0A3A8] mt-4 md:mt-6 mx-2 md:mx-0">
                  We suggest using your email address you use at work
                </h1>
                {/* <form onSubmit={handleContinueClick}> */}
                <form
                  className="mx-2 md:mx-0 w-full"
                  onSubmit={
                    !buttonLoading
                      ? handleContinueClick
                      : (e) => e.preventDefault()
                  }
                >
                  <input
                    ref={emailInputRef}
                    className="mt-6 md:mt-10 w-full md:w-10/12 bg-[#1E2430] focus:outline-none border border-white ring-2 ring-[#4B5059] py-3 px-4 rounded-md "
                    placeholder="Enter your email address"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={buttonLoading}
                  />
                  {emailError && (
                    <p className="text-red-500 mt-2 text-xs">
                      {emailError}
                    </p>
                  )}
                  <div className="">
                    <button
                      type="submit"
                      className={`bg-[#FFDE08] text-[#2A2500] text-base md:text-lg font-semibold md:font-bold mt-6 md:mt-10 w-full md:w-3/5 mx-auto px-4 md:px-6 py-3 rounded-md`}
                    // onClick={handleContinueClick}
                    >
                      {buttonLoading ? (
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-7 h-7 me-3 text-black animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      ) : (
                        <>Continue</>
                      )}
                    </button>
                  </div>
                  {/* <div className="fixed bottom-1 left-0 right-0 flex flex-col items-center block md:hidden">
                        <button
                          type="submit"
                          className={`bg-[#FFDE08] text-white text-base md:text-lg font-semibold md:font-bold mt-6 md:mt-10 w-full mx-auto px-4 md:px-6 py-3 rounded-md`}
                          // onClick={handleContinueClick}
                        >
                          Continue
                        </button>
                      </div> */}
                </form>
              </div>
              {/* end email section */}

              {/* otp section */}
              <div
                className={`${otpSectionVisible ? "" : "hidden"} w-full flex flex-col justify-center items-center`}
              >
                {/* <img
                      src="/onboarding/mail_otp.svg"
                      alt="Home User"
                      className="mx-auto h-auto w-auto"
                    /> */}
                <div className="w-36 h-36 md:w-44 md:h-44">
                  <LoadLottie animationData={otpJson} loop={true} />
                </div>
                <h1 className="text-2xl md:text-3xl font-[600] md:font-[700] text-white mt-5">
                  Mail Verification
                </h1>

                <h1 className="text-base md:text-[26px] md:text-lg text-[#A0A3A8] mt-4 md:mt-5">
                  Email has sent to {email}
                </h1>
                <form
                  className="w-full"
                  onSubmit={
                    !buttonLoading
                      ? handleOtpClick
                      : (e) => e.preventDefault()
                  }
                >
                  <div
                    id="otp"
                    className="flex flex-row justify-center text-center items-center px-2 mt-5 w-full"
                  >
                    {otpInputs.map((input, index) => (
                      <input
                        key={index}
                        className={`m-2 border ${input !== ""
                            ? "border-[#FFDE08] ring-2 ring-[#484729]"
                            : "border-[#A0A3A8]"
                          } h-[45px] sm:h-[60px] md:h-[62px] lg:h-[74px] w-[35px] sm:w-[50px] md:w-[50px] lg:w-[62px] text-center form-control rounded-2xl md:rounded-3xl bg-transparent focus:ring-2 focus:ring-[#FFDE08]`}
                        type="tel"
                        maxLength="1"
                        value={input}
                        onChange={(e) =>
                          handleInputChange(index, e.target.value)
                        }
                        onKeyDown={(e) => handleInputKeyDown(index, e)}
                        ref={inputRefs.current[index]}
                        onFocus={() => {
                          //console.log("focused");
                        }}
                      />
                    ))}
                  </div>
                  {otpError && (
                    <p className="text-red-500 mt-2 text-xs">{otpError}</p>
                  )}
                  <div className="flex justify-center text-center mt-1 md:mt-5">
                    {countdown === 0 ? (
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={handleContinueClick}
                      >
                        <span className="font-bold text-[#FFDE08]">
                          Resend OTP
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center cursor-pointer">
                        <span className="text-[14px] md:text-[18px] font-[400] md:font-[600] text-[#FFF]">
                          Resend code in{" "}
                          <span className="text-[#FFDE08]">
                            {formatCountdown()}
                          </span>{" "}
                          seconds
                        </span>
                        <i className="bx bx-caret-right ml-1"></i>
                      </div>
                    )}
                  </div>

                  <div className="w-10/12 md:w-full mx-auto flex">
                    <button
                      type="submit"
                      className={`bg-[#FFDE08] mb-0 md:mb-0 text-[#2A2500] text-base md:text-lg font-semibold md:font-bold mt-5 md:mt-10 w-full md:w-3/5 mx-auto px-4 md:px-6 py-3 rounded-md ${isContinueDisabled
                          ? "md:opacity-50 cursor-not-allowed"
                          : ""
                        }`}
                      disabled={isContinueDisabled}
                    >
                      {buttonLoading ? (
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-7 h-7 me-3 text-black animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      ) : (
                        <>Continue</>
                      )}
                    </button>
                  </div>
                  {/* <div className="fixed bottom-1 left-0 right-0 flex flex-col items-center block md:hidden">
                        <button
                          type="submit"
                          className={`bg-[#FFDE08] mb-0 md:mb-0 text-white text-base md:text-lg font-semibold md:font-bold mt-3 md:mt-10 w-full md:w-3/5 mx-auto px-4 md:px-6 py-3 rounded-md ${
                            isContinueDisabled
                              ? "md:opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={isContinueDisabled}
                          // onClick={() => {
                          //   handleOtpClick();
                          // }}
                        >
                          Continue
                        </button>
                      </div> */}
                </form>
              </div>
              {/* end otp section */}

              {/* profile section */}
              <div className={`${profileSectionVisible ? "" : "hidden"}`}>
                <h1 className="text-2xl md:text-3xl font-[600] md:font-[700] mt-0 md:mt-[66px] text-white">
                  Create your Profile
                </h1>

                <h1 className="text-sm md:text-lg text-[#A0A3A8] mt-3 md:mt-3">
                  Create your profile by adding your name and profile
                  picture
                </h1>
                {/* <form onSubmit={handleContinueProfile}> */}
                <form
                  onSubmit={
                    !buttonLoading
                      ? handleContinueProfile
                      : (e) => e.preventDefault()
                  }
                >
                  <div className="text-start mt-3 md:mt-5 w-full md:w-4/6 mx-auto">
                    <div className="text-center justify-center items-center">
                      {/* Input for uploading image */}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        ref={(fileInput) =>
                          (fileInputRef.current = fileInput)
                        }
                      />
                      <div
                        className="text-center cursor-pointer"
                        onClick={() => fileInputRef.current.click()}
                      >
                        {selectedImage ? (
                          <div>
                            <img
                              src={selectedCropeImage}
                              alt="Selected User"
                              className="mx-auto h-[150px] w-[150px]  object-cover rounded-lg"
                            />
                            <p className="text-md md:text-md text-[#FFDE08] font-[600] mt-2">
                              Add Picture
                            </p>
                          </div>
                        ) : (
                          <div>
                            <img
                              src="https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/profileuser.svg"
                              alt="Home User"
                              className="mx-auto h-[150px] w-[150px]"
                            />
                            <p className="text-md md:text-md text-[#FFDE08] font-[600] mt-2">
                              Add Picture
                            </p>
                          </div>
                        )}

                        {profilePictureError && (
                          <p className="text-red-500 text-xs">
                            {profilePictureError}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="w-11/12 md:w-full mx-auto">
                      <h1 className="text-md md:text-[22px] font-medium text-[#FFF]">
                        Name*
                      </h1>
                      <input
                        className="w-full mx-auto bg-[#1E2430] focus:outline-none border border-white ring-2 ring-[#4B5059] mt-1 py-3 px-4 rounded-md"
                        placeholder="Enter Name"
                        type="text"
                        value={adminUserName}
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          const normalizedValue = inputValue.replace(
                            /[^a-zA-Z0-9\s]/g,
                            ""
                          );
                          setAdminUserName(normalizedValue);
                        }}
                      />

                      {adminUserNameError && (
                        <p className="text-red-500 text-xs">
                          {adminUserNameError}
                        </p>
                      )}

                      <h1 className="text-md mt-3 md:text-lg font-medium text-[#FFF]">
                        Designation<span className="text-xs"> (optional)</span>
                      </h1>
                      <input
                        ref={designationRef}
                        className="w-full mx-auto bg-[#1E2430] focus:outline-none border border-white ring-2 ring-[#4B5059] mt-1 py-3 px-4 rounded-md"
                        placeholder="Enter designation"
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                      />

                      {designationError && (
                        <p className="text-red-500 text-xs">
                          {designationError}
                        </p>
                      )}

                      {/* Continue button */}
                      <div className="">
                        <button
                          className={`bg-[#FFDE08] mb-1 md:mb-0 text-[#2A2500] text-base md:text-lg font-semibold md:font-bold mt-6 md:mt-10 w-full mx-auto px-4 md:px-6 py-3 rounded-md ${isContinueDisabled
                              ? //   ? "md:opacity-50 cursor-not-allowed"
                              ""
                              : ""
                            }`}
                        //   disabled={isContinueDisabled}
                        // onClick={handleContinueProfile}
                        >
                          {buttonLoading ? (
                            <svg
                              aria-hidden="true"
                              role="status"
                              className="inline w-7 h-7 me-3 text-black animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                          ) : (
                            <>Continue</>
                          )}
                        </button>
                      </div>

                      {/* <div className="fixed bottom-0 left-0 right-0 flex flex-col items-center block md:hidden">
                            <button
                              className={`bg-[#FFDE08] mb-1 md:mb-0 text-white text-base md:text-lg font-semibold md:font-bold mt-6 md:mt-20 w-full mx-auto px-4 md:px-6 py-3 rounded-md`}
                              // onClick={handleContinueProfile}
                            >
                              Continue
                            </button>
                          </div> */}
                    </div>
                  </div>
                </form>
              </div>
              {/* end profile section */}

              {/* start cropImage section */}
              <div
                className={`${cropImageSectionVisible ? "" : "hidden"
                  } h-3/5 w-full md:w-11/12 flex-col justify-center items-center text-center mx-auto px-2`}
              >
                <div className="Crop-Controls mb-1">
                  <div className="flex justify-center items-center">
                    <div className="mr-2 text-white text-md">
                      Switch to Freeform Crop
                    </div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleToggleAspectClick}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div className="w-full bg-[#383D48] rounded-lg">
                  {!!imgSrc && (
                    <ReactCrop
                      className="mt-2"
                      crop={crop}
                      onChange={(_, percentCrop) => setCrop(percentCrop)}
                      onComplete={(c) => setCompletedCrop(c)}
                      aspect={aspect}
                    >
                      <img
                        className="h-[350px] md:h-[500px] p-0 object-cover"
                        ref={imgRef}
                        alt="Crop me"
                        src={imgSrc}
                        style={{
                          transform: `scale(${scale}) rotate(${rotate}deg)`,
                        }}
                        onLoad={onImageLoad}
                      />
                    </ReactCrop>
                  )}
                </div>

                {!!completedCrop && (
                  <div className="w-full flex justify-between items-center text-center mt-4">
                    <div className=" w-[50px] md:w-[100px] h-[50px] md:h-[100px]">
                      <canvas
                        className="w-[50px] md:w-[100px] h-[50px] md:h-[100px]"
                        ref={previewCanvasRef}
                        style={{
                          border: "0.2px solid #FFC700",
                          objectFit: "contain",
                          // width: completedCrop.width,
                          // height: completedCrop.height,
                        }}
                      />
                    </div>
                    <div className="flex justify-end items-center">
                      <button
                        onClick={() => {
                          setSelectedCropImage(null);
                          setSelectedImage(null);
                          setImgSrc(null);
                          setOtpSectionVisible(false);
                          setEmailSectionVisible(false);
                          setProfileSectionVisible(true);
                          setInviteSectionVisible(false);
                          setCropImageSectionVisible(false);
                          if (fileInputRef.current) {
                            fileInputRef.current.value = "";
                          }
                        }}
                        className=" bg-transparent text-[#FFDE08] text-sm rounded-lg px-4 py-2 mr-5 border border-[#FFDE08]"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={onDownloadCropClick}
                        className=" bg-[#FFDE08] text-[#2A2500] text-sm font-[500] rounded-lg px-4 py-2 border border-[#FFDE08]"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* end cropImage section */}

              {/* invite section */}
              <div
                className={`${inviteSectionVisible ? "" : "hidden"} w-full flex flex-col justify-center items-center`}
              >
                {/* <img
                      src="/onboarding/invite.svg"
                      alt="Home User"
                      className="mx-auto h-auto w-auto"
                    /> */}
                <div className="w-36 h-36 md:w-44 md:h-44">
                  <LoadLottie animationData={inviteJson} loop={true} />
                </div>

                <h1 className="text-xl md:text-xl font-[600] md:font-[700] text-white leading-tight">
                  Invite team member to your workspace
                </h1>

                <h1 className="text-base md:text-[22px] md:text-lg text-[#A0A3A8] font-medium mt-3">
                  Come . Connect . Collaborate
                </h1>
                <div className="flex text-center items-end mt-6 md:mt-10 w-11/12 md:w-10/12 mx-auto bg-[#1E2430] focus:outline-none border border-white ring-2 ring-[#4B5059] py-1 md:py-2 px-2 rounded-md">
                  <div className=" flex flex-wrap h-auto max-h-[200px] md:max-h-[300px] overflow-y-auto w-full">
                    {inviteEmails.map((email, index) => (
                      <div
                        key={index}
                        className="w-auto flex justify-start text-center items-center bg-[#2C313D] py-2 px-3 rounded-[12px] ml-2 mt-1"
                      >
                        <div className="text-[14px] text-[#E7E8E9] md:text-[18px] font-medium">
                          {email}
                        </div>
                        <div
                          className="ml-3 w-[14px] cursor-pointer"
                          onClick={() => handleRemoveEmail(index)}
                        >
                          <img src="https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/close.svg" alt="Close" />
                        </div>
                      </div>
                    ))}
                    {/* border-b-[0.5px] border-[#333844] */}
                    <div className="w-full flex text-center items-center pb-2 px-1 mt-1 ml-2 ">
                      <input
                        ref={inviteInputRef}
                        type="text"
                        className={`focus:outline-none bg-transparent w-full ${inviteEmails.length <= 0 ? "" : ""
                          } mt-1 pb-1`}
                        value={inviteNewEmail}
                        onChange={handleEmailInput}
                        onKeyDown={handleEnter}
                        placeholder={`${inviteEmails.length <= 0
                            ? "Ex:mac@gmail.com"
                            : "Enter valid email"
                          }`}
                        autoFocus
                      />
                    </div>
                  </div>
                  <div
                    className={`flex justify-end ${inviteEmails.length <= 0 ? "mb-0" : "mb-2"
                      }`}
                  >
                    {/* <GrAddCircle className="text-[30px] text-[#8FA4AD] cursor-pointer" onClick={()=>{ handleAddEmail(); }} /> */}
                    <div className=" flex justify-center items-center">
                      <img
                        src="https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/add_plus_icon.svg"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => {
                          handleAddEmail();
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className=" flex w-full justify-end">asa</div> */}
                {inviteEmailError && inviteNewEmail !== "" && (
                  <p className="text-red-500 mt-2 text-xs">
                    {inviteEmailError}
                  </p>
                )}
                {/* <button className="text-end bg-transparent mt-2 text-[#00A3F6] text-[17px] md:text-[21px] font-medium md:font-medium w-11/12 md:w-10/12 ">
                      Get sharable link instead
                    </button> */}
                <div className="w-full">
                  <button
                    className={`bg-[#FFDE08] text-[#2A2500] text-base md:text-lg font-[500] md:font-[600] mt-6 md:mt-10 w-11/12 md:w-6/12 mx-auto px-4 md:px-6 py-3 rounded-md ${inviteEmails.length <= 0 || buttonLoading
                        ? "md:opacity-50"
                        : ""
                      }`}
                    disabled={inviteEmails.length === 0}
                    onClick={() => {
                      if (!buttonLoading) {
                        inviteTeamMembers();
                      }
                    }}
                  >
                    Launch
                  </button>

                  <button
                    className=" bg-transparent mb-3 md:mb-0 text-[#E7E8E9] mt-4 text-base md:text-lg font-[500] md:font-[500] w-11/12 md:w-3/5 mx-auto px-4 md:px-6 py-3 rounded-md"
                    onClick={() => {
                      setFocusIndex(3);
                      setChannelNameError("");
                      setChannelName("");
                      setWorkPlaceSectionVisible(false);
                      setEmailSectionVisible(false);
                      setOtpSectionVisible(false);
                      setProfileSectionVisible(false);
                      setInviteSectionVisible(false);
                      setChannelCreationSection(true);
                      setBackPage("channel");
                    }}
                  >
                    Skip for now
                  </button>
                </div>

                {/* <div className="fixed bottom-0 left-0 right-0 flex flex-col items-center block md:hidden bg-[#1E2430]">
                      <button
                        className={`bg-[#FFDE08] text-[#E7E8E9] text-base md:text-lg font-[500] md:font-[600] mt-6 md:mt-10 w-full mx-auto px-4 md:px-6 py-3 rounded-md ${
                          inviteEmails.length <= 0 ? " md:opacity-50" : ""
                        }`}
                        disabled={inviteEmails.length === 0}
                        onClick={() => {
                          router.push("/workplace");
                        }}
                      >
                        Add Teammates
                      </button>

                      <button
                        className=" bg-transparent mb-3 md:mb-0 text-[#E7E8E9] mt-4 text-base md:text-lg font-[500] md:font-[600] w-full mx-auto px-4 md:px-6 py-3 rounded-md"
                        onClick={() => {
                          router.push("/home");
                        }}
                      >
                        Skip for now
                      </button>
                    </div> */}
              </div>
              {/* end invite section */}

              {/* start channel section */}
              <div className={`${channelCreationSection ? "" : "hidden"}`}>
                <img src="https://dz1x1c630cl14.cloudfront.net/webassets/onboarding/channel.svg" className="mx-auto" alt="" />
                <h1 className="text-xl md:text-3xl font-[600] md:font-[700] text-white mt-5">
                  Create Your First Channel
                </h1>

                <h1 className="text-sm md:text-xl text-[#A0A3A8] mt-4 md:mt-5 mx-2 md:mx-0">
                  Start sharing, connecting, and building today!
                </h1>
                {/* <form onSubmit={handleContinueClick}> */}
                <form
                  className="mx-2 md:mx-0"
                  onSubmit={
                    !buttonLoading
                      ? handleChannelClick
                      : (e) => e.preventDefault()
                  }
                >
                  <input
                    // ref={workspaceInputRef}
                    className="mt-6 md:mt-10 w-full md:w-10/12 bg-[#1E2430] focus:outline-none border border-white ring-2 ring-[#4B5059] py-3 px-4 rounded-md"
                    placeholder="Enter your channel name"
                    type="text"
                    value={channelName}
                    onChange={(e) => {
                      channelTiltleChange(e);
                      // const inputValue = e.target.value;
                      // const normalizedValue = inputValue.replace(
                      //   /[^a-zA-Z0-9\s]/g,
                      //   ""
                      // );
                      // setChannelName(normalizedValue);
                    }}
                    maxLength={50}
                  />
                  {channelNameError && (
                    <p className="text-red-500 mt-2 text-xs">
                      {channelNameError}
                    </p>
                  )}
                  <div className="">
                    {buttonLoading ? (
                      <div className={`bg-[#FFDE08] text-[#2A2500] text-base md:text-lg font-semibold md:font-bold mt-6 md:mt-10 w-full md:w-3/5 mx-auto px-4 md:px-6 py-3 rounded-md`}>
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-7 h-7 me-3 text-black animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        className={`bg-[#FFDE08] text-[#2A2500] text-base md:text-lg font-semibold md:font-bold mt-6 md:mt-10 w-full md:w-3/5 mx-auto px-4 md:px-6 py-3 rounded-md`}
                        // onClick={handleContinueClick}
                        disabled={buttonLoading}
                      >
                        Continue
                      </button>
                    )}
                  </div>
                </form>
                <div className="">
                  <button
                    type="submit"
                    className={`text-white text-base md:text-lg font-semibold md:font-[500] mt-6 md:mt-5 w-full md:w-3/5 mx-auto px-4 md:px-6 py-3 rounded-md`}
                    onClick={() => {
                      const workspaceResponse = workPlaceDetails.workspaceDetails;
                      userDetailsStorage.setState({ userId: userDetails.userId });
                      userDetailsStorage.setState({ userToken: userDetails.userToken });
                      userDetailsStorage.setState({ companyId: userDetails.companyId });
                      userDetailsStorage.setState({ userName: userDetails.userName });
                      userDetailsStorage.setState({ useImage: userDetails.userImage });
                      userDetailsStorage.setState({ userEmail: userDetails.emailId });
                      userDetailsStorage.setState({ userDesignation: userDetails.designation });
                      userDetailsStorage.setState({ workSpaceUrl: workspaceResponse.workspaceUrl });
                      userDetailsStorage.setState({ companyName: workspaceResponse.workspaceName });
                      userDetailsStorage.setState({ deviceId: deviceId });
                      navigate('/success');
                    }}
                  >
                    Skip for now
                  </button>
                </div>
              </div>
              {/* end channel section */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
