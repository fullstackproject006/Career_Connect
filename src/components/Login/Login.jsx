import React, { useState } from "react";
import UserLogin from "./UserLogin/UserLogin";
import RecruiterLogin from "./RecruiterLogin/RecruiterLogin";
import "./Login.css";
import { useAppNavigation } from "../../helpers/navigationHelper";

const Login = () => {
  const [isProfile, setIsProfile] = useState({
    user: true,
    recruiter: false,
  });

  const handleUserChange = () => {
    setIsProfile({ user: true, recruiter: false });
  };

  const handleRecruiterChange = () => {
    setIsProfile({ user: false, recruiter: true });
  };

  const{goHome}=useAppNavigation()

  return (
    <div className="login-wrapper">
      <div className="tab">
        <h4
          className={isProfile.user ? "active" : ""}
          onClick={handleUserChange}
        >
          User
        </h4>

        <h4
          className={isProfile.recruiter ? "active" : ""}
          onClick={handleRecruiterChange}
        >
          Recruiter
        </h4>
      </div>

      <div className={`form-container ${isProfile.user ? "user-border" : "user-border"}`}>
        {isProfile.user && <UserLogin />}
        {isProfile.recruiter && <RecruiterLogin />}
        <div className="go-back">
          <div onClick={()=>goHome()}>← Go Back</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
