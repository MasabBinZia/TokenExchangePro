import React from "react";
import "./Sub.css";

const Sub: React.FC = () => {
  return (
    <div className="sub">
      <div className="content">
        <h2>Join Our TokenExchangePro Community</h2>
        <form action="">
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your Email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
            <input type="checkbox" />
            <p>
              Yes, I agree to receive email communications from
              TokenExchangePro.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sub;
